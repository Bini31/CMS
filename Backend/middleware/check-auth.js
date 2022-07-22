const jwt =  require('jsonwebtoken');

module.exports  = (req, res, next) => {
   try {
    const token = req.headers.authorization.split(' ')[1];
 
   const decode = jwt.verify(token, 'ICTAcademy');
    req.userData = decode;
   // return res.json(decode);
    next();
   }catch(error){
       return res.json({succes: false, message: "Auth Failed"})
   }
}
