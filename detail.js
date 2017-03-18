var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

module.exports = router;

router.use(bodyParser.json());

var filename = '';

var head = '';
var description = '';
var img_url='#';

router.route('/')

.get(function(req,res,next){

    //console.log('The solution ');
    //console.log(req.baseUrl);
    //console.log(req.query);
    //console.log(req.query.search);
    
    if("What is the relation between Terrell Buckley and Miami Dolphins?" == req.query.search){
        filename = 'Q1.xml';
        head = 'The answers is: ';
        description = 'member of sports team.';
        img_url = '';
    }
    else if("Who is Tom Cruise?" == req.query.search){
        filename = 'Q2.xml';
        head = 'Tom Cruise: ';
        description = 'Tom Cruise (born Thomas Cruise Mapother IV; July 3, 1962) is an American actor and filmmaker. Cruise has been nominated for three Academy Awards and has won three Golden Globe Awards. He started his career at age 19 in the 1981 film Endless Love. After portraying supporting roles in Taps (1981) and The Outsiders (1983), his first leading role was in the romantic comedy Risky Business, released in August 1983. Cruise became a full-fledged movie star after starring as Pete "Maverick" Mitchell in the action drama Top Gun (1986). Since 1996, he has been well known for his role as secret agent Ethan Hunt in the Mission: Impossible film series, whose most recent film, Mission: Impossible – Rogue Nation, was released in 2015.';
        img_url = "https://upload.wikimedia.org/wikipedia/commons/2/27/TomCruiseDec08MTV_cropped.jpg";
    }
    else{
        filename = 'les-miserables.gexf';
        head = '';
        description = "Sorry, We can't find answer.";
        img_url = '';
    }
    
    
    
    res.sendFile(__dirname + "/public/detail.html");
    
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Will send details of the dish: ' + req.params.id +' to you!');
})

.post(function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting all dishes');
});

router.route('/les-miserables.gexf')
.get(function(req,res,next){

    //console.log('The solution ');
//    console.log(req.baseUrl);
//    console.log(req.query);
//    console.log(req.query.what);
    console.log("asasas");
    console.log("lalalalaalalal" + filename);
    res.sendFile(__dirname + "/public/" + filename);
    
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Will send details of the dish: ' + req.params.id +' to you!');
})

router.route('/content')
.get(function(req,res,next){

    //console.log('The solution ');
    //console.log(req.baseUrl);
    //console.log(req.query);
    //console.log(req.query.what);
    res.send({
        modal_head: head,
        modal_des: description,
        modal_img: img_url 
      });
    //res.sendFile(__dirname + "/public/" + filename);
    
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Will send details of the dish: ' + req.params.id +' to you!');
})