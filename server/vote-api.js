const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// connect to local DB
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'sportspoll'
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// get all sport category names
app.get('/sports', (req, res) => {
    con.query("SELECT * FROM sports", function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// get all events in one sport category
app.get('/eventsBySport/:sport', (req, res) => {
    const sport = req.params.sport;
    con.query("SELECT * FROM events where sport = '" + sport + "'", function (err, result) {
      if (err) throw err;     
      res.json(result);     
    });
});

// save single vote - no user identifier saved
app.get('/saveVote/:event/:vote', (req, res) => {  
  const event = req.params.event; // read URL data
  const vote = req.params.vote;
  if(event != '' && vote != '')
   {    
        // check if vote for this event exists        
        let voteExists = false;        
        con.query(
            'SELECT id FROM votes WHERE event=' + event + ' AND vote="'+ vote + '"',            
            function (err, result) {
                if (err) throw err;
                if(typeof result != 'undefined' && result != null) { 
                    voteExists = true; 
                }
        });
        
        // save vote
        if(voteExists == false) {
            con.query(
                'INSERT INTO votes (event, vote) VALUES (' + event + ',"'+ vote + '")',
                function (err, result) {
                    if (err) throw err;                    
                    res.json(result);
            });
        } 
    } else {
        res.sendStatus(400).send('Error, Event or Vote does not have value');
    }
});

app.listen(port, () => console.log(`Sportsvote app listening on port ${port}`));