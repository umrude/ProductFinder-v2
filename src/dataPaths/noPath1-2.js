import { noPathWorld } from "./noPathWorld";
import { noPathWorld2 } from "./noPathWorld1-2";

const noPath12 = {
  id: "n3",
  buttonName: "Worldwide",
  buttonContext:
    "You are based outside of USA, Canada, Australia and/or New Zealand, OR you might travel outside those countries with your system.",
  sidebar: [
    "If an associate of yours has a wireless system, you might want to be compatible with the equipment they already have. ",
    "Some industries favor a particular system. Many popular devices for the motion picture industry have LumenRadio wireless built in.",
    "RC4Magic systems provide the highest level of data security and the most comprehensive warranty.",
  ],
  question:
    "Is there a particular wireless manufacturer or protocol you would like to be compatible with?",
  styleClass: "default two-button-context",
  sidebarContext: true,
  type: "default",
  children: [noPathWorld, noPathWorld2],
};

export { noPath12 };
