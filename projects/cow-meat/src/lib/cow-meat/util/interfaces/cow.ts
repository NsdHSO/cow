export interface ICow {
  id : number;
  numberFromEar : number;
  kg : number;
  birth : any;
  age : number;
  numberOfLiveCattle : number;
  howMuchEats : number;
  tel : string;
  state : StateOfCattle;
  group : number;
  gynecologicalStatus : GynecologicalStatus;
  gender : Gender;
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

export interface IStateCattle {
  state: string
}

export enum StateCattle {
  'EARLY' = 'Early',
  'CALF' = 'Calf',
  'INSEMINATED' = 'Inseminated',
  'PREGNANT' = 'Pregnant'
}
