import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ 
      email
    });

    if(!user) {
      throw new Error("Email/Password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error("Email/Password incorrect!");
    }

    const token = sign({ 
      email: user.email,
      username: user.name    
    }, "7787dcc9f878cccf918320d61cf69f3b", {
      subject: user.id,
      expiresIn: '1d'
    })

    return token;
  }
}

export { AuthenticateUserService };