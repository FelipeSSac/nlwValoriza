import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  email: string;
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;
  
  if(!authToken){
    return res.status(401).end();
  }

  const [,token] = authToken.split(" ");

  try{
  const { sub, email } = verify(token,"7787dcc9f878cccf918320d61cf69f3b") as IPayload;

  req.user_id = sub;
  req.user_email = email;

  return next();
  }catch{
    return res.status(401).end()
  }
}