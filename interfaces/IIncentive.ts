import { IStartup } from "./IStartup";

// Creating IIncentive interface
export interface IIncentive {
  idCode: number | string;
  description: string;
  incentiveValue: number;
  eligibilityCriteria: string;

  assignToStartup(startup: IStartup): void;
  // methods that assign incentive to qualified startup
}
