import { noPathUCANZ } from "./noPathUCANZ";
import { noPathUCANZ2 } from "./noPathUCANZ2";

const noPath11 = {
  buttonName: "ONLY in USA, Canada, Australia and/or New Zealand.",
  buttonContext: "Your system will only be operated in these regions.",
  question: "Do you want to avoid the 2.4GHz Band?",
  sidebar: [
    "The 2.4GHz ISM band is available worldwide for unlicensed digital devices of many kinds, including WiFi, Bluetooth, and Zigbee. Congestion in this band increases every year, creating the potential for interference.",
    "The 900MHz band can only be used in USA, Canada, Australia, and New Zealand. It is less congested. The longer wavelength travels further and works better in water environments. There is less bandwidth available, reducing the maximum number of DMX universes that can be delivered.",
  ],
  sidebarContext: true,
  sidebarLink: "https://rc4wireless.com/rf_bands/",
  type: "default",
  styleClass: "default two-button-context",
  id: "n2",
  children: [noPathUCANZ, noPathUCANZ2],
};

export { noPath11 };
