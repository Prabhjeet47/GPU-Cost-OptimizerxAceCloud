export default function authorizationMiddleware(req, res, next) {
  const autheader = req.headers.authorization;

  if (!autheader || !autheader.startsWith("Bearer")) {
    return res.status(401).json({msg: "Unautorized access"});
  }

  const token = autheader.slice(7);

  if (token !== process.env.REACT_APP_AUTH_KEY) {
    console.log("❌ Invalid Token");
    return res.status(403).json({msg: "Invalid token"});
  }

  next();
}
