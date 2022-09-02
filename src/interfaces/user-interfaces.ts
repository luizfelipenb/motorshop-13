import { AddressData } from "./address-interfaces";

export interface UserCreate {
  name: string;
  email: string;
  cpf: string;
  description?: string;
  phone: string;
  birth_date: string;
  account_type: string;
  password: string;
}

export interface AddressCreate {
  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export interface RegisterData {
  name: string;
  email: string;
  cpf: string;
  description?: string;
  phone: string;
  birth_date: string;
  password: string;
  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  name: string;
  birthDate: string;
  cpf: string;
  description: string;
  email: string;
  phone: string;
  isSeller: boolean;
  address: AddressData[];
  isActive: true;
}
