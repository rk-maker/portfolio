import mainMenu from "../assets/pay-app-asset/main-menu.png";

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
      live: "https://ibanking.nbp.com.pk/login",
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
    title: "NBP Mobile Banking App",
    description:
      "A award-winning mobile banking app boasts a 4.5-star rating and over 1 million downloads, delivering exceptional financial management with military-grade security. Featuring biometric authentication, instant money transfers,  bill payments, and Card Mangement, this React Native-powered app makes banking effortless and secure for modern users.",
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
        "/nbp-app-asset/Login.png",
        "/nbp-app-asset/card-manag.png",
        "/nbp-app-asset/reciept.png",
        "/nbp-app-asset/card-manag.png",
      ],
      alt: "Mobile Banking App Screenshots",
    },
    links: {
      live: "https://play.google.com/store/apps/details?id=com.paysys.nbpdigital&hl=en",
    },
    detailedDescription:
      "This comprehensive mobile banking solution was developed using cutting-edge React Native technology, ensuring seamless performance across both iOS and Android platforms. The app incorporates advanced security features including online fingerprint authentication and end-to-end encryption to protect user data. It handles real-time transactions, NFC payments for contactless purchases, and comprehensive card management including virtual card creation capabilities. The intuitive interface supports multi-language functionality and multi-theme options for personalized user experience, with offline capabilities and instant notifications keeping users connected. With its robust architecture and user-friendly design, it's the preferred choice for over a million satisfied customers worldwide.",
    features: [
      "Biometric login (fingerprint and face recognition)",
      "Real-time transaction notifications and alerts",
      "Secure peer-to-peer money transfers",
      "Bill payment and scheduling",
      "Virtual Card creation",
      "Multi-theme for UX expereince",
      "Multi-language support and accessibility features",
    ],
  },
  {
    id: 3,
    title: "PayApp Merchant",
    description:
      "PayApp, the ultimate payment solution designed exclusively for your local kirana stores. We bridge the gap between traditional shopping and modern convenience, making every transaction swift, secure, and seamless.",
    technologies: ["React", "Chart.js", "Weather API", "CSS Grid", "PWA"],
    media: {
      type: "photos" as const,
      src: [
        "/pay-app-asset/main-menu.png",
        "/pay-app-asset/tran-summary.png",
        "/pay-app-asset/transaction.png",
        "/pay-app-asset/main-menu.png",
      ],
      alt: "Weather Dashboard Demo",
    },
    links: {
      live: "https://weather.example.com",
    },
    detailedDescription:
      "This innovative payment application was specifically crafted to revolutionize local retail experiences by connecting neighborhood kirana stores with cutting-edge digital payment technology. The app features advanced biometric login and fingerprint registration for secure access, along with NFC payment capabilities for contactless transactions. Store owners benefit from subsidies provided to merchants, comprehensive transaction history tracking, and easy product addition functionality that simplifies inventory management. With its intuitive design focused on small business needs, PayApp empowers local store owners to embrace digital payments while maintaining operational simplicity, transforming traditional kirana stores into modern, efficient retail hubs that customers love to visit.",
    features: [
      "Merchant Subsidies - Financial incentives and support programs for local store owners",
      "NFC Payments - Contactless payment processing for quick and secure transactions",
      "Transaction History - Complete record tracking of all payment activities and sales",
      "Biometric Login - Secure authentication using fingerprint technology",
      "Biometric & Finger Registration - Easy setup and management of biometric access",
      "Easy Product Addition - Simplified inventory management with quick product catalog updates",
    ],
  },
];
