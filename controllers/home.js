module.exports.index = (req, res)=>{
  res.render('home/index', { name: 'John' });
}