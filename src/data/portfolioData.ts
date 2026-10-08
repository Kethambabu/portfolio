export interface Project {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  flow: string[];
  metricsEvaluated: string[];
  githubUrl?: string;
  demoUrl?: string;
  featuredFrame: number;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  scoreLabel: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  score?: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface AISpecialization {
  title: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Ketham Babu Neelam",
  brandName: "KETHAM BABU",
  primaryPositioning: "AI / ML Engineer • Generative AI • Multi-Agent Systems • Deep Learning",
  location: "India",
  phone: "+91 7989318985",
  email: "kethambabu@gmail.com",
  github: "https://github.com/Kethambabu",
  linkedin: "https://www.linkedin.com/in/n-ketham-babu-3bb8032b4",
  resumeUrl: "https://drive.google.com/file/d/13X0W_F81agGpaL82Jf7cfQxuToScUSMl/view?usp=drivesdk",
  heroSummary: {
    line1: "B.Tech Computer Science student at IIIT Nuzvid with strong foundations in Machine Learning, Deep Learning, and Generative AI.",
    line2: "Experienced in training and evaluating deep learning models across image and text data, including GAN-based generative models and LLM-based multi-agent systems.",
    line3: "Skilled in building RAG pipelines, evaluation pipelines, and data-driven AI systems with a focus on reproducibility and measurable performance."
  },
  aboutParagraphs: [
    "I am a B.Tech Computer Science student at IIIT Nuzvid with strong foundations in Machine Learning, Deep Learning, and Generative AI.",
    "My work spans deep learning models for image and text data, GAN-based generative models, LLM-based multi-agent systems, RAG pipelines, evaluation pipelines, and data-driven AI systems.",
    "I focus on building reproducible AI systems and evaluating models using measurable performance metrics."
  ]
};

export const HERO_TAGS = [
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "LLMs",
  "RAG",
  "Multi-Agent Systems"
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "IIIT Nuzvid",
    period: "Aug 2023 – May 2027",
    grade: "8.57",
    scoreLabel: "CGPA"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "IIIT Nuzvid",
    period: "Nov 2021 – May 2023",
    grade: "9.65",
    scoreLabel: "CGPA"
  },
  {
    degree: "Class X",
    institution: "Municipal High School, Mangalagiri",
    period: "2021",
    grade: "93.33%",
    scoreLabel: "Percentage"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    skills: ["Python", "Java", "SQL", "JavaScript", "TypeScript"]
  },
  {
    title: "AI / ML",
    icon: "Brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLMs",
      "Generative AI",
      "RAG",
      "Multi-Agent Systems",
      "MCP (Model Context Protocol)",
      "LoRA/QLoRA Fine-Tuning",
      "GANs",
      "Prompt Engineering",
      "Model Evaluation"
    ]
  },
  {
    title: "Frameworks",
    icon: "Cpu",
    skills: ["FastAPI", "React", "LangChain", "LangGraph", "LlamaIndex", "AutoGen"]
  },
  {
    title: "Libraries",
    icon: "Library",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "SentenceTransformers",
      "Hugging Face Transformers",
      "SQLAlchemy",
      "Matplotlib"
    ]
  },
  {
    title: "Web Technologies",
    icon: "Globe",
    skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "jQuery", "Vite"]
  },
  {
    title: "Data & Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "SQLite", "FAISS", "Pinecone", "ChromaDB"]
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Docker", "Streamlit", "VS Code", "Google Colab"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "gan-dataset-balancing",
    code: "P01",
    name: "Balancing Long-Tail Distribution Dataset Using GAN",
    subtitle: "GAN-based Synthetic Minority Generation & Class Imbalance Balancing",
    description: "Built a GAN-based framework to balance long-tail distribution datasets using synthetic minority-class images, addressing severe class imbalance in large-scale training data.",
    highlights: [
      "Designed class-conditional image generation for improved representation of rare categories.",
      "Applied the approach to medical imaging to enhance robustness in skin cancer detection.",
      "Trained and fine-tuned GAN models using advanced techniques including ADA, EMA, and StyleGAN-inspired blocks to stabilize training and improve sample quality.",
      "Evaluated model performance using FID and classifier metrics including accuracy, precision, recall, F1-score, and ROC-AUC."
    ],
    techStack: ["Python", "GANs", "StyleGAN-inspired", "ADA", "EMA", "Deep Learning"],
    flow: [
      "Long-Tail Distribution",
      "Minority Classes",
      "Synthetic Generation",
      "Balanced Dataset",
      "Improved Representation"
    ],
    metricsEvaluated: ["FID", "Accuracy", "Precision", "Recall", "F1-score", "ROC-AUC"],
    githubUrl: "https://github.com/Kethambabu/longtail-distribution.git",
    featuredFrame: 50
  },
  {
    id: "multimodal-llm-routing",
    code: "P02",
    name: "Multi-Modal AI Agent System with LLM Routing & Evaluation",
    subtitle: "Dynamic Model Selection, Routing & Ablation Evaluation Pipeline",
    description: "Engineered dynamic LLM routing logic using LangGraph to select models based on latency, context window, and domain-specific performance requirements.",
    highlights: [
      "Implemented temperature, seed, and sampling ablations to achieve deterministic, reproducible outputs across text and image processing pipelines.",
      "Built an evaluation pipeline measuring accuracy, consistency, and JSON validity.",
      "Maintained versioned prompt libraries with experiment tracking documentation."
    ],
    techStack: ["Python", "LangGraph", "FastAPI", "Streamlit", "Hugging Face API"],
    flow: [
      "User Input",
      "LLM Router",
      "Model Selection",
      "LLM Execution",
      "Evaluation (Accuracy, Consistency, JSON Validity)"
    ],
    metricsEvaluated: ["Accuracy", "Consistency", "JSON Validity"],
    githubUrl: "https://github.com/Kethambabu/multi-agent-chatbot.git",
    featuredFrame: 150
  },
  {
    id: "multiagent-salon-workforce",
    code: "P03",
    name: "Multi-Agent Salon Workforce Management System",
    subtitle: "Hierarchical Multi-Agent Architecture & Enterprise RAG Pipeline",
    description: "Designed hierarchical prompt architectures (system → meta-controller → task-level → tools) for receptionist, BI, upsell, and reputation agents using AutoGen.",
    highlights: [
      "Built robust guardrail layers and role-conditioned system prompts to enforce strict output constraints and prevent prompt injection across multi-agent workflows.",
      "Developed an enterprise RAG pipeline with Supabase pgvector and semantic retrieval.",
      "Applied retrieval control to reduce hallucination rate by limiting context to verified document chunks.",
      "Integrated FastAPI backend with React frontend for real-time scheduling and analytics dashboards."
    ],
    techStack: ["Python", "AutoGen", "LangGraph", "FastAPI", "React", "Supabase", "PostgreSQL"],
    flow: [
      "Orchestrator",
      "Hierarchical Prompts (System → Meta → Task → Tools)",
      "Guardrails & Role Conditioning",
      "RAG / Supabase pgvector",
      "Verified Context Response"
    ],
    metricsEvaluated: ["Hallucination Reduction", "Context Verification", "Schema Constraints"],
    githubUrl: "https://github.com/Kethambabu/saloon-AI.git",
    featuredFrame: 250
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Foundations of Deep Learning: Concepts and Applications",
    issuer: "NPTEL Elite + Silver Certification",
    score: "Score: 83%",
    period: "Jan–Apr 2026"
  },
  {
    title: "5-Day AI Agents: Intensive Vibe Coding Course",
    issuer: "Kaggle & Google",
    period: "July 2026"
  }
];

export const AI_SPECIALIZATIONS: AISpecialization[] = [
  {
    title: "Generative AI",
    skills: ["GANs", "StyleGAN-inspired architectures", "ADA", "EMA"]
  },
  {
    title: "LLM Systems",
    skills: ["LLMs", "LLM Routing", "Prompt Engineering", "Model Evaluation"]
  },
  {
    title: "Agentic AI",
    skills: ["Multi-Agent Systems", "AutoGen", "LangGraph", "Guardrails", "Role-conditioned prompts"]
  },
  {
    title: "Retrieval",
    skills: ["RAG", "Semantic Retrieval", "Supabase pgvector", "FAISS", "Pinecone", "ChromaDB"]
  },
  {
    title: "Fine-Tuning",
    skills: ["LoRA/QLoRA Fine-Tuning"]
  }
];

export const JOURNEY_FLOW = [
  "Computer Science",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "GANs",
  "LLMs",
  "RAG",
  "Multi-Agent Systems",
  "LLM Routing",
  "AI Systems Design"
];

export const CORE_INTERESTS = [
  "Generative AI",
  "Multi-Agent Systems",
  "AI Systems Design",
  "Problem Solving"
];
