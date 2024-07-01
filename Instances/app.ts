import { Citizen } from "../Classes/Citizen";
import { Incentive } from "../Classes/Incentive";
import { Startup } from "../Classes/Startup";
import { ICitizen } from "../interfaces/ICitizen";
import { IIncentive } from "../interfaces/IIncentive";
import { IStartup } from "../interfaces/IStartup";

// Creating some Startups
const startup1: IStartup = new Startup(
  "TechnoGym",
  "Gym",
  "The new way to training with the support of the technology",
  [
    "Innovative platform to improve faster",
    "Personalised Workouts",
    "Free initial counselling",
  ]
);

const startup2: IStartup = new Startup(
  "WyLab",
  "Technology and Sports",
  "First Italian incubator focussed on startups that develop innovation and technologies for the sports sector",
  [
    "Validating business model and product",
    "Help testing business solidity in the market",
    "Help to scale Companies",
  ]
);

const startup3: IStartup = new Startup(
  "WeSportUp",
  "Technology and Sports",
  "Community of Mentors who can accelerate Business development",
  [
    "Coaching and Support StrategicMasterclasses",
    "Menotrship CoWorking Space",
    "Alumni Growth ProgramIndustry Events",
  ]
);

//Creating some Incentives
const incentive1: IIncentive = new Incentive(
  "Smart&Start",
  "Support for innovative Startups",
  1000,
  "for new Startup focussed on the technology sector"
);

const incentive2: IIncentive = new Incentive(
  "Sports&Future",
  "Initial support for sports-focussed innovative Startups",
  5000,
  "for Startups only focussed to improve improve the sports world with the immplementation of technology"
);

// Creating some Citizens
const citizen1: ICitizen = new Citizen("Bill", "Gates", 68, [
  "American Football",
  "Basket",
]);

const citizen2: ICitizen = new Citizen("Barack", "Obama", 62, [
  "Basket",
  "Baseball",
]);

const citizen3: ICitizen = new Citizen("Mark", "Zuckerberg", 40, [
  "Tennis",
  "Golf",
]);

// Assigning incentives to Startups
incentive1.assignToStartup(startup1);
incentive2.assignToStartup(startup2);

// Citizen join in activities promoted by Startups
citizen1.joinActivity(startup1);
citizen2.joinActivity(startup2);
citizen3.joinActivity(startup3);
