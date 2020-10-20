const noPathWorld2 = {
  id: "n22-4",
  buttonName: "Yes",
  buttonContext:
    "I need compatibility with LumenRadio CRMX or Wireless Solution W-DMX.",
  sidebar: [
    "All RC4 LumenDim and W-DIM products use Genuine OEM Radio Cards from those manufacturers. RC4 Wireless does not offer an extended warranty on those modules.",
    "NOTE:",
    "RC4 does not offer a W-DMX transmitter. A transmitter, like the Wireless Solution BlackBox, must be purchased from a W-DMX authorized dealer.",
  ],
  question: "Which System Do You Have?",
  sidebarContext: true,
  styleClass: "default-img prod2",
  type: "default-img",
  children: [
    {
      id: "n23-1",
      productName: "LumenRadio",
      styleClass: "product",
      img:
        "https://rc4wireless.com/wp-content/uploads/2020/04/LumenDimStarterKit_07.jpg",
      link:
        "https://rc4wireless.com/product-category/starter-kits/lumenradio-starter-kits/",
      type: "end",
    },
    {
      id: "n23-2",
      productName: "RC4 W-DIM for W-DMX",
      styleClass: "product",
      img: "https://rc4wireless.com/wp-content/uploads/2020/04/W-DIM4_03.jpg",
      link: "https://rc4wireless.com/product-category/rc4-w-dim-for-w-dmx/",
      sidebar: [
        "NOTE:",
        "RC4 does not offer a W-DMX transmitter. A transmitter, like the WIreless Solution BlackBox, must be purchased separately.",
      ],
      type: "end",
      sidebarContext: true,
    },
  ],
};

export { noPathWorld2 };
