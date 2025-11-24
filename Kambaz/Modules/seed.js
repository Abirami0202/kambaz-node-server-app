import ModuleModel from "./model.js";
import CourseModel from "../Courses/model.js";

// Relevant modules for each course
const modulesData = {
  "Web Development": [
    { name: "Introduction to Web Development", description: "Overview of web technologies and development tools", lessons: [
      { _id: "l1", name: "What is Web Development?", description: "Introduction to web development concepts", module: "m1" },
      { _id: "l2", name: "HTML Basics", description: "Introduction to HTML structure", module: "m1" },
      { _id: "l3", name: "CSS Fundamentals", description: "Styling web pages with CSS", module: "m1" }
    ]},
    { name: "JavaScript and React", description: "Modern JavaScript and React framework", lessons: [
      { _id: "l4", name: "JavaScript ES6+", description: "Modern JavaScript features", module: "m2" },
      { _id: "l5", name: "React Components", description: "Building React components", module: "m2" },
      { _id: "l6", name: "State and Props", description: "Managing component state", module: "m2" }
    ]},
    { name: "Next.js Framework", description: "Server-side rendering with Next.js", lessons: [
      { _id: "l7", name: "Next.js Setup", description: "Getting started with Next.js", module: "m3" },
      { _id: "l8", name: "Routing in Next.js", description: "File-based routing", module: "m3" },
      { _id: "l9", name: "API Routes", description: "Creating backend APIs", module: "m3" }
    ]},
    { name: "Database Integration", description: "Working with MongoDB", lessons: [
      { _id: "l10", name: "MongoDB Basics", description: "Introduction to NoSQL databases", module: "m4" },
      { _id: "l11", name: "Mongoose ODM", description: "Object modeling with Mongoose", module: "m4" }
    ]},
    { name: "Deployment", description: "Deploying web applications", lessons: [
      { _id: "l12", name: "Vercel Deployment", description: "Deploying Next.js apps", module: "m5" }
    ]}
  ],
  "Algorithms": [
    { name: "Introduction to Algorithms", description: "Algorithm analysis and complexity", lessons: [
      { _id: "l13", name: "Big O Notation", description: "Understanding time complexity", module: "m6" },
      { _id: "l14", name: "Algorithm Analysis", description: "Analyzing algorithm efficiency", module: "m6" }
    ]},
    { name: "Dynamic Programming", description: "Solving optimization problems", lessons: [
      { _id: "l15", name: "Memoization", description: "Top-down dynamic programming", module: "m7" },
      { _id: "l16", name: "Tabulation", description: "Bottom-up dynamic programming", module: "m7" },
      { _id: "l17", name: "Classic DP Problems", description: "Knapsack, LCS, and more", module: "m7" }
    ]},
    { name: "Graph Algorithms", description: "Traversal and shortest path algorithms", lessons: [
      { _id: "l18", name: "BFS and DFS", description: "Graph traversal techniques", module: "m8" },
      { _id: "l19", name: "Dijkstra's Algorithm", description: "Shortest path in weighted graphs", module: "m8" },
      { _id: "l20", name: "Minimum Spanning Trees", description: "Kruskal and Prim algorithms", module: "m8" }
    ]},
    { name: "Greedy Algorithms", description: "Making locally optimal choices", lessons: [
      { _id: "l21", name: "Greedy Strategy", description: "Understanding greedy approach", module: "m9" },
      { _id: "l22", name: "Activity Selection", description: "Classic greedy problem", module: "m9" }
    ]},
    { name: "NP-Completeness", description: "Computational complexity theory", lessons: [
      { _id: "l23", name: "P vs NP", description: "Understanding complexity classes", module: "m10" }
    ]}
  ],
  "Database Management Systems": [
    { name: "Introduction to Databases", description: "Database fundamentals and concepts", lessons: [
      { _id: "l24", name: "What is a Database?", description: "Introduction to DBMS", module: "m11" },
      { _id: "l25", name: "Relational Model", description: "Understanding relations and tables", module: "m11" }
    ]},
    { name: "SQL Fundamentals", description: "Structured Query Language basics", lessons: [
      { _id: "l26", name: "SELECT Queries", description: "Retrieving data from tables", module: "m12" },
      { _id: "l27", name: "JOIN Operations", description: "Combining data from multiple tables", module: "m12" },
      { _id: "l28", name: "Aggregate Functions", description: "COUNT, SUM, AVG, etc.", module: "m12" }
    ]},
    { name: "Database Design", description: "Normalization and schema design", lessons: [
      { _id: "l29", name: "ER Diagrams", description: "Entity-Relationship modeling", module: "m13" },
      { _id: "l30", name: "Normalization", description: "1NF, 2NF, 3NF, BCNF", module: "m13" }
    ]},
    { name: "Transactions", description: "ACID properties and concurrency", lessons: [
      { _id: "l31", name: "ACID Properties", description: "Atomicity, Consistency, Isolation, Durability", module: "m14" },
      { _id: "l32", name: "Concurrency Control", description: "Locking and deadlocks", module: "m14" }
    ]},
    { name: "NoSQL Databases", description: "MongoDB and document databases", lessons: [
      { _id: "l33", name: "MongoDB Basics", description: "Working with documents", module: "m15" }
    ]}
  ],
  "Machine Learning": [
    { name: "Introduction to ML", description: "Machine learning fundamentals", lessons: [
      { _id: "l34", name: "What is Machine Learning?", description: "Overview of ML concepts", module: "m16" },
      { _id: "l35", name: "Types of Learning", description: "Supervised, Unsupervised, Reinforcement", module: "m16" }
    ]},
    { name: "Supervised Learning", description: "Learning from labeled data", lessons: [
      { _id: "l36", name: "Linear Regression", description: "Predicting continuous values", module: "m17" },
      { _id: "l37", name: "Logistic Regression", description: "Binary classification", module: "m17" },
      { _id: "l38", name: "Decision Trees", description: "Tree-based classification", module: "m17" }
    ]},
    { name: "Neural Networks", description: "Deep learning basics", lessons: [
      { _id: "l39", name: "Perceptrons", description: "Basic neural network units", module: "m18" },
      { _id: "l40", name: "Backpropagation", description: "Training neural networks", module: "m18" },
      { _id: "l41", name: "Deep Networks", description: "Multi-layer architectures", module: "m18" }
    ]},
    { name: "Unsupervised Learning", description: "Learning from unlabeled data", lessons: [
      { _id: "l42", name: "K-Means Clustering", description: "Clustering algorithms", module: "m19" },
      { _id: "l43", name: "Dimensionality Reduction", description: "PCA and feature extraction", module: "m19" }
    ]},
    { name: "Support Vector Machines", description: "SVM for classification", lessons: [
      { _id: "l44", name: "Linear SVM", description: "Maximum margin classifiers", module: "m20" }
    ]}
  ],
  "Software Engineering": [
    { name: "Software Development Lifecycle", description: "SDLC phases and processes", lessons: [
      { _id: "l45", name: "Requirements Gathering", description: "Understanding user needs", module: "m21" },
      { _id: "l46", name: "System Design", description: "Architecture and design patterns", module: "m21" }
    ]},
    { name: "Agile Methodologies", description: "Scrum and iterative development", lessons: [
      { _id: "l47", name: "Scrum Framework", description: "Sprints, stand-ups, retrospectives", module: "m22" },
      { _id: "l48", name: "User Stories", description: "Writing effective requirements", module: "m22" }
    ]},
    { name: "Version Control", description: "Git and collaboration", lessons: [
      { _id: "l49", name: "Git Basics", description: "Commits, branches, merges", module: "m23" },
      { _id: "l50", name: "GitHub Workflow", description: "Pull requests and code reviews", module: "m23" }
    ]},
    { name: "Testing Strategies", description: "Unit, integration, and system testing", lessons: [
      { _id: "l51", name: "Unit Testing", description: "Testing individual components", module: "m24" },
      { _id: "l52", name: "Test-Driven Development", description: "Writing tests first", module: "m24" }
    ]},
    { name: "Design Patterns", description: "Common software design solutions", lessons: [
      { _id: "l53", name: "Creational Patterns", description: "Singleton, Factory, Builder", module: "m25" },
      { _id: "l54", name: "Structural Patterns", description: "Adapter, Decorator, Facade", module: "m25" }
    ]}
  ],
  "Computer Networks": [
    { name: "Network Fundamentals", description: "Introduction to networking", lessons: [
      { _id: "l55", name: "OSI Model", description: "Seven layers of networking", module: "m26" },
      { _id: "l56", name: "TCP/IP Protocol Suite", description: "Internet protocols", module: "m26" }
    ]},
    { name: "Application Layer", description: "HTTP, DNS, and application protocols", lessons: [
      { _id: "l57", name: "HTTP Protocol", description: "Web communication", module: "m27" },
      { _id: "l58", name: "DNS", description: "Domain Name System", module: "m27" }
    ]},
    { name: "Transport Layer", description: "TCP and UDP protocols", lessons: [
      { _id: "l59", name: "TCP Connections", description: "Reliable data transfer", module: "m28" },
      { _id: "l60", name: "UDP Protocol", description: "Connectionless communication", module: "m28" }
    ]},
    { name: "Network Layer", description: "Routing and IP addressing", lessons: [
      { _id: "l61", name: "IP Addressing", description: "IPv4 and IPv6", module: "m29" },
      { _id: "l62", name: "Routing Algorithms", description: "Finding paths in networks", module: "m29" }
    ]},
    { name: "Network Security", description: "Cryptography and security protocols", lessons: [
      { _id: "l63", name: "Encryption", description: "Symmetric and asymmetric cryptography", module: "m30" },
      { _id: "l64", name: "SSL/TLS", description: "Secure communication", module: "m30" }
    ]}
  ],
  "Mobile Application Development": [
    { name: "Mobile Development Basics", description: "Introduction to mobile platforms", lessons: [
      { _id: "l65", name: "iOS vs Android", description: "Platform comparison", module: "m31" },
      { _id: "l66", name: "Mobile UI/UX", description: "Designing for mobile", module: "m31" }
    ]},
    { name: "iOS Development", description: "Swift and iOS SDK", lessons: [
      { _id: "l67", name: "Swift Language", description: "Introduction to Swift", module: "m32" },
      { _id: "l68", name: "UIKit Framework", description: "Building iOS interfaces", module: "m32" }
    ]},
    { name: "Android Development", description: "Kotlin and Android SDK", lessons: [
      { _id: "l69", name: "Kotlin Basics", description: "Introduction to Kotlin", module: "m33" },
      { _id: "l70", name: "Android Activities", description: "Building Android apps", module: "m33" }
    ]},
    { name: "Cross-Platform Development", description: "React Native and Flutter", lessons: [
      { _id: "l71", name: "React Native", description: "JavaScript for mobile", module: "m34" },
      { _id: "l72", name: "Flutter Framework", description: "Dart and Flutter widgets", module: "m34" }
    ]},
    { name: "Mobile Databases", description: "Local storage and SQLite", lessons: [
      { _id: "l73", name: "SQLite", description: "Mobile database management", module: "m35" }
    ]}
  ],
  "Cloud Computing": [
    { name: "Cloud Fundamentals", description: "Introduction to cloud computing", lessons: [
      { _id: "l74", name: "Cloud Service Models", description: "IaaS, PaaS, SaaS", module: "m36" },
      { _id: "l75", name: "Cloud Deployment Models", description: "Public, Private, Hybrid", module: "m36" }
    ]},
    { name: "Virtualization", description: "Virtual machines and hypervisors", lessons: [
      { _id: "l76", name: "VM Technology", description: "Creating virtual machines", module: "m37" },
      { _id: "l77", name: "Container Technology", description: "Docker basics", module: "m37" }
    ]},
    { name: "AWS Services", description: "Amazon Web Services", lessons: [
      { _id: "l78", name: "EC2 Instances", description: "Virtual servers in the cloud", module: "m38" },
      { _id: "l79", name: "S3 Storage", description: "Object storage service", module: "m38" },
      { _id: "l80", name: "Lambda Functions", description: "Serverless computing", module: "m38" }
    ]},
    { name: "Azure and GCP", description: "Microsoft Azure and Google Cloud", lessons: [
      { _id: "l81", name: "Azure Basics", description: "Introduction to Azure", module: "m39" },
      { _id: "l82", name: "Google Cloud Platform", description: "Introduction to GCP", module: "m39" }
    ]},
    { name: "Serverless Computing", description: "Functions as a Service", lessons: [
      { _id: "l83", name: "Serverless Architecture", description: "Event-driven computing", module: "m40" }
    ]}
  ]
};

export async function seedModules() {
  try {
    // Clear existing modules
    await ModuleModel.deleteMany({});
    console.log("✅ Cleared existing modules");

    // Get all courses from MongoDB
    const allCourses = await CourseModel.find({});
    console.log(`📚 Found ${allCourses.length} courses in database`);

    for (const course of allCourses) {
      const courseName = course.name;
      const courseModules = modulesData[courseName];

      if (courseModules) {
        for (let i = 0; i < courseModules.length; i++) {
          const moduleData = courseModules[i];
          const newModule = {
            name: moduleData.name,
            description: moduleData.description,
            course: course._id,
            lessons: moduleData.lessons || []
          };

          await ModuleModel.create(newModule);
          console.log(`✅ Created module: ${moduleData.name} for ${courseName}`);
        }
      } else {
        console.log(`⚠️  No modules defined for ${courseName}`);
      }
    }

    console.log("🎉 Module seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding modules:", error);
  }
}