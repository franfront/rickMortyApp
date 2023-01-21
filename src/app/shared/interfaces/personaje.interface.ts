export interface Personaje {
  id: number;
  name: string;
  status: Status;
  species: Species;
  gender: Gender;
  image: string;
  created: Date;
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface RequesInfo {
  next: string | null;
}