import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(credentials: IUser): Promise<any> {
    const user = await this.usersService.findByEmail(credentials.email);

    if (!user) throw new UnauthorizedException();

    if (await !bcrypt.compare(credentials.password, user.password))
      throw new UnauthorizedException();

    const payload = {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
    };

    const token = this.jwtService.sign(payload);

    return { token };
  }

  async register(credentials: IUser): Promise<IUser> {
    try {
      return await this.usersService.store(credentials);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async validateUser(user: IUser): Promise<IUser> {
    try {
      return await this.usersService.findByEmail(user.email);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
