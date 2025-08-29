export const projects = [
  {
    id: 1,
    title: "NBP Online Banking",
    description:
      "Built the entire frontend from scratch, from designing reusable components to deploying the app. It’s a secure and reliable online banking platform used by millions every day, handling high traffic smoothly and ensuring a seamless user experience across all devices.",
    technologies: ["React", "TypeScript", "Springboot", "Mysql", "JAVA"],
    media: {
      type: "video" as const,
      src: "/ecommerce-platform-demo-video.png",
      alt: "E-Commerce Platform Demo",
    },
    links: {
      live: "https://example.com",
    },
    detailedDescription:
      "This comprehensive e-commerce platform was built to handle high-traffic scenarios with advanced caching strategies and optimized database queries. The platform includes a sophisticated inventory management system, automated email notifications, and comprehensive analytics dashboard for business insights.",
    features: [
      "Transfer funds to friends and family",
      "Pay your bills easily",
      "Add, edit, or remove beneficiaries",
      "Manage your cards (add, block, view details)",
      "Secure login with two-factor authentication",
      "Handles millions of transactions daily",
      "Smooth and responsive user experience",
    ],
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools for modern banking needs.",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "JWT",
      "Biometric Auth",
    ],
    media: {
      type: "photos" as const,
      src: [
        "/mobile-banking-app-login-screen.png",
        "/mobile-banking-app-dashboard.png",
        "/mobile-banking-app-transaction-history.png",
        "/mobile-banking-app-transfer-money.png",
      ],
      alt: "Mobile Banking App Screenshots",
    },
    links: {
      github: "https://github.com/username/banking-app",
      demo: "https://banking-demo.example.com",
    },
    detailedDescription:
      "A cutting-edge mobile banking solution that prioritizes security and user experience. Built with React Native for cross-platform compatibility, featuring end-to-end encryption, biometric authentication, and real-time fraud detection systems.",
    features: [
      "Biometric login (fingerprint and face recognition)",
      "Real-time transaction notifications and alerts",
      "Secure peer-to-peer money transfers",
      "Bill payment automation and scheduling",
      "Spending analytics and budget tracking",
      "Multi-language support and accessibility features",
    ],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics. Features clean design and real-time data updates.",
    technologies: ["React", "Chart.js", "Weather API", "CSS Grid", "PWA"],
    media: {
      type: "video" as const,
      src: "/weather-dashboard-demo.png",
      alt: "Weather Dashboard Demo",
    },
    links: {
      live: "https://weather.example.com",
      github: "https://github.com/username/weather-dashboard",
      demo: "https://weather-demo.example.com",
    },
    detailedDescription:
      "An advanced weather dashboard that aggregates data from multiple weather APIs to provide the most accurate forecasts. Features interactive maps, historical weather data analysis, and personalized weather alerts based on user preferences and location.",
    features: [
      "7-day detailed weather forecasts with hourly breakdowns",
      "Interactive weather maps with radar and satellite imagery",
      "Severe weather alerts and notifications",
      "Historical weather data and trend analysis",
      "Multiple location tracking and comparison",
      "Offline functionality with cached weather data",
    ],
  },
];
