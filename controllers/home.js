module.exports.index = (req, res)=>{
  res.render('home/indexpage', { name: 'John' });
}
module.exports.signup = (req, res)=>{
  res.render('home/signuppage')	
}