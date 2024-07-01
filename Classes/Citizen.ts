import { ICitizen } from "../interfaces/ICitizen";
import { IStartup } from "../interfaces/IStartup";

// Creating Citizen class
export class Citizen implements ICitizen {
  name: string;
  surname: string;
  age: number;
  sportsInterests: string[];

  constructor(
    name: string,
    surname: string,
    age: number,
    sportsInterests: string[]
  ) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sportsInterests = sportsInterests;
  }
  joinActivity(startup: IStartup): void {
    console.log(
      `${this.name} ${this.surname} joined in activities promoted by the Startup ${startup.name}.`
    );
  }
}
