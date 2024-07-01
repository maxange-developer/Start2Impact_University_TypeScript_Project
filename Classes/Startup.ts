import { IIncentive } from "../interfaces/IIncentive";
import { IStartup } from "../interfaces/IStartup";

// Creating Startup class
export class Startup implements IStartup {
  name: string;
  focusSector: string;
  description: string;
  services: string[];

  constructor(
    name: string,
    focusSector: string,
    description: string,
    services: string[]
  ) {
    this.name = name;
    this.focusSector = focusSector;
    this.description = description;
    this.services = services;
  }

  receiveIncentive(incentive: IIncentive): void {
    console.log(
      `The Startup ${this.name} that offers this services: ${this.services} has receveid ${incentive.incentiveValue}$.`
    );
  }
}
