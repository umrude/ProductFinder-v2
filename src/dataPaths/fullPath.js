const start = {
  question: "Find the Right RC4 Products for Your Application",
  id: "start",
  subheading:
    "RC4 Wireless makes wireless DMX and wireless dimming products for a range of different systems and protocols, including RC4Magic, RC4Magic-900, RC5 EASS, LumenRadio CRMX, and Wireless Solution W-DMX.",
  styleClass: "default start",
  type: "default",
  children: [
    {
      buttonName: "Begin",
      question: "Do you want to add to an existing wireless DMX system?",
      id: "base",
      subheading:
        "If you already have a wireless DMX system, it is best to use RC4 devices that are compatible with it. Operating several different wireless DMX system types in the same space wastes RF bandwidth, reduces the reliable range and compromises the performance of all systems",
      styleClass: "default two-button-context fix",
      type: "default",
      children: [
        {
          buttonName: "Yes, I will add to a system I already have.",

          question: "Which System Do You Have?",
          styleClass: "default-img",
          type: "default-img",
          subheading: "",
          id: "y1",
          children: [
            {
              id: "y2-1",
              styleClass: "product purple",
              img:
                "https://rc4wireless.com/wp-content/uploads/2020/04/RC4MagicS3_Ten_Channel_01.jpg",
              productName: "RC4Magic Series 3 Wireless Dimming (2.4GHz)",
              link: "https://rc4wireless.com/product-category/rc4magic-s3/",
              type: "end",
            },
            {
              id: "y2-2",
              productName: "RC4Magic 900MHz",
              styleClass: "product blue",
              link: "https://rc4wireless.com/product-category/rc4magic-900mhz/",
              img:
                "https://rc4wireless.com/wp-content/uploads/2020/04/RC4Magic900_Ten_Channel_10-1280x854.jpg",
              type: "end",
            },
            {
              id: "y2-3",
              productName: "LumenRadio",
              styleClass: "product yellow",
              link: "https://rc4wireless.com/product-category/rc4lumendim/",
              img:
                "https://rc4wireless.com/wp-content/uploads/2020/04/LumenDimStarterKit_03-1280x854.jpg",
              type: "end",
            },
            {
              id: "y2-4",
              productName: "RC5-EASS",
              styleClass: "product rc5",
              link: "https://rc4wireless.com/product-category/rc5_eass/",
              img:
                "https://rc4wireless.com/wp-content/uploads/2020/04/RC5_DMXio_02-1280x854.jpg",
              type: "end",
            },
            {
              id: "y2-5",
              productName: "RC4 W-DIM for W-DMX",
              styleClass: "product wdim",
              img:
                "https://rc4wireless.com/wp-content/uploads/2020/04/W-DIM4_03.jpg",
              link:
                "https://rc4wireless.com/product-category/rc4-w-dim-for-w-dmx/",
              type: "end",
            },
          ],
        },
        {
          buttonName: "No, let's find the best new system for me",
          id: "filler",
          question: "Ok! Let's narrow down the choices",
          subheading: "We'll figure it out in just a few clicks.",
          styleClass: "default single",
          tyoe: "default",
          children: [
            {
              buttonName: "Next",
              question:
                "In what countries will you be using your wireless DMX system?",
              type: "map",
              subheading:
                "Rules and regulations for wireless technology vary from country to country. System selection should consider all regions your system may travel to.",
              id: "n1",
              children: [
                {
                  buttonName:
                    "ONLY in USA, Canada, Australia and/or New Zealand.",
                  buttonContext:
                    "Your system will only be operated in these regions.",
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
                  children: [
                    {
                      buttonName: "Yes",
                      buttonContext:
                        "I want the advantages of 900MHz to avoid 2.4GHz congestion and give me better range and signal propagation.",
                      question:
                        "Do you need wireless dimmer for props, costumes, and more?",
                      type: "default",
                      styleClass: "default yesno",
                      id: "n2-1",
                      children: [
                        {
                          buttonName: "No",
                          question:
                            "Does the signal need to travel more than 800ft (250m)?",
                          id: "n3-1",
                          type: "default",
                          styleClass: "default yesno",
                          children: [
                            {
                              buttonName: "No",
                              question:
                                "Will this be used indoors or Outdoors for installation?",
                              id: "n4-1",
                              type: "default",
                              styleClass: "default yesno",
                              children: [
                                {
                                  buttonName: "Indoor",
                                  id: "n5-1",
                                  productName: "RC5-EASS",
                                  styleClass: "product",
                                  type: "end",
                                  img:
                                    "https://rc4wireless.com/wp-content/uploads/2020/04/RC5_DMXio_02.jpg",
                                  link:
                                    "https://rc4wireless.com/product-category/rc5_eass/",
                                },
                                {
                                  buttonName: "Outdoor",
                                  id: "n5-2",
                                  type: "end",
                                  styleClass: "product",
                                  productName:
                                    "RC5 (EASS) IP67 Outdoor Data Transceiver",
                                  img:
                                    "https://rc4wireless.com/wp-content/uploads/2020/04/RC5_DMXioOutdoor_10.jpg",
                                  link:
                                    "https://rc4wireless.com/product-category/rc4magic-900mhz/",
                                },
                              ],
                            },
                            {
                              buttonName: "Yes",
                              id: "n4-2",
                              styleClass: "product",
                              type: "end",
                              subheading:
                                "An RC4Magic-900 Starter Kit is perfect for you! It solves every kind of wireless dimming challenge, is fully expandable, and is covered by the RC4Magic Comprehensive Warranty.",
                              img:
                                "https://rc4wireless.com/wp-content/uploads/2020/04/RC4Magic900_Ten_Channel_10-1280x854.jpg",
                              productName: "RC4Magic-900SX",
                              link:
                                "https://rc4wireless.com/product-category/rc4magic-900mhz/",
                            },
                          ],
                        },
                        {
                          buttonName: "Yes",
                          id: "n3-2",
                          styleClass: "product",
                          type: "end",
                          subheading:
                            "An RC4Magic-900 Starter Kit is perfect for you! It solves every kind of wireless dimming challenge, is fully expandable, and is covered by the RC4Magic Comprehensive Warranty.",
                          img:
                            "https://rc4wireless.com/wp-content/uploads/2020/04/RC4Magic900_Ten_Channel_10-1280x854.jpg",
                          productName: "RC4Magic-900SX",
                          link:
                            "https://rc4wireless.com/product-category/rc4magic-900mhz/",
                        },
                      ],
                    },
                    {
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
                      children: [
                        {
                          buttonContext:
                            "This is a new stand alone installation and I want the security of RCMagic Private IDentities, Comprehensive Warranty, and the range I need is less than 100m (300ft)",
                          buttonName: "No",
                          id: "n22-3",
                          styleClass: "product",
                          type: "end",
                          subheading:
                            "An RC4 2.4GHz Starter Kit is perfect for you! It solves every kind of wireless dimming challenge, is fully expandable, and is covered by the RC4Magic Comprehensive Warranty.",
                          img:
                            "https://rc4wireless.com/wp-content/uploads/2020/04/RC4MagicS3_Ten_Channel_01.jpg",
                          productName:
                            "RC4Magic Series 3 Wireless Dimming (2.4GHz)",
                          link:
                            "https://rc4wireless.com/product-category/rc4magic-s3/",
                        },
                        {
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
                              img:
                                "https://rc4wireless.com/wp-content/uploads/2020/04/W-DIM4_03.jpg",
                              link:
                                "https://rc4wireless.com/product-category/rc4-w-dim-for-w-dmx/",
                              sidebar: [
                                "NOTE:",
                                "RC4 does not offer a W-DMX transmitter. A transmitter, like the WIreless Solution BlackBox, must be purchased separately.",
                              ],
                              type: "end",
                              sidebarContext: true,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
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
                  children: [
                    {
                      buttonContext:
                        "This is a new stand alone installation and I want the security of RCMagic Private IDentities, Comprehensive Warranty, and the range I need is less than 100m (300ft)",
                      buttonName: "No",
                      id: "n22-3",
                      styleClass: "product",
                      type: "end",
                      subheading:
                        "An RC4 2.4GHz Starter Kit is perfect for you! It solves every kind of wireless dimming challenge, is fully expandable, and is covered by the RC4Magic Comprehensive Warranty.",
                      img:
                        "https://rc4wireless.com/wp-content/uploads/2020/04/RC4MagicS3_Ten_Channel_01.jpg",
                      productName:
                        "RC4Magic Series 3 Wireless Dimming (2.4GHz)",
                      link:
                        "https://rc4wireless.com/product-category/rc4magic-s3/",
                    },
                    {
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
                          img:
                            "https://rc4wireless.com/wp-content/uploads/2020/04/W-DIM4_03.jpg",
                          link:
                            "https://rc4wireless.com/product-category/rc4-w-dim-for-w-dmx/",
                          sidebar: [
                            "NOTE:",
                            "RC4 does not offer a W-DMX transmitter. A transmitter, like the WIreless Solution BlackBox, must be purchased separately.",
                          ],
                          type: "end",
                          sidebarContext: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
export { start };
