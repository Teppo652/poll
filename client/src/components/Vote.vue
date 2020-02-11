<template>
  <div>    
    <section v-if="votedSportIds.length<6" class="events" id="events">     
      <h2 v-if="sport">{{ sport.name }} <small style="float: right">Voted {{ votes.length }} events of {{ events.length}} in {{ sport.name }}</small></h2>
      <p v-if="votedSportIds">voted sports: {{ votedSportIds.length }} / 5</p>
      <ul>
        <li v-for="event in events" :key="event.id"
          :class="votes.find(x => x.id == event.id) ? 'voted': ''">
          <span class="caption-left">{{ event.country }}</span>
          <span class="caption-right">{{ event.state }}</span>
          <p>{{ event.name }}</p>
          <div>
            <a @click.prevent="vote(event.id, 0), $event.target.classList.toggle('voted')" align="left">Chania FC</a>
            <a @click.prevent="vote(event.id, 1), $event.target.classList.toggle('voted')" class="tide" align="left">&ldrushar;</a>
            <a @click.prevent="vote(event.id, 2), $event.target.classList.toggle('voted')" align="left">Panthrakikos Komotini</a>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Vote',
  data () {
    return {
      sports: [],
      events: [],
      votedSportIds: [],
      event: null,
      sport: null,
      votes: []
    }
  },
  methods: {
    loadSports() {
      // loads all sport category names
      this.getData('GET','sports');
    },
    loadEventsBySport() {
      // loads all events in one sport category
      this.getData('GET','eventsBySport');      
    },
    // selects next sport category and populates events card grid
    getNextRandomSport() {
      let randomIndex;
      if(this.sports.length > 0) {
        do{ 
          randomIndex = Math.floor(Math.random() * this.sports.length+1);
        } while(this.votedSportIds.indexOf(this.sports[randomIndex].id) != -1);
        this.sport = this.sports[randomIndex];
        this.votedSportIds.push(this.sport.id);
        this.events = [];
        this.getData('GET','eventsBySport', this.sport.name);
      }
    },
    // vote button in event is clicked, save in DB
    vote(id, vote) {
      this.votes.push({"id": id, "winner": vote });
      this.getData('GET','saveVote', id, vote);
      // all events on screen have been voted
      if(this.votes.length == this.events.length) { 
        this.votes = [];
        //if(this.votedSportIds.length<5) {
          this.getNextRandomSport();
        // }
      }
    },    
    // all queries to backend are done here
    getData(method, path, id=null, vote=null) {
      let url = 'http://localhost:3000/' + path;
      if(id != null) { url += '/' + id; }
      if(vote != null) { url += '/' + vote; }
      let self = this;
      fetch(url, {
        method: method,
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }) 
      }).then(res => {
        if (res.ok) {
         return res.json();
        } else {
          console.log('No eventIds found: ', res);
        }  
      }).then(data => {
        console.log('Data found for ' + path + ': ', data);
        switch (path) {
          case 'sports': this.sports = data; break;
          case 'eventsBySport': this.events = data; break;   
          case 'saveVote': console.log('Vote saved in DB:', data); self.getNextRandomEvent(); break;
        }
      })
      .catch(error => { 
        console.error(error);
      });
    }
  }, // end methods
  watch: {
    // after sports are loaded code execution continues here
    sports() {
      this.getNextRandomSport();
    },
  },
  created() {
    // app init
    this.loadSports();
    this.loadEventsBySport();
  }
}
</script>
