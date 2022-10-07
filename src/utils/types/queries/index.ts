export type FindUserParams = Partial<{
  id: string;
  username: string;
}>;

export type CreateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

export type UserCredentialsParams = {
  username: string;
  password: string;
};

export type FindUserOptions = {
  selectPassword?: boolean;
};
