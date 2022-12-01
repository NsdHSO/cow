export interface ICow {
  number : number;
  kg : number;
  birth : number;
  age : number;
  numberOfLiveCattle : number;
  howMuchEats : number;
  tel: string;
  sex: Gender
}

export enum Gender {
  MALE= 1,
  FEMALE
}
