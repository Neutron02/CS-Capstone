const mockMarketplaceData = [
  {
    user: "0001",
    rating: 5,
    want: [],
    have: [
      { title: "Tablet", description: "Used tablet in good condition", price: 300 },
      { title: "Headphones", description: "Noise-canceling over-ear headphones", price: 150 }
    ]
  },
  {
    user: "0002",
    rating: 4,
    want: [
      { title: "Gaming Console", description: "Next-gen console for gaming", price: 500 },
      { title: "VR Headset", description: "High-resolution virtual reality headset", price: 600 }
    ],
    have: []
  },
  {
    user: "0003",
    rating: 3,
    want: [
      { title: "Bike", description: "Mountain bike for outdoor adventures", price: 700 },
      { title: "Helmet", description: "Safety-certified helmet", price: 100 }
    ],
    have: [
      { title: "Skateboard", description: "Custom deck with smooth wheels", price: 120 },
      { title: "Backpack", description: "Durable travel backpack", price: 80 }
    ]
  },
  {
    user: "0004",
    rating: 5,
    want: [
      { title: "Camera", description: "DSLR camera with 4K recording", price: 900 },
      { title: "Tripod", description: "Lightweight and adjustable tripod", price: 150 }
    ],
    have: [
      { title: "Laptop", description: "Business laptop with SSD storage", price: 1100 },
      { title: "Microphone", description: "USB microphone for recording", price: 200 }
    ]
  },
  {
    user: "0005",
    rating: 4,
    want: [
      { title: "Smartwatch", description: "Fitness tracker with heart rate monitoring", price: 250 },
      { title: "Wireless Earbuds", description: "Noise-canceling Bluetooth earbuds", price: 180 }
    ],
    have: [
      { title: "Fitness Tracker", description: "Basic step counter and heart rate monitor", price: 100 },
      { title: "Old Phone", description: "Functional smartphone with minor scratches", price: 200 }
    ]
  }
];
  
export default mockMarketplaceData;
  