export interface IUser {
  id: number;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  // ...other fields returned by dummyjson
}

export interface ILoginResponse {
  id: number;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  accessToken?: string;   // JWT access token
  refreshToken?: string;
}