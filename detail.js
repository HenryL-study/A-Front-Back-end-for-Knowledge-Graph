var express = require('express');
var bodyParser = require('body-parser');
var http = require('https');
var router = express.Router();

module.exports = router;

router.use(bodyParser.json());

var filename = '';
var datas = [];
var inference = [];

router.route('/')

.get(function(req,res,next){

    //console.log('The solution ');
    //console.log(req.baseUrl);
    //console.log(req.query);
    //console.log(req.query.search);
    datas = [];
    if("What is the relation between Terrell Buckley and Miami Dolphins?" == req.query.search){
        filename = 'Q1.xml';
        var data = {
            head : 'The answers is: ',
            description : 'member of sports team.',
            img_url : '#'
        };
        //img_url = '';
        datas.push(data);
        inference = [[0,1]];
    }
    else if("Who is Tom Cruise?" == req.query.search){
        filename = 'Q2.xml';
        var data = {
            head : "Tom Cruise: ",
            description : 'Tom Cruise (born Thomas Cruise Mapother IV; July 3, 1962) is an American actor and filmmaker. Cruise has been nominated for three Academy Awards and has won three Golden Globe Awards. He started his career at age 19 in the 1981 film Endless Love. After portraying supporting roles in Taps (1981) and The Outsiders (1983), his first leading role was in the romantic comedy Risky Business, released in August 1983. Cruise became a full-fledged movie star after starring as Pete "Maverick" Mitchell in the action drama Top Gun (1986). Since 1996, he has been well known for his role as secret agent Ethan Hunt in the Mission: Impossible film series, whose most recent film, Mission: Impossible – Rogue Nation, was released in 2015.',
            img_url : "https://upload.wikimedia.org/wikipedia/commons/2/27/TomCruiseDec08MTV_cropped.jpg"
        };
        datas.push(data);
        inference = [[1,0],[2,0],[3,0],[4,0],[5,0]];
    }
    else if("Which American universities founded before the states they reside in were created?" == req.query.search){
        filename = 'Q3.xml';
        var data = {
            head : 'University of Utah',
            description : "The University of Utah (also referred to as the U, the U of U, or Utah) is a public coeducational space-grant research university in Salt Lake City, Utah, United States. As the state's flagship university, the university offers more than 100 undergraduate majors and more than 92 graduate degree programs. The university is classified in the highest ranking: \"R-1: Doctoral Universities – Highest Research Activity\" by the Carnegie Classification of Institutions of Higher Education. The Carnegie Classification also considers the university as \"selective\", which is its second most selective admissions category. Graduate studies include the S.J. Quinney College of Law and the School of Medicine, Utah's only medical school. As of Fall 2015, there are 23,909 undergraduate students and 7,764 graduate students, for an enrollment total of 31,673.",
            img_url : ''
        };
        datas.push(data);
        data = {
            head : 'Harvard University',
            description : 'Harvard University is a private Ivy League research university in Cambridge, Massachusetts, established in 1636, whose history, influence, and wealth have made it one of the world\'s most prestigious universities.',
            img_url : ''
        };
        datas.push(data);
        data = {
            head : 'Yale University',
            description : 'Yale University is an American private Ivy League research university in New Haven, Connecticut. Founded in 1701 in Saybrook Colony to train Congregationalist ministers, it is the third-oldest institution of higher education in the United States.',
            img_url : ''
        };
        datas.push(data);
        data = {
            head : 'Columbia University',
            description : 'Columbia University (officially Columbia University in the City of New York) is a private Ivy League research university in Upper Manhattan, New York City. It was established in 1754 as King\'s College by royal charter of George II of Great Britain. Columbia is the oldest college in the state of New York and the fifth chartered institution of higher learning in the country, making it one of nine colonial colleges founded before the Declaration of Independence.[12] After the American Revolutionary War, King\'s College briefly became a state entity, and was renamed Columbia College in 1784. A 1787 charter placed the institution under a private board of trustees before it was renamed Columbia University in 1896 when the campus was moved from Madison Avenue to its current location in Morningside Heights occupying 32 acres (13 ha) of land.[13][14] Columbia is one of the fourteen founding members of the Association of American Universities and was the first school in the United States to grant the M.D. degree.',
            img_url : ''
        };
        datas.push(data);
        data = {
            head : 'Princeton University',
            description : 'Princeton University is a private Ivy League research university in Princeton, New Jersey, United States. Founded in 1746 in Elizabeth as the College of New Jersey, Princeton was the fourth chartered institution of higher education in the Thirteen Colonies[8][a] and thus one of the nine colonial colleges established before the American Revolution. The institution moved to Newark in 1747, then to the current site nine years later, where it was renamed Princeton University in 1896.',
            img_url : ''
        };
        datas.push(data);
        data = {
            head : 'Brown University',
            description : 'member of sports team.',
            img_url : ''
        };
        datas.push(data);
        data = {
            head : 'Dartmouth College',
            description : 'member of sports team.',
            img_url : ''
        };
        datas.push(data);
        data = {
            head : 'University of Michigan',
            description : 'member of sports team.',
            img_url : ''
        };
        datas.push(data);
        inference = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10]];
    }
    else if("Who is the president of France during the APEC?" == req.query.search){
        filename = 'Q4.xml';
        var data = {
            head : "François Hollande",
            description : "François Gérard Georges Nicolas Hollande (French: [fʁɑ̃swa ɔlɑ̃d] ( listen); born 12 August 1954) is a French politician who has been President of the French Republic since taking office in 2012. Hollande was previously the First Secretary of the French Socialist Party from 1997 to 2008, the mayor of Tulle from 2001 to 2008, and the President of the Corrèze General Council from 2008 to 2012. Hollande also served in the National Assembly of France twice for the department of Corrèze's 1st Constituency from 1988 to 1993, and again from 1997 to 2012."
        }
        datas.push(data);
        inference = [[5,1],[1,0],[4,0]];
    }
    else{
        var exec = require('child_process').exec;
		var qString = req.query.search;
        var cmdStr = '~/knowledge_graph/kg/bin/python ~/knowledge_graph/nlquery/main.py \'' + qString + '\'';
		console.log(cmdStr);
		var msql;
        exec(cmdStr, function(err,stdout,stderr){
            if(err) {
                console.log('get SparkQL query error:'+stderr);
            } else {
                msql = stdout;
				msql = msql.replace(/[\r\n]/g,"");
                //console.log(data);
			}
		});
        var url='https://query.wikidata.org/bigdata/namespace/wdq/sparql?query=' + msql + '&format=json';
        console.log(url);
        var datas = '';
        http.get(url,function(req,res){
            console.log(req);
            req.on('data', function (data) {
                datas += data;
            });
            req.on('end',function(){
                //parse json
                console.log("NOW:!!!!");
                var json = JSON.parse(datas);
                // find id
                console.log(datas);
            });
            console.log(datas);
        });
        console.log(datas);
        filename = 'les-miserables.gexf';
        var data = {
            head : '',
            description : "Sorry, We can't find answer.",
            img_url : ''
        };
        datas.push(data);
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
//    console.log("asasas");
    console.log("les-miserables" + filename);
    res.sendFile(__dirname + "/public/" + filename);
    
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Will send details of the dish: ' + req.params.id +' to you!');
});

router.route('/content')
.get(function(req,res,next){

    //console.log('The solution ');
    //console.log(req.baseUrl);
    //console.log(req.query);
    //console.log(req.query.what);
    res.send(datas);
    //res.sendFile(__dirname + "/public/" + filename);
    
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Will send details of the dish: ' + req.params.id +' to you!');
});

router.route('/inference')
.get(function(req,res,next){

    //console.log('The solution ');
    //console.log(req.baseUrl);
    //console.log(req.query);
    //console.log(req.query.what);
    res.send(inference);
    //res.sendFile(__dirname + "/public/" + filename);
    
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Will send details of the dish: ' + req.params.id +' to you!');
})
