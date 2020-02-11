// this is script for importing hard coded json file into MySQL database
// needs to be run manually once: node copyJsonDataIntoDB.js

let events = [
    { 'awayname': 'Panthrakikos Komotini',
    'createdAt': '2015-12-18T12:30:39.228Z',
    'groupname': 'Greek Cup',
    'homename': 'Chania FC',
    'id': 1002916450,
    'name': 'Chania FC - Panthrakikos Komotini',
    'objectid': '1UaQjc7lIb',
    'sport': 'FOOTBALL',
    'country': 'ENGLAND',
    'state': 'STARTED' },
  { 'awayname': 'PAOK Thessaloniki',
    'createdAt': '2015-12-18T12:30:39.234Z',
    'groupname': 'Greek Cup',
    'homename': 'Olympiakos Volos',
    'id': 1002916451,
    'name': 'Olympiakos Volos - PAOK Thessaloniki',
    'objectid': 'UPJ240T2Qj',
    'sport': 'FOOTBALL',
    'country': 'FRANCE',
    'state': 'STARTED' },
  { 'awayname': 'Ukraine U18',
    'createdAt': '2015-12-18T12:30:39.244Z',
    'groupname': 'Under 18',
    'homename': 'Israel U18',
    'id': 1003022920,
    'name': 'Israel U18 - Ukraine U18',
    'objectid': 'fZZUhitsVt',
    'sport': 'FOOTBALL',
    'country': 'SWEDEN',

    'state': 'STARTED' },
  { 'awayname': 'Stade Gabesien',
    'createdAt': '2015-12-18T12:30:39.249Z',
    'groupname': 'Ligue 1',
    'homename': 'CA Bizertin',
    'id': 1003015194,
    'name': 'CA Bizertin - Stade Gabesien',
    'objectid': 'Bf52z7GIut',
    'sport': 'FOOTBALL',
    'country': 'SWEDEN',
    'state': 'STARTED' },
  { 'awayname': 'AS de la Marsa',
    'createdAt': '2015-12-18T12:30:39.255Z',
    'groupname': 'Ligue 1',
    'homename': 'Club Africain',
    'id': 1003015197,
    'name': 'Club Africain - AS de la Marsa',
    'objectid': 'sFjPkmljKv',
    'sport': 'FOOTBALL',
    'country': 'ENGLAND',
    'state': 'STARTED' },
  { 'awayname': 'Kastamonuspor',
    'createdAt': '2015-12-18T12:30:39.261Z',
    'groupname': 'Türkyie Kupasi',
    'homename': 'Karşıyaka',
    'id': 1003016331,
    'name': 'Karşıyaka - Kastamonuspor',
    'objectid': 'cRqV2RTmsu',
    'sport': 'FOOTBALL',
    'country': 'FRANCE',
    'state': 'FINISHED' },
  { 'awayname': 'Allen, Gareth',
    'createdAt': '2015-12-18T12:30:39.266Z',
    'groupname': 'German Masters Qualifiers',
    'homename': 'Ding Junhui',
    'id': 1003018193,
    'name': 'Ding Junhui - Allen, Gareth',
    'objectid': 'nPuz011p0W',
    'sport': 'SNOOKER',
    'country': 'SWEDEN',
    'state': 'NOT_STARTED' },
  { 'awayname': 'Lines, Peter',
    'createdAt': '2015-12-18T12:30:39.272Z',
    'groupname': 'German Masters Qualifiers',
    'homename': 'Trump, Judd',
    'id': 1003018186,
    'name': 'Trump, Judd - Lines, Peter',
    'objectid': 'CSJn3kZhdx',
    'sport': 'SNOOKER',
    'country': 'ENGLAND',
    'state': 'NOT_STARTED' },
  { 'awayname': 'SKIF-Krasnodar',
    'createdAt': '2015-12-18T12:30:39.278Z',
    'groupname': 'Cup',
    'homename': 'Dinamo Astrakhan',
    'id': 1003027200,
    'name': 'Dinamo Astrakhan - SKIF-Krasnodar',
    'objectid': 'enCbqOuRLr',
    'sport': 'HANDBALL',
    'country': 'SWEDEN',
    'state': 'STARTED' },
  { 'awayname': 'THK Tver',
    'createdAt': '2015-12-18T12:30:39.283Z',
    'groupname': 'VHL',
    'homename': 'Zauralie Kurgan',
    'id': 1002988754,
    'name': 'Zauralie Kurgan - THK Tver',
    'objectid': '7HWfuCIMlp',
    'sport': 'ICE_HOCKEY',
    'country': 'ENGLAND',
    'state': 'STARTED' },
  { 'awayname': 'Doumbia, S/Reboul, F',
    'createdAt': '2015-12-18T12:30:39.289Z',
    'groupname': 'Nigeria',
    'homename': 'Harris, L G M/Maamoun, K M',
    'id': 1003026313,
    'name': 'Harris, L G M/Maamoun, K M - Doumbia, S/Reboul, F',
    'objectid': 'JxrZyQKTrw',
    'sport': 'TENNIS',
    'country': 'FRANCE',
    'state': 'STARTED' },
  { 'awayname': 'Halebian, Alexios',
    'createdAt': '2015-12-18T12:30:39.294Z',
    'groupname': 'Dominican Republic',
    'homename': 'Bangoura, Sekou',
    'id': 1003026667,
    'name': 'Bangoura, Sekou - Halebian, Alexios',
    'objectid': 'tALMRNqAxD',
    'sport': 'TENNIS',
    'country': 'SWEDEN',
    'state': 'NOT_STARTED' },
  { 'awayname': 'Roberts, Justin',
    'createdAt': '2015-12-18T12:30:39.300Z',
    'groupname': 'Dominican Republic',
    'homename': 'Pla Malfeito, Jaume',
    'id': 1003026666,
    'name': 'Pla Malfeito, Jaume - Roberts, Justin',
    'objectid': 'KGA9nqYAJl',
    'sport': 'TENNIS',
    'country': 'ENGLAND',
    'state': 'FINISHED' },
  { 'awayname': 'Mridha, J',
    'createdAt': '2015-12-18T12:30:39.306Z',
    'groupname': 'Qatar',
    'homename': 'Clayton, Scott',
    'id': 1003026476,
    'name': 'Clayton, Scott - Mridha, J',
    'objectid': 'utc63de1Fl',
    'sport': 'TENNIS',
    'country': 'FRANCE',
    'state': 'STARTED' },
  { 'awayname': 'Kania, P/Kerkhove, L',
    'createdAt': '2015-12-18T12:30:39.311Z',
    'groupname': 'Ankara',
    'homename': 'Buyukakcay, C/Krunic, A',
    'id': 1003026234,
    'name': 'Buyukakcay, C/Krunic, A - Kania, P/Kerkhove, L',
    'objectid': 'mTVUIuYdbF',
    'sport': 'TENNIS',
    'country': 'SWEDEN',
    'state': 'NOT_STARTED' },
  { 'awayname': 'Chernetsova, D/Perper, A',
    'createdAt': '2015-12-18T12:30:39.317Z',
    'groupname': 'El Kantaoui',
    'homename': 'Baskova, D/Podlinska, M',
    'id': 1003026673,
    'name': 'Baskova, D/Podlinska, M - Chernetsova, D/Perper, A',
    'objectid': 'heL53W56d2',
    'sport': 'TENNIS',
    'country': 'FRANCE',
    'state': 'STARTED' },
  { 'awayname': 'Njoze, M',
    'createdAt': '2015-12-18T12:30:39.322Z',
    'groupname': 'El Kantaoui',
    'homename': 'Stoilkovska, M',
    'id': 1003026214,
    'name': 'Stoilkovska, M - Njoze, M',
    'objectid': 'gldlV9xhi2',
    'sport': 'TENNIS',
    'country': 'SWEDEN',
    'state': 'STARTED' },
  { 'awayname': 'Haas, Barbara',
    'createdAt': '2015-12-18T12:30:39.328Z',
    'groupname': 'Navi Mumbai',
    'homename': 'Jia-Jing Lu',
    'id': 1003026299,
    'name': 'Jia-Jing Lu - Haas, Barbara',
    'objectid': 'V6Qsm2Wlms',
    'sport': 'TENNIS',
    'country': 'ENGLAND',
    'state': 'FINISHED' }
  ];  


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'sportspoll'
});
/*
      $dbName="eat";
      $username = "root"; // root
      $password = "";
      // $servername = "127.0.0.1:8080"; // 
      $servername = "localhost"; 
*/
con.connect(function(err) {
  if (err) throw err;  

  // create sports table
  let createVotesQuery = "create table sports (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20));";
  con.query(createEventsQuery, function (err, result) {
    if (err) throw err;
    console.log("Sports table created");
  });
  /* manually inserted values:
  INSERT INTO `sports` (`id`, `name`) VALUES (NULL, 'FOOTBALL');
  INSERT INTO `sports` (`id`, `name`) VALUES (NULL, 'SNOOKER');
  INSERT INTO `sports` (`id`, `name`) VALUES (NULL, 'HANDBALL');
  INSERT INTO `sports` (`id`, `name`) VALUES (NULL, 'ICE_HOCKEY');
  INSERT INTO `sports` (`id`, `name`) VALUES (NULL, 'TENNIS');
  */


  // create events table
  let createEventsQuery = "create table events (id INT PRIMARY KEY,objectId VARCHAR(20),sport VARCHAR(20),country VARCHAR(20),state VARCHAR(20),groupName VARCHAR(50),homeName VARCHAR(50),name VARCHAR(50),awayName VARCHAR(50),createdAt VARCHAR(50));";
  con.query(createEventsQuery, function (err, result) {
    if (err) throw err;
    console.log("Events table created");
  });

  // create votes table
  let createVotesQuery = "create table votes (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,event INT,vote TINYINT UNSIGNED);";
  con.query(createEventsQuery, function (err, result) {
    if (err) throw err;
    console.log("Votes table created");
  });


// construct SQL insert statement with all events
let sqlQuery = "INSERT INTO events (awayName,createdAt,groupName,homeName,id,name,objectId,sport,country,state) VALUES ";
let i;
let event = null;
let eventsArr = [];
let allEventsArr = [];
for (i = 0; i < events.length; ++i) {
    event = events[i];
    eventsArr = [];
    for (var key in event) {
        key  == "id" ? eventsArr.push(event[key]) : eventsArr.push("'" + event[key] + "'");
    };
    allEventsArr.push("(" + eventsArr.join() + ")");
}
sqlQuery += allEventsArr.join() + ';';
console.log("sqlQuery: ", sqlQuery);

  // insert events in DB
  con.query(sqlQuery, function (err, result) {
    if (err) throw err;
    console.log("Events inserted in database");
  });
  
  
  // select
  /*
  con.query("SELECT * FROM events", function (err, result, fields) {
      if (err) throw err;
      console.log("result: ", result);
    });
*/

/*
Object.keys(dictionary).forEach(function(key) {
    dictionary[key].forEach(function(elem, index) {
        console.log(elem, index);

        
    });
});
*/

}); // con.connect