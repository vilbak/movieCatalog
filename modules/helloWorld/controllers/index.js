exports.getName = function (req,res){
  console.log('Got a Get request');

  res.send(`<h1> Hello ${req.query.name} </h1>`);
  
}

