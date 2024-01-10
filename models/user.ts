export type User = {
  _id: string;
  userId: string;
  name: string;
  email: string;
  isAdmin: boolean;
  about: string | null;
  _createdAt: string;
  image: string;
};

export type CreateUserDto = {
  userId: string;
  name: string;
  email: string;
  isAdmin: boolean;
  image: string | null;
};

export type UpdateUserDto = {
  userId: string;
  name: string;
  email: string;
  isAdmin: boolean;
  about: string | null;
  image: string | null;
};

export type UpdateUserImageDto = {
  userId: string;
  image: string;
};
