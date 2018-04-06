


module.exports =(app,db){
  app.routs('/')
  .get (function(req,res)  {
    res.rendere('index');
  });
  app.routs('/new')
 .get(fubction(req,res){

   res.rendere('index', {
        err: "Error: You need to add a proper url"
      });)

   });



});
