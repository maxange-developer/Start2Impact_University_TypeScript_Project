import { IIncentive } from "../interfaces/IIncentive";
import { IStartup } from "../interfaces/IStartup";

// Creating Incentive class
export class Incentive implements IIncentive {
  idCode: number | string;
  description: string;
  incentiveValue: number;
  eligibilityCriteria: string;

  constructor(
    idCode: number | string,
    description: string,
    incentiveValue: number,
    eligibilityCriteria: string
  ) {
    this.idCode = idCode;
    this.description = description;
    this.incentiveValue = incentiveValue;
    this.eligibilityCriteria = eligibilityCriteria;
  }
  assignToStartup(startup: IStartup): void {
    console.log(
      `The incentive ${this.description} worth ${this.incentiveValue}$ has been assigned to the Startup ${startup.name}.`
    );
    startup.receiveIncentive(this);
  }
}
