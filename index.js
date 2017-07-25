var express=require('express');
app=express()
app.listen(8080);
app.get('/',function(Req,res){
res,send('Hey');
});
