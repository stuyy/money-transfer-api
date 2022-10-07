import { User } from '../typeorm';

export enum Routes {
  AUTH = 'auth',
  USERS = 'users',
}

export enum Services {
  AUTH = 'AUTH_SERVICE',
  USERS = 'USERS_SERVICE',
}

export const findUserSelectors: (keyof User)[] = [
  'firstName',
  'lastName',
  'id',
  'username',
  'createdAt',
];

export const getUserSelectors = (selectPassword?: boolean): (keyof User)[] =>
  selectPassword ? [...findUserSelectors, 'password'] : findUserSelectors;
