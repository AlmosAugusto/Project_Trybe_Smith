export interface IUsers {
  id?:number,
  username: string;
  classe: string;
  level: string;
  password: string;
}

export type ICreatedUser = Omit<IUsers, 'id'>;