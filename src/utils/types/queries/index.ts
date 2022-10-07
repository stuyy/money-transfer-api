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
