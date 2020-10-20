import { noPath11 } from "./noPath1-1";
import { noPath12 } from "./noPath1-2";
const noPath = {
  buttonName: "No, let's find the best new system for me",
  id: "filler",
  question: "Ok! Let's narrow down the choices",
  subheading: "We'll figure it out in just a few clicks.",
  styleClass: "default single",
  tyoe:"default",
  children: [
    {
      buttonName: "Next",
      question: "In what countries will you be using your wireless DMX system?",
      type: "map",
      subheading:
        "Rules and regulations for wireless technology vary from country to country. System selection should consider all regions your system may travel to.",
      id: "n1",
      children: [noPath11, noPath12],
    },
  ],
};

export { noPath };
