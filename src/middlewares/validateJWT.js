const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    /*
      A variável decoded será um objeto equivalente ao seguinte:
      {
        data: {
            id:
            displayName:
            email:
            image:
        },
        iat: 1656616422,
        exp: 1657221222
      }
    */
    req.userId = decoded.data.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};