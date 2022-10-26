const loginPeople = (req, res) => {
  console.log(req.method, req.url);
  const  name  = req.body.name;
  if (name) return res.status(200).send(`Welcome ${name}`);
  res.status(401).send("Please provide credentials");
};

module.exports = {
  loginPeople
};
