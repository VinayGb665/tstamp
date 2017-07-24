 var express=require('express'),
 app=express(),
bodyParser=require('body-parser');
var datetime = require('node-datetime');
app.use(bodyParser.urlencoded({extended:true}));
function isString(value) {return typeof value === 'string';}
function addMinutes(date, minutes) {
    return new Date(date.getTime() - minutes*60000);
}
 app.listen(80);
 app.get('/:date', function(req, res) {

  const query = req.query;// query = {sex:"female"}

  const params = req.params; //params = {id:"000000"}

if(params.date[0].charCodeAt(0) >=65){
	var x=new Date(params.date).toDateString()
	if(x=="Invalid Date"){
		res.send('POPOPOP');
	}
	else{
		var y=new Date(params.date)
		addMinutes(y,330)
		res.send(x.slice(3) +'<br>'+Math.floor(y.getTime()/1000));
	}
}
else{
	
	x=new Date(params.date*1000).toDateString();
	if(x=="Invalid Date"){
		res.send('POPOPOP');
	}
	else{
		res.send(x);
	}
	

	
}
 // console.log(d)
   //console.log(new Date(1420038010000))
  //var ts =(new Date(params.date));
  //res.send('sadfasfsdf');
})
