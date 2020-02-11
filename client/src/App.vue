<template>
  <div id="app">
    
    <main class="wrapper">
      <section class="hero">
        <h1>Sports bet</h1>
        <article>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>
      </section>
      <router-view/>
    </main>
    <footer>
      <p>Photo by Ravigopal Kesari on Unsplash</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Source+Sans+Pro:200,400');

/* fonts */
body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2 {
  color: #fff;
  font-family: 'Nunito', sans-serif;
  font-weight: 100;
}

p, a {
  font-family: 'Montserrat', sans-serif;
}

.caption-left, .caption-right {
  font-family: 'Nunito', sans-serif; 
}

/* generic styles */
html {
  background-color: #404040;
  scroll-behavior: smooth;
}

a {
  color: #d7fff4;
  text-decoration: none;  
  border-radius: .12rem;
  text-align: center;
  display: inline-block;
  transition: all .3s;
}

a:hover {
  opacity: .6;
}

/* hero image styles */
.hero {
  background: url('https://img.techpowerup.org/200211/main.jpg') center;
  background-size: cover;
  padding: 4rem 2rem;
  /* grid styles */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;
}

.hero > * {
  color: white;
}

.hero > h1 {
  font-size: 4rem;
  padding-bottom: 1rem;
  text-align: center;
}

.hero > article > p {
  font-size: 1.5rem;
  font-weight: 200;
}

/* event cards grid styles */
.events {
  padding: .5rem 2rem;
}

.events > ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1.6rem;
  padding-inline-start: 0;
}

.events > ul > li {
  list-style-type: none;
  border: 1px solid #486d62;
  /* border-radius: .35rem; */
  background-color: #333;
  color: white;
}

.events > ul > li > p {
    font-size: 1.6rem;
    padding: 0 .7rem;
    display: inline-table;
    overflow: hidden;
    text-align: center;
    height: 65px;
}
.events > ul > li > span {
    /*margin: .3rem .4rem; */
    font-size: .7rem;
    letter-spacing: .05rem;    
    padding: 4px 14px;
    border: solid 1px #97beb3;
    border-radius: 6px;
    margin-top: -11px;
}
.events > ul > li > .caption-left {
  float: left;
  color: #09a97c;
  background-color: #fff;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
}
.events > ul > li > .caption-right {
  float: right;
  color: #d7fff4;
  background-color: #409d83;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}
.events > ul > li > div {
  display: flex;
  padding: .2rem;
}
.events > ul > li > div > a {
  background-color: #409d83;
  padding: .5rem 2rem;
  margin: .5rem .2rem;
  width: 100%;
  align-items: center;
  display: flex;
  cursor: pointer;
}

.events > ul > li > div > .tide {
  width: 18px;
  font-size: 26px;
  padding: 2px 11px 4px 11px;
}

.events > ul > .voted {
  opacity: .2;
  z-index: -1;
}
.events > ul > li > div > .voted {
  background-color: #fff;
  color: #000;
}

/* footer */
footer {
  background-color: #333;
  padding: .75rem;
  color: white;
  text-align: center;
  font-size: .75rem;
}

/* responsive styles */
@media only screen and (min-width: 1600px) {
  .events {
      padding: .5rem 15%;
  }
}
@media only screen and (min-width: 980px) and (max-width: 1023px) { 
  .events {
    padding: .25rem 1rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 979px) {
  html {
    font-size: small;
  }
  .hero > h1 {
    font-size: 3rem;
  }
  .events {
    padding: .12rem .5rem;
  }
}

@media only screen and (max-width: 767px) {
  html {
    font-size: x-small;
  }
  .hero {
    padding: 0 .6rem;
  }
  .hero > h1 {
    font-size: 3rem;
  }
  .hero > article > p {
    font-size: 1rem;
  }
  .events {
      padding: 0;
  }
  .events > ul {
    grid-gap: 3rem;
  }
}
</style>
