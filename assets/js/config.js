// Configuration file for Geojit SIP Club questionnaire

const QUESTIONNAIRE_CONFIG = {
  // Progress tracker sections
  progressSections: [
    { id: "profile", icon: "👤", title: "Profile", questionCount: 7 },
    { id: "financial", icon: "📊", title: "Financial Health", questionCount: 8 },
    { id: "risk", icon: "⚠️", title: "Risk Profile", questionCount: 6 },
    { id: "summary", icon: "📝", title: "Summary", questionCount: 2 },
  ],

  // Question indices for each section
  sectionMapping: {
    profile: { start: 0, count: 7 },
    financial: { start: 7, count: 8 },
    risk: { start: 15, count: 6 },
    summary: { start: 21, count: 2 },
  },

  // Questions configuration
  questions: [
    // Profile Questions (0-6)
    {
      id: 0,
      type: "text",
      title: "👋 Hi there! What is your name?",
      field: "user-name",
      label: "Your Name",
      placeholder: "Type your name here",
      required: true,
      validation: "Please enter your name to proceed.",
    },
    {
      id: 1,
      type: "contact",
      title: "📧 What is your email and phone number?",
      fields: [
        { id: "contact-email", label: "Your Email Address", type: "email", placeholder: "your.email@example.com" },
        { id: "contact-phone", label: "Your Mobile Number", type: "tel", placeholder: "+91 00000 00000" },
      ],
      required: true,
      validation: "Please enter both your email and phone number to proceed.",
    },
    {
      id: 2,
      type: "consent",
      title: "✅ Before we begin, please confirm:",
      subtitle:
        "I understand this survey gives only an indication of my financial health and risk profile.<br>I agree to be contacted by a Geojit expert. My data is safe and secure.",
      field: "consent-checkbox",
      label: "I agree",
      required: true,
      validation: "Please agree to the terms to proceed.",
    },
    {
      id: 3,
      type: "radio",
      title: "📅 What is your age group?",
      name: "age-group",
      options: [
        { value: "Under 25", score: 0 },
        { value: "25–34", score: 1 },
        { value: "35–44", score: 2 },
        { value: "45–54", score: 2 },
        { value: "55+", score: 1 },
      ],
      autoAdvance: true,
    },
    {
      id: 4,
      type: "radio",
      title: "🚻 How do you identify yourself?",
      name: "gender",
      options: [
        { value: "Male", score: 0 },
        { value: "Female", score: 0 },
        { value: "Non-binary", score: 0 },
        { value: "Prefer not to say", score: 0 },
      ],
      autoAdvance: true,
    },
    {
      id: 5,
      type: "radio",
      title: "💼 What do you do for a living?",
      name: "occupation",
      options: [
        { value: "Salaried", score: 0 },
        { value: "Self-employed", score: 0 },
        { value: "Student", score: 0 },
        { value: "Retired", score: 0 },
        { value: "Other", score: 0 },
      ],
      autoAdvance: true,
    },
    {
      id: 6,
      type: "radio",
      title: "💍 Are you married or single?",
      name: "marital-status",
      options: [
        { value: "Single", score: 0 },
        { value: "Married", score: 0 },
        { value: "Prefer not to say", score: 0 },
      ],
      autoAdvance: true,
    },

    // Financial Health Questions (7-14)
    {
      id: 7,
      type: "radio",
      title: "📊 Do you usually keep track of your monthly income and expenses?",
      name: "q1-financial-health",
      category: "financial",
      options: [
        { value: "Yes", score: 2 },
        { value: "No", score: 0 },
      ],
      autoAdvance: true,
    },
    {
      id: 8,
      type: "radio",
      title: "💰 Roughly what portion of your income do you manage to save every month?",
      name: "q2-financial-health",
      category: "financial",
      options: [
        { value: "Less than 10%", score: 0 },
        { value: "10–20%", score: 1 },
        { value: "20–30%", score: 2 },
        { value: "30%+", score: 3 },
      ],
      autoAdvance: true,
    },
    {
      id: 9,
      type: "radio",
      title: "🔖 If life throws a surprise (like a medical bill), do you have savings to manage it?",
      name: "q3-financial-health",
      category: "financial",
      options: [
        { value: "Yes", score: 3 },
        { value: "No", score: 0 },
      ],
      autoAdvance: true,
    },
    {
      id: 10,
      type: "radio",
      title: "📉 Do you have active life or health insurance policies?",
      name: "q4-financial-health",
      category: "financial",
      options: [
        { value: "Yes", score: 2 },
        { value: "No", score: 0 },
      ],
      autoAdvance: true,
    },
    {
      id: 11,
      type: "radio",
      title: "🎯 Do you invest money specifically for your life goals (like education, home, etc.)?",
      name: "q5-financial-health",
      category: "financial",
      options: [
        { value: "Yes", score: 2 },
        { value: "No", score: 0 },
      ],
      autoAdvance: true,
    },
    {
      id: 12,
      type: "radio",
      title: "🔄 How often do you review or adjust your investments?",
      name: "q6-financial-health",
      category: "financial",
      options: [
        { value: "Frequently", score: 2 },
        { value: "Rarely", score: 1 },
        { value: "Never", score: 0 },
      ],
      autoAdvance: true,
    },
    {
      id: 13,
      type: "radio",
      title: "💳 How often do you borrow money or rely on credit cards to cover monthly expenses?",
      name: "q7-financial-health",
      category: "financial",
      options: [
        { value: "Often – I rely heavily on credit", score: 0 },
        { value: "Sometimes – I use credit occasionally", score: 1 },
        { value: "Rarely – Only in emergencies", score: 2 },
        { value: "Never – I manage expenses without credit", score: 3 },
      ],
      autoAdvance: true,
    },
    {
      id: 14,
      type: "radio",
      title: "📈 Do you track your net worth (assets – liabilities) regularly?",
      name: "q8-financial-health",
      category: "financial",
      options: [
        { value: "Yes, at least once a year", score: 3 },
        { value: "Occasionally", score: 1 },
        { value: "No, never calculated it", score: 0 },
      ],
      autoAdvance: true,
    },

    // Risk Profile Questions (15-20)
    {
      id: 15,
      type: "radio",
      title: "😨 If your investment drops 10%, what is your first reaction?",
      name: "q1-risk-profile",
      category: "risk",
      options: [
        { value: "Sell and exit", score: 0 },
        { value: "Wait patiently", score: 1 },
        { value: "Invest more while it is low", score: 2 },
      ],
      autoAdvance: true,
    },
    {
      id: 16,
      type: "radio",
      title: "⏳ How long are you comfortable keeping your money invested?",
      name: "q2-risk-profile",
      category: "risk",
      options: [
        { value: "Less than 1 year", score: 0 },
        { value: "1–3 years", score: 1 },
        { value: "3+ years", score: 2 },
      ],
      autoAdvance: true,
    },
    {
      id: 17,
      type: "radio",
      title: "📚 How would you describe your understanding of investments?",
      name: "q3-risk-profile",
      category: "risk",
      options: [
        { value: "Beginner", score: 0 },
        { value: "Intermediate", score: 1 },
        { value: "Advanced", score: 2 },
      ],
      autoAdvance: true,
    },
    {
      id: 18,
      type: "radio",
      title: "🎢 What is your comfort level with ups and downs in your investments?",
      name: "q4-risk-profile",
      category: "risk",
      options: [
        { value: "I get nervous", score: 0 },
        { value: "I am okay with some fluctuations", score: 1 },
        { value: "I am comfortable with volatility", score: 2 },
      ],
      autoAdvance: true,
    },
    {
      id: 19,
      type: "radio",
      title: "📈 If your investment grows by 20% quickly, what would you do?",
      name: "q5-risk-profile",
      category: "risk",
      options: [
        { value: "Sell to book profit", score: 0 },
        { value: "Hold and watch", score: 1 },
        { value: "Invest more expecting further gains", score: 2 },
      ],
      autoAdvance: true,
    },
    {
      id: 20,
      type: "radio",
      title: "🎯 What is your main reason for investing?",
      name: "q6-risk-profile",
      category: "risk",
      options: [
        { value: "To grow wealth long-term", score: 2 },
        { value: "To protect capital", score: 0 },
        { value: "To generate regular income", score: 1 },
      ],
      autoAdvance: true,
    },

    // Summary Questions (21)
    {
      id: 21,
      type: "checkbox-group",
      title: "Stay Connected with Geojit!",
      subtitle: "Select the options you're interested in:",
      checkboxes: [
        { id: "join-community", label: "Join our FundsGenie Community for exclusive updates and offers." },
        {
          id: "newsletter-subscription",
          label: "Receive a 3-month Geojit Insights subscription and monthly newsletter.",
        },
        {
          id: "masterclass-interest",
          label: "I'm interested in attending your upcoming Financial Masterclass sessions.",
        },
      ],
    },
  ],

  // Scoring configuration
  scoring: {
    financial: {
      max: 17,
      interpretations: {
        high: { min: 12, message: "🟢 On Track – Great job! Continue with your healthy financial habits." },
        moderate: { min: 7, message: "🟡 Moderate – You're on the right path. Let's refine and commit to goals." },
        low: { min: 0, message: "⚠️ Needs Improvement – Let's work on better saving and planning habits." },
      },
    },
    risk: {
      max: 12,
      interpretations: {
        high: { min: 9, message: "High Risk – You're comfortable with volatility and long-term growth." },
        moderate: { min: 5, message: "Moderate Risk – You're open to some risk for better returns." },
        low: { min: 0, message: "Low Risk – You prefer safety and stability." },
      },
    },
  },

  // Animation settings
  animation: {
    duration: 300,
    autoAdvanceDelay: 1000,
  },
};
