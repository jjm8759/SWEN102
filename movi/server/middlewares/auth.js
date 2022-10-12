/**
 * This file verifies the users token using a secret key
 */
import jwt from 'jsonwebtoken';

import User from '../models/user.js'


export const verifyToken = async (req, res, next) => {
    let token = req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send({ message: "Token not provided" });
    }
  
    jwt.verify(token, process.env.PASS, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Token not authorized" });
      }
      req.userId = decoded.id;
      next();
    });
  };

export default verifyToken;