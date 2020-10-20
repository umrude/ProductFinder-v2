import { noPathWorld } from "./noPathWorld";
import { noPathWorld2 } from "./noPathWorld1-2";
const noPathUCANZ2 = {
  buttonContext:
    "I understand that 900MHz has some advantages, but I'm comfortable in 2.4GHz",
  buttonName: "No",
  question:
    "Is there a particular wireless manufacturer or protocol you would like to be compatible with?",
  sidebar: [
    "If an associate of yours has a wireless system, you might want to be compatible with the equipment they already have. Some industries favor a particular system.",
    "Many popular devices for the motion picture industry have LumenRadio wireless built in.",
    "RC4Magic systems provide the highest level of data security and the most comprehensive warranty.",
  ],
  sidebarContext: true,
  styleClass: "default two-button-context",
  type: "default",
  id: "n2-2",
  children: [noPathWorld, noPathWorld2],
};
export { noPathUCANZ2 };
