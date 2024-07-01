import { IStartup } from "./IStartup";

// Creating ICitizen interface
export interface ICitizen {
  name: string;
  surname: string;
  age: number;
  sportsInterests: string[];

  joinActivity(startup: IStartup): void;
  // methods that allow to join activities or
  // use products/services that startup offers
}
