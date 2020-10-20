import { yesPath } from "./yesPath";
import { noPath } from "./noPath";
const root = [
  {
    buttonName: "Begin",
    question: "Do you want to add to an existing wireless DMX system?",
    id: "base",
    subheading:
      "If you already have a wireless DMX system, it is best to use RC4 devices that are compatible with it. Operating several different wireless DMX system types in the same space wastes RF bandwidth, reduces the reliable range and compromises the performance of all systems",
    styleClass: "default two-button-context fix",
    type: "default",
    children: [yesPath, noPath],
  },
];

const start = {
  question: "Find the Right RC4 Products for Your Application",
  id: "start",
  subheading:
    "RC4 Wireless makes wireless DMX and wireless dimming products for a range of different systems and protocols, including RC4Magic, RC4Magic-900, RC5 EASS, LumenRadio CRMX, and Wireless Solution W-DMX.",
  styleClass: "default start",
  type: "default",
  children: root,
};

export { start };
