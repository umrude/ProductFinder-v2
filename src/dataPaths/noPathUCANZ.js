const noPathUCANZ = {
  buttonName: "Yes",
  buttonContext:
    "I want the advantages of 900MHz to avoid 2.4GHz congestion and give me better range and signal propagation.",
  question: "Do you need wireless dimmer for props, costumes, and more?",
  type: "default",
  styleClass: "default yesno",
  id: "n2-1",
  children: [
    {
      buttonName: "No",
      question: "Does the signal need to travel more than 800ft (250m)?",
      id: "n3-1",
      type: "default",
      styleClass: "default yesno",
      children: [
        {
          buttonName: "No",
          question: "Will this be used indoors or Outdoors for installation?",
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
              link: "https://rc4wireless.com/product-category/rc5_eass/",
            },
            {
              buttonName: "Outdoor",
              id: "n5-2",
              type: "end",
              styleClass: "product",
              productName: "RC5 (EASS) IP67 Outdoor Data Transceiver",
              img:
                "https://rc4wireless.com/wp-content/uploads/2020/04/RC5_DMXioOutdoor_10.jpg",
              link: "https://rc4wireless.com/product-category/rc4magic-900mhz/",
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
          link: "https://rc4wireless.com/product-category/rc4magic-900mhz/",
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
      link: "https://rc4wireless.com/product-category/rc4magic-900mhz/",
    },
  ],
};

export { noPathUCANZ };
