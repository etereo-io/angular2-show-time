import { User as UserModel } from '@etereo/auth';

export class User implements UserModel {
  id?: string;
  email?: string;
  userName?: string;
  password?: string;
}