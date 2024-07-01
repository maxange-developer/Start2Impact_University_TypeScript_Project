import { IIncentive } from "./IIncentive";

// Creating IStartup interface
export interface IStartup {
  name: string;
  focusSector: string;
  description: string;
  services: string[];

  receiveIncentive(incentive: IIncentive): void;
  // methods that receives specific state incentive
}
