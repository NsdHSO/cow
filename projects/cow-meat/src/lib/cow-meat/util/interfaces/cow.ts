export interface ICow {
  id : number;
  numberFromEar : number;
  kg : number;
  birth : number;
  age : number;
  numberOfLiveCattle : number;
  howMuchEats : number;
  tel : string;
  state : StateOfCattle;
  group : number;
  gynecologicalStatus : GynecologicalStatus;
  sex : Gender;
}

type StateOfCattle =
  'Early'
  | 'Calf'
  | 'Inseminated'
  | 'Pregnant'
type GynecologicalStatus = 'Verified'

export enum Gender {
  MALE = 1,
  FEMALE
}

export enum StateCattle {
  'EARLY' = 'Early',
  'CALF' = 'Calf',
  'INSEMINATED' = 'Inseminated',
  'PREGNANT' = 'Pregnant'
}
