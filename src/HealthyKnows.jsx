import { useState, useEffect, useRef, useCallback } from "react";

// ─── SVG ICONS ──────────────────────────────────────────
const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
);
const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);
const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
);
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
const ArrowUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
);
const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
);
const WarningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8533A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/></svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const TiktokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.54V6.78a4.85 4.85 0 0 1-1.07-.09z"/></svg>
);
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
);
const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
);

// ─── THEME TOKENS ────────────────────────────────────────
const LIGHT = {
  navy: "#0B2545",
  teal: "#0E7C7B",
  tealLight: "#14A5A3",
  coral: "#E8533A",
  cream: "#FDF8F2",
  warm: "#F5EFE6",
  text: "#1A1A2E",
  muted: "#6B7280",
  border: "#E8E0D5",
  white: "#FFFFFF",
  cardBg: "#FFFFFF",
  sectionAlt: "#F5EFE6",
  navBg: "rgba(253,248,242,0.96)",
  navBgScrolled: "rgba(253,248,242,0.96)",
  inputBg: "#FFFFFF",
  inputBorder: "#E8E0D5",
  mutedText: "rgba(26,26,46,0.55)",
};
const DARK = {
  navy: "#E8F4FF",
  teal: "#2DD4D3",
  tealLight: "#5AE8E7",
  coral: "#FF7A63",
  cream: "#0F1219",
  warm: "#141820",
  text: "#E8EDF5",
  muted: "#9BA8B8",
  border: "#252D3D",
  white: "#1A2235",
  cardBg: "#1A2235",
  sectionAlt: "#141820",
  navBg: "rgba(15,18,25,0.96)",
  navBgScrolled: "rgba(15,18,25,0.98)",
  inputBg: "#1A2235",
  inputBorder: "#252D3D",
  mutedText: "rgba(232,237,245,0.55)",
};

// ─── IMAGE MAPS ──────────────────────────────────────────
const topicImages = {
  "Heart Health": "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&q=80",
  "Anxiety & Depression": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
  "Blood Pressure": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
  "Weight Management": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  "Dental Health": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
  "Sleep Disorders": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80",
  "Respiratory Health": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
  "Bone & Joint": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&q=80",
  "Eye Health": "https://images.unsplash.com/photo-1590244117960-2a1e35f21df1?w=400&q=80",
  "Digestive Health": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  "Women's Health": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  "Diabetes": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=80",
  "Skin Conditions": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80",
  "Child Health": "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&q=80",
  "Senior Wellness": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&q=80",
  "Fitness & Exercise": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
};
const conditionImages = {
  "Breast Cancer": "https://images.unsplash.com/photo-1576671081837-49000212a370?w=500&q=80",
  "Rheumatoid Arthritis": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=500&q=80",
  "Depression": "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=500&q=80",
  "Eczema": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&q=80",
  "Women's Health": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
  "Diabetes": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&q=80",
  "Eye Health": "https://images.unsplash.com/photo-1590244117960-2a1e35f21df1?w=500&q=80",
  "Sleep Disorders": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&q=80",
  "Hypertension": "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=500&q=80",
  "Asthma": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
  "Thyroid Disease": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80",
  "Kidney Disease": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80",
  "Liver Disease": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
  "Osteoporosis": "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=500&q=80",
  "PCOS": "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80",
  "Dengue Fever": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80",
};
const storyImages = {
  "Maria Santos": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  "Juan dela Cruz": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  "Liza Reyes": "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&q=80",
  "Eduardo Tan": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
};
const nutritionImages = {
  "Go Leafy & Green": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80",
  "Choose Local Fish": "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80",
  "Smart Rice Swaps": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
  "Eat Seasonal Fruits": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
  "Hydrate Properly": "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80",
  "Protein at Every Meal": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80",
};

// ─── DATA ────────────────────────────────────────────────
const topics = [
  { label: "Heart Health", slug: "heart-health" },
  { label: "Anxiety & Depression", slug: "anxiety-depression" },
  { label: "Blood Pressure", slug: "blood-pressure" },
  { label: "Weight Management", slug: "weight-management" },
  { label: "Dental Health", slug: "dental-health" },
  { label: "Sleep Disorders", slug: "sleep-disorders" },
  { label: "Respiratory Health", slug: "respiratory-health" },
  { label: "Bone & Joint", slug: "bone-joint" },
  { label: "Eye Health", slug: "eye-health" },
  { label: "Digestive Health", slug: "digestive-health" },
  { label: "Women's Health", slug: "womens-health" },
  { label: "Diabetes", slug: "diabetes" },
  { label: "Skin Conditions", slug: "skin-conditions" },
  { label: "Child Health", slug: "child-health" },
  { label: "Senior Wellness", slug: "senior-wellness" },
  { label: "Fitness & Exercise", slug: "fitness-exercise" },
];

const topicContent = {
  "heart-health": {
    label: "Heart Health",
    intro: "Heart disease is the leading cause of death worldwide. Understanding your heart health is the first step toward prevention and a longer life.",
    sections: [
      { heading: "What is Heart Disease?", body: "Heart disease refers to several types of heart conditions. The most common is coronary artery disease (CAD), which can cause heart attack. Other types include heart failure, arrhythmia, and heart valve problems." },
      { heading: "Common Risk Factors", body: "High blood pressure, high cholesterol, smoking, diabetes, obesity, unhealthy diet, physical inactivity, excessive alcohol use, and family history all increase your risk." },
      { heading: "Warning Signs", body: "Chest pain or discomfort, shortness of breath, pain or discomfort in the arms, back, neck, jaw, or stomach, nausea, lightheadedness, or cold sweats." },
      { heading: "Prevention Tips", body: "Eat a heart-healthy diet rich in fruits, vegetables, and whole grains. Exercise at least 150 minutes per week. Quit smoking. Limit alcohol. Manage stress. Get regular health screenings." },
    ]
  },
  "anxiety-depression": {
    label: "Anxiety & Depression",
    intro: "Mental health conditions like anxiety and depression are among the most common health issues globally — yet they remain widely misunderstood and undertreated.",
    sections: [
      { heading: "Understanding Anxiety", body: "Anxiety is more than everyday stress. It involves persistent, excessive worry that interferes with daily activities. Common types include generalized anxiety disorder, panic disorder, and social anxiety." },
      { heading: "Understanding Depression", body: "Depression is a serious mood disorder causing persistent feelings of sadness, emptiness, or hopelessness. It affects how you feel, think, and handle daily activities." },
      { heading: "Signs to Watch For", body: "Persistent sadness, loss of interest in activities, changes in appetite or sleep, difficulty concentrating, feelings of worthlessness, and in severe cases, thoughts of self-harm." },
      { heading: "How to Get Help", body: "Talk to a trusted person or healthcare provider. Therapy (CBT), medication, lifestyle changes, and support groups are all effective treatments. You don't have to face this alone." },
    ]
  },
  "diabetes": {
    label: "Diabetes",
    intro: "Diabetes affects millions of Filipinos. With the right knowledge and lifestyle changes, it can be effectively managed — and in some cases, even reversed.",
    sections: [
      { heading: "Types of Diabetes", body: "Type 1 is an autoimmune condition where the body doesn't produce insulin. Type 2 is the most common and develops when the body can't use insulin effectively. Gestational diabetes occurs during pregnancy." },
      { heading: "Common Symptoms", body: "Frequent urination, excessive thirst, unexplained weight loss, fatigue, blurred vision, slow-healing sores, and frequent infections." },
      { heading: "Managing Blood Sugar", body: "Monitor your blood glucose regularly. Take medications as prescribed. Follow a balanced diet low in refined carbs and sugar. Exercise daily. Attend regular check-ups." },
      { heading: "Foot Care", body: "People with diabetes are at higher risk for foot complications. Inspect your feet daily, keep them clean and moisturized, wear proper footwear, and report any sores or infections to your doctor immediately." },
    ]
  },
};
const genericTopicContent = (label) => ({
  label,
  intro: `Understanding ${label} is essential for maintaining your overall health and wellbeing. This guide covers the key facts, prevention strategies, and when to seek medical advice.`,
  sections: [
    { heading: "Overview", body: `${label} encompasses a range of conditions and concerns that can significantly affect your quality of life. Early awareness and proactive health habits are your best defense.` },
    { heading: "Key Risk Factors", body: "Risk factors often include lifestyle choices (diet, exercise, sleep), genetics, age, and environmental factors. Many risks can be reduced with healthy habits." },
    { heading: "Prevention & Lifestyle", body: "Maintain a balanced diet, stay physically active, get adequate sleep, manage stress, avoid smoking and excessive alcohol, and attend regular medical check-ups." },
    { heading: "When to See a Doctor", body: "If you notice persistent or worsening symptoms, don't wait. Early diagnosis and treatment leads to better outcomes. Your doctor can provide personalized guidance." },
  ]
});

const conditions = [
  { name: "Breast Cancer", slug: "breast-cancer", accent: "#D63384", desc: "Early detection saves lives. Learn about symptoms, screening, and modern treatment approaches.", tips: ["Monthly self-exams", "Annual mammograms after 40", "Maintain healthy weight"] },
  { name: "Rheumatoid Arthritis", slug: "rheumatoid-arthritis", accent: "#1565C0", desc: "An autoimmune condition causing joint inflammation. Discover ways to manage pain and stay active.", tips: ["Low-impact exercise", "Anti-inflammatory diet", "Adequate rest"] },
  { name: "Depression", slug: "depression", accent: "#7B2D8B", desc: "A common but serious mood disorder affecting millions. Understand symptoms and paths to recovery.", tips: ["Talk therapy helps", "Stay socially connected", "Regular physical activity"] },
  { name: "Eczema", slug: "eczema", accent: "#2E7D32", desc: "A chronic skin condition causing itchy, inflamed skin. Learn triggers and effective skin care routines.", tips: ["Moisturize daily", "Avoid harsh soaps", "Identify your triggers"] },
  { name: "Women's Health", slug: "womens-health", accent: "#E64A19", desc: "Comprehensive health topics specific to women — from reproductive health to heart disease prevention.", tips: ["Regular Pap smears", "Bone density checks", "Hormonal health awareness"] },
  { name: "Diabetes", slug: "diabetes", accent: "#F57F17", desc: "Manage blood sugar effectively. Learn about Type 1, Type 2, and gestational diabetes care.", tips: ["Monitor blood glucose", "Balanced carb intake", "Regular foot checks"] },
  { name: "Eye Health", slug: "eye-health", accent: "#00838F", desc: "Protect your vision for life. From myopia to glaucoma, stay informed about eye conditions.", tips: ["Annual eye exams", "UV-protective eyewear", "Screen time breaks (20-20-20)"] },
  { name: "Sleep Disorders", slug: "sleep-disorders", accent: "#4527A0", desc: "Poor sleep affects every aspect of health. Explore causes of insomnia, sleep apnea, and remedies.", tips: ["Consistent sleep schedule", "Limit caffeine after 2PM", "Dark, cool bedroom"] },
  { name: "Hypertension", slug: "hypertension", accent: "#C62828", desc: "High blood pressure is the 'silent killer'. Learn how to monitor, manage, and reduce your risk.", tips: ["Reduce sodium intake", "Exercise regularly", "Monitor at home"] },
  { name: "Asthma", slug: "asthma", accent: "#0277BD", desc: "A chronic respiratory condition affecting millions. Understand triggers and how to breathe easier.", tips: ["Know your triggers", "Carry your inhaler", "Avoid smoke exposure"] },
  { name: "Thyroid Disease", slug: "thyroid-disease", accent: "#6A1B9A", desc: "Thyroid disorders affect metabolism, energy, and mood. Learn the signs of hypo and hyperthyroidism.", tips: ["Regular TSH testing", "Avoid iodine excess", "Take meds consistently"] },
  { name: "Kidney Disease", slug: "kidney-disease", accent: "#00695C", desc: "Chronic kidney disease affects 1 in 10 people globally. Early detection is key to slowing progression.", tips: ["Limit salt & protein", "Stay hydrated", "Control blood pressure"] },
  { name: "Liver Disease", slug: "liver-disease", accent: "#E65100", desc: "From fatty liver to hepatitis — understand what harms your liver and how to protect it.", tips: ["Limit alcohol", "Get hepatitis B vaccine", "Maintain healthy weight"] },
  { name: "Osteoporosis", slug: "osteoporosis", accent: "#5D4037", desc: "Bone loss often has no symptoms until a fracture occurs. Learn prevention and treatment strategies.", tips: ["Calcium & Vitamin D", "Weight-bearing exercise", "Avoid smoking"] },
  { name: "PCOS", slug: "pcos", accent: "#AD1457", desc: "Polycystic ovary syndrome affects 1 in 10 women. Understand symptoms, fertility, and management.", tips: ["Track your cycle", "Low-GI diet helps", "Regular OB-GYN visits"] },
  { name: "Dengue Fever", slug: "dengue-fever", accent: "#F9A825", desc: "A major public health concern in the Philippines. Learn prevention, symptoms, and when to seek care.", tips: ["Eliminate standing water", "Use mosquito repellent", "Watch for warning signs"] },
];

const conditionContent = {
  "breast-cancer": { name: "Breast Cancer", intro: "Breast cancer is one of the most common cancers affecting women globally. Early detection through regular screening dramatically improves survival rates.", sections: [{ heading: "What is Breast Cancer?", body: "Breast cancer occurs when cells in the breast grow uncontrollably. It can begin in different parts of the breast — the lobules, ducts, or connective tissue." }, { heading: "Warning Signs", body: "A new lump, thickening or swelling, skin irritation or dimpling, breast or nipple pain, nipple retraction, redness or flaky skin, or any discharge other than breast milk." }, { heading: "Screening & Detection", body: "Monthly breast self-exams, clinical breast exams by a doctor annually, and mammograms starting at age 40 (or earlier with family history) are key detection tools." }, { heading: "Treatment Options", body: "Treatment may include surgery (lumpectomy or mastectomy), radiation, chemotherapy, hormone therapy, and targeted therapy — often in combination." }] },
  "depression": { name: "Depression", intro: "Depression is more than just feeling sad. It is a serious medical condition that affects how you feel, think, and handle daily activities.", sections: [{ heading: "Types of Depression", body: "Major depressive disorder, persistent depressive disorder (dysthymia), postpartum depression, seasonal affective disorder (SAD), and bipolar disorder all involve depressive episodes." }, { heading: "Recognizing Symptoms", body: "Persistent sadness, hopelessness, loss of interest in activities, fatigue, changes in appetite or sleep, difficulty concentrating, and in severe cases, thoughts of death or suicide." }, { heading: "Treatment Approaches", body: "Depression is very treatable. Options include psychotherapy (especially CBT), antidepressant medications, lifestyle changes, and in some cases, brain stimulation therapies." }, { heading: "Self-Care & Support", body: "Regular exercise, adequate sleep, healthy eating, social connection, and mindfulness practices all support recovery alongside professional treatment." }] },
  "diabetes": { name: "Diabetes", intro: "Diabetes is a chronic condition affecting how your body processes blood sugar. With proper management, people with diabetes can live long, full lives.", sections: [{ heading: "Types of Diabetes", body: "Type 1: autoimmune, lifelong insulin dependence. Type 2: most common, often lifestyle-related. Gestational: during pregnancy. Pre-diabetes: blood sugar higher than normal but not yet diabetic range." }, { heading: "Common Symptoms", body: "Frequent urination, excessive thirst, unexplained weight loss, fatigue, blurred vision, slow-healing wounds, and frequent infections." }, { heading: "Managing Your Diabetes", body: "Monitor blood glucose regularly, take medications as prescribed, eat a balanced low-GI diet, exercise consistently, attend regular medical check-ups, and check your feet daily." }, { heading: "Complications to Prevent", body: "Uncontrolled diabetes can lead to nerve damage, kidney disease, eye problems, and cardiovascular disease. Consistent management dramatically reduces these risks." }] },
};
const genericConditionContent = (c) => ({
  name: c.name,
  intro: c.desc,
  sections: [
    { heading: "Overview", body: `${c.name} is a condition that requires proper understanding and management. With the right knowledge and medical support, its impact on daily life can be significantly reduced.` },
    { heading: "Key Symptoms", body: "Symptoms vary by condition and individual. Early recognition of warning signs leads to faster diagnosis and better treatment outcomes. Always consult your doctor if you notice persistent changes." },
    { heading: "Prevention & Management", body: c.tips.map(t => `• ${t}`).join("\n") },
    { heading: "When to Seek Help", body: "Do not self-diagnose or self-medicate. Consult a licensed physician for proper diagnosis, treatment planning, and follow-up care tailored to your situation." },
  ]
});

const stories = [
  { name: "Maria Santos", age: 42, location: "Cebu City", condition: "Breast Cancer Survivor", quote: "My lola always said our health is our greatest wealth. After my diagnosis, those words became my anchor.", story: "Diagnosed at 39 after a routine self-exam, Maria underwent surgery and chemotherapy. Three years later, she runs a support group in Cebu and advocates for early screening.", accent: "#D63384", duration: "3 years cancer-free" },
  { name: "Juan dela Cruz", age: 55, location: "Manila", condition: "Heart Disease Recovery", quote: "My first heart attack at 50 was a wake-up call. I had to completely rethink how I lived.", story: "After bypass surgery, Juan worked with cardiologists and nutritionists to transform his lifestyle. He lost 30 pounds and now mentors other heart patients at Philippine Heart Center.", accent: "#1565C0", duration: "5 years strong" },
  { name: "Liza Reyes", age: 34, location: "Davao City", condition: "Type 2 Diabetes Reversal", quote: "Doctors said I'd be on medication forever. Proper nutrition and exercise proved otherwise.", story: "Through a plant-forward diet guided by her endocrinologist and daily walks, Liza brought her HbA1c from 9.2 to 5.4 within 18 months — completely off medication.", accent: "#F57F17", duration: "Off meds 2 years" },
  { name: "Eduardo Tan", age: 61, location: "Quezon City", condition: "Stroke Rehabilitation", quote: "Stroke took my left side. Stubbornness and therapy gave it back.", story: "After a massive ischemic stroke, Eduardo spent 8 months in intensive physical and speech therapy. He walks independently today and returned to his teaching job at UP.", accent: "#2E7D32", duration: "Full recovery achieved" },
];

const eatTips = [
  { title: "Go Leafy & Green", tip: "Malunggay (moringa), kangkong, and pechay are packed with iron and vitamins. Aim for 2–3 cups of leafy greens daily." },
  { title: "Choose Local Fish", tip: "Bangus, tilapia, and galunggong are rich in omega-3s. Grill or steam instead of fry — twice a week is ideal." },
  { title: "Smart Rice Swaps", tip: "Try brown rice, red rice, or cauliflower rice to lower glycemic load. Even mixing 50/50 with white rice makes a big difference." },
  { title: "Eat Seasonal Fruits", tip: "Mangoes, papaya, and calamansi are local superfoods. Rich in Vitamin C, fiber, and antioxidants. Skip the juice — eat the whole fruit." },
  { title: "Hydrate Properly", tip: "8–10 glasses of water daily supports every organ. Buko juice is a natural electrolyte drink when you need hydration after exercise." },
  { title: "Protein at Every Meal", tip: "Eggs, tofu, and legumes like monggo are affordable complete proteins. They keep you full and support muscle health." },
];

const didYouKnow = [
  { fact: "Malunggay leaves have more Vitamin C than oranges and more calcium than milk — it's the original Filipino superfood." },
  { fact: "Eating slowly reduces calorie intake by up to 10% because it gives your brain time to register fullness." },
  { fact: "Drinking water before meals can reduce calorie consumption by 75–90 calories per meal." },
  { fact: "Brown rice has 3x more fiber than white rice, helping regulate blood sugar and improve digestion." },
  { fact: "Calamansi juice is rich in Vitamin C and can boost immunity, improve skin, and aid in iron absorption." },
  { fact: "Fermented foods like suka-based sawsawan support gut health by introducing beneficial probiotics." },
  { fact: "Papaya contains papain, an enzyme that helps break down proteins and ease digestive discomfort." },
  { fact: "Eating legumes like monggo 4 times a week can lower heart disease risk by up to 22%." },
  { fact: "Coconut oil has medium-chain triglycerides (MCTs) that are metabolized differently — supporting energy without being stored as fat." },
  { fact: "Fresh turmeric root, common in Filipino cooking, contains curcumin — a powerful anti-inflammatory compound." },
];

const expertVideos = [
  { title: "Understanding High Blood Pressure", channel: "Philippine Heart Center", duration: "12:34", videoId: "8JDuBDIy4C4", topic: "Cardiology", thumb: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&q=80" },
  { title: "Diabetes Management for Filipinos", channel: "PhilippineDocTok", duration: "18:22", videoId: "JQNYsoiaHqw", topic: "Endocrinology", thumb: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=80" },
  { title: "Mental Health Awareness in PH", channel: "NCMH Philippines", duration: "24:10", videoId: "A0eHbpfiBug", topic: "Psychiatry", thumb: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=400&q=80" },
  { title: "Proper Nutrition for Seniors", channel: "DOH Philippines", duration: "15:45", videoId: "uDvN2nPkq2Q", topic: "Nutrition", thumb: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
];

const medtokVideos = [
  { title: "Signs You Need to See a Doctor NOW", channel: "@docpauloMD", videoId: "dQw4w9WgXcQ", views: "1.2M" },
  { title: "5 Foods That Destroy Your Liver", channel: "@filipinodoc", videoId: "dQw4w9WgXcQ", views: "890K" },
  { title: "Why Filipinos Get Diabetes More", channel: "@healthPH", videoId: "dQw4w9WgXcQ", views: "2.1M" },
  { title: "Daily Habits That Age You Faster", channel: "@drmarieRN", videoId: "dQw4w9WgXcQ", views: "540K" },
  { title: "How Much Sleep Do You Really Need?", channel: "@sleepMDph", videoId: "dQw4w9WgXcQ", views: "670K" },
  { title: "Salt vs Sugar — Which is Worse?", channel: "@cardioMD_ph", videoId: "dQw4w9WgXcQ", views: "1.4M" },
  { title: "The Truth About Cooking Oil in PH", channel: "@nutritionistPH", videoId: "dQw4w9WgXcQ", views: "980K" },
  { title: "Eye Strain from Gadgets — How to Fix", channel: "@eyecarePH", videoId: "dQw4w9WgXcQ", views: "430K" },
];

const faqData = [
  { q: "Is the health information on Healthy Knows medically accurate?", a: "All content on Healthy Knows is reviewed by licensed physicians and health professionals before publication. We follow evidence-based guidelines from recognized medical bodies such as the DOH, WHO, and major medical associations. However, our content is for educational purposes only and does not replace professional medical advice." },
  { q: "Can I use the tools here to replace a doctor's diagnosis?", a: "No. Our calculators and health tools — such as the BMI calculator, water intake estimator, and calorie estimator — are informational tools only. They are not diagnostic instruments. Always consult a licensed physician for medical concerns, diagnosis, and treatment plans." },
  { q: "How often is the content updated?", a: "Our editorial team reviews and updates health guides regularly to reflect the latest medical guidelines and research. Major health topics are reviewed at minimum once per year, while breaking health news and updates are covered more frequently." },
  { q: "Who writes the content on Healthy Knows?", a: "Content is written by trained health writers and reviewed by medical professionals with relevant specializations. Each article indicates whether it has been medically reviewed. We are committed to transparency in our editorial process." },
  { q: "Is Healthy Knows only for Filipinos?", a: "While our content is designed with Filipino and Asian health contexts in mind — including culturally relevant food tips, local health statistics, and Filipino patient stories — the medical information is universally applicable and useful for anyone seeking health education." },
  { q: "How do I know if I should go to the ER or wait for a clinic appointment?", a: "Seek emergency care immediately for symptoms like chest pain, difficulty breathing, sudden numbness or weakness, confusion, severe allergic reactions, or heavy uncontrolled bleeding. For non-urgent symptoms that persist or worry you, schedule a clinic appointment. When in doubt, call your doctor or the nearest hospital for guidance." },
  { q: "Does Healthy Knows collect my personal health data?", a: "The health calculators on our site run entirely in your browser and do not store or transmit your personal data to our servers. We do not collect health metrics from tool usage. Please review our Privacy Policy for full details on what data we do collect during general site usage." },
  { q: "Can I share Healthy Knows articles with my family?", a: "Absolutely! We encourage you to share our content with family and friends. Health literacy benefits everyone. You can share individual articles, tools, or the full site. For clinical or educational use, please review our Terms of Use for proper attribution guidelines." },
];

// ─── STATIC MODAL CONTENT ───────────────────────────────
const staticModalContent = {
  about: {
    title: "About Healthy Knows",
    body: `Healthy Knows is a Filipino-founded digital health education platform dedicated to making trusted, medically reviewed health information accessible to Filipino and Asian communities worldwide.

We believe that health literacy is a fundamental right — not a privilege. Too often, Filipinos face health challenges exacerbated by lack of information, language barriers, and cultural gaps in medical content. Healthy Knows was created to bridge that gap.

Our Mission
To provide clear, accurate, and culturally relevant medical information that empowers individuals and families to make informed health decisions.

Our Values
• Accuracy — Every piece of content is grounded in evidence-based medicine.
• Accessibility — We write in plain language, avoiding jargon.
• Cultural Relevance — We understand Filipino diets, lifestyles, and health contexts.
• Trust — We are transparent about our editorial process and limitations.

Our Team
Our team consists of Filipino and Asian health writers, editors, and medical reviewers with expertise across cardiology, endocrinology, psychiatry, nutrition, and general medicine.

Disclaimer
Healthy Knows is for educational purposes only. It does not provide medical diagnosis, treatment, or professional advice. Always consult a licensed healthcare provider for medical concerns.`,
  },
  privacy: {
    title: "Privacy Policy",
    body: `Last updated: January 2025

1. Information We Collect
When you use Healthy Knows, we may collect non-personal usage data such as pages visited, time spent on the site, and device type for analytics purposes. Our health calculators run entirely in your browser — no health data is transmitted to or stored on our servers.

2. Cookies
We use cookies to improve your experience, remember your preferences (such as dark/light mode), and analyze site traffic through anonymized analytics. You may disable cookies through your browser settings.

3. Third-Party Services
We may use third-party services such as analytics providers. These services have their own privacy policies and we encourage you to review them.

4. Your Health Data
We do not collect, store, or share any data entered into our health tools (BMI calculator, water intake estimator, calorie estimator). All calculations happen locally in your browser.

5. Children's Privacy
Healthy Knows does not knowingly collect data from individuals under 13. Our content is intended for general audiences seeking health education.

6. Changes to This Policy
We may update this Privacy Policy from time to time. We will notify users of significant changes by posting a notice on our homepage.

7. Contact
For privacy-related concerns, please reach out through our official contact channels listed on the site.`,
  },
  terms: {
    title: "Terms of Use",
    body: `Last updated: January 2025

1. Acceptance of Terms
By accessing and using Healthy Knows, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.

2. Educational Purpose Only
All content on Healthy Knows — including articles, guides, videos, and health tools — is provided for informational and educational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition.

3. No Doctor-Patient Relationship
Use of this site does not create a doctor-patient relationship between you and Healthy Knows or any of our medical reviewers.

4. Emergency Situations
If you are experiencing a medical emergency, call emergency services (911 or local equivalent) immediately. Do not rely on this website for emergency medical guidance.

5. Accuracy of Information
While we strive for accuracy, medical knowledge evolves. We cannot guarantee that all information is current or error-free. Information on this site should not replace consultation with qualified healthcare professionals.

6. Intellectual Property
All content, design, and branding on Healthy Knows is the property of Healthy Knows and may not be reproduced without written permission, except for personal, non-commercial educational use.

7. Limitation of Liability
Healthy Knows shall not be liable for any direct, indirect, or consequential damages arising from your use of this site or reliance on its content.`,
  },
  editorial: {
    title: "Editorial Policy",
    body: `Healthy Knows is committed to providing accurate, balanced, and trustworthy health information. This policy describes how we create, review, and maintain our content.

Content Creation Standards
• All articles are written by trained health writers with backgrounds in medicine, nursing, nutrition, or public health.
• We use plain, accessible language while maintaining medical accuracy.
• Content is based on peer-reviewed research, clinical guidelines, and reputable health organizations including the DOH, WHO, and the Philippine Medical Association.

Medical Review Process
• Health articles are reviewed by licensed physicians or relevant medical specialists before publication.
• Reviewers' credentials are verified, and reviewer names may be listed on articles where applicable.
• Our reviewers are independent; they are not compensated based on the content of their reviews.

Updating Content
• Major health guides are reviewed at least once per year.
• Articles are updated when significant new guidelines or research emerges.
• Outdated information is corrected promptly when identified.

Corrections Policy
• We correct factual errors as quickly as possible upon discovery.
• Significant corrections are noted within the article.

Advertising & Sponsorship Independence
• Editorial content is entirely independent of advertising or sponsorship.
• We do not accept payment to include, exclude, or modify health information.
• Any sponsored content is clearly labeled as such and does not influence our editorial decisions.

Feedback
We welcome feedback from readers and healthcare professionals. If you believe any content is inaccurate or misleading, please contact our editorial team.`,
  },
};

const navLinks = ["Health Topics", "Conditions", "Nutrition", "Tools", "Expert Videos", "Stories"];
const navIds   = ["topics",        "conditions", "nutrition", "tools", "videos",         "stories"];

// ─── MODAL ───────────────────────────────────────────────
function Modal({ title, children, onClose, visible, modalC = LIGHT }) {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      const onKey = (e) => { if (e.key === "Escape") onClose(); };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [visible, onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9000,
        background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px", overflowY: "auto",
        opacity: visible ? 1 : 0, pointerEvents: visible ? "all" : "none",
        transition: "opacity 0.25s ease",
      }}
    >
      <div
        className="hk-modal-inner"
        onClick={e => e.stopPropagation()}
        style={{
          background: modalC.cardBg, borderRadius: 20, width: "100%", maxWidth: 720,
          maxHeight: "90vh", overflowY: "auto", overflowX: "hidden",
          boxShadow: "0 40px 80px rgba(0,0,0,0.35)",
          transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
          transition: "transform 0.3s cubic-bezier(.34,1.56,.64,1), opacity 0.25s ease",
          opacity: visible ? 1 : 0,
          scrollbarWidth: "thin",
          scrollbarColor: `${modalC.border} transparent`,
        }}
      >
        <div style={{
          position: "sticky", top: 0, background: modalC.cardBg,
          padding: "20px 24px 16px", borderBottom: `1px solid ${modalC.border}`,
          display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1
        }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(18px,3vw,24px)", fontWeight: 700, color: modalC.navy, margin: 0 }}>{title}</h2>
          <button onClick={onClose} style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${modalC.border}`, background: modalC.cardBg, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, color: modalC.muted }}>
            <XIcon />
          </button>
        </div>
        <div style={{ padding: "24px" }}>{children}</div>
      </div>
    </div>
  );
}

// ─── TOPIC MODAL CONTENT ─────────────────────────────────
function TopicModalContent({ slug, C }) {
  const content = topicContent[slug] || genericTopicContent(topics.find(t => t.slug === slug)?.label || slug);
  return (
    <div>
      <img src={topicImages[content.label]} alt={content.label} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 12, marginBottom: 20 }} />
      <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.75, marginBottom: 24 }}>{content.intro}</p>
      {content.sections.map((s, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{s.heading}</h3>
          <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, whiteSpace: "pre-line" }}>{s.body}</p>
        </div>
      ))}
      <div style={{ marginTop: 24, padding: "16px", background: `${C.teal}10`, borderRadius: 12, border: `1px solid ${C.teal}25` }}>
        <p style={{ fontSize: 13, color: C.teal, fontWeight: 600, margin: 0 }}>Always consult a licensed physician before making any changes to your health routine. This content is for educational purposes only.</p>
      </div>
    </div>
  );
}

// ─── CONDITION MODAL CONTENT ─────────────────────────────
function ConditionModalContent({ condition, C }) {
  const content = conditionContent[condition.slug] || genericConditionContent(condition);
  return (
    <div>
      <img src={conditionImages[condition.name]} alt={condition.name} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 12, marginBottom: 20 }} />
      <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.75, marginBottom: 24 }}>{content.intro}</p>
      {content.sections.map((s, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{s.heading}</h3>
          <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, whiteSpace: "pre-line" }}>{s.body}</p>
        </div>
      ))}
      <div style={{ marginTop: 24, padding: "16px", background: `${C.coral}10`, borderRadius: 12, border: `1px solid ${C.coral}25` }}>
        <p style={{ fontSize: 13, color: C.coral, fontWeight: 600, margin: 0 }}>This is for informational purposes only and does not replace professional medical advice. Consult your doctor for diagnosis and treatment.</p>
      </div>
    </div>
  );
}

// ─── STATIC MODAL CONTENT RENDERER ──────────────────────
function StaticModalContent({ content, C }) {
  const lines = content.body.split("\n");
  return (
    <div>
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} style={{ height: 10 }} />;
        if (line.match(/^\d+\./)) return <p key={i} style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, marginBottom: 8, fontWeight: 600 }}>{line}</p>;
        if (line.startsWith("•")) return <p key={i} style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, marginBottom: 5, paddingLeft: 12 }}>{line}</p>;
        if (line.length < 50 && !line.includes(".") && i > 0) return <h3 key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: C.navy, marginTop: 20, marginBottom: 8 }}>{line}</h3>;
        return <p key={i} style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, marginBottom: 8 }}>{line}</p>;
      })}
    </div>
  );
}

// ─── BMI CALCULATOR ──────────────────────────────────────
function BMICalculator({ C }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [unit, setUnit] = useState("metric");
  const calc = () => {
    let b;
    if (unit === "metric") { const h = parseFloat(height)/100, w = parseFloat(weight); if (!h||!w) return; b = w/(h*h); }
    else { const h = parseFloat(height), w = parseFloat(weight); if (!h||!w) return; b = (703*w)/(h*h); }
    setBmi(b.toFixed(1));
  };
  const getCategory = (b) => {
    if (b < 18.5) return { label: "Underweight", color: "#1565C0", bg: "#E8F4FF" };
    if (b < 25) return { label: "Normal weight", color: "#2E7D32", bg: "#E8F5E9" };
    if (b < 30) return { label: "Overweight", color: "#F57F17", bg: "#FFF8E1" };
    return { label: "Obese", color: "#D32F2F", bg: "#FFEBEE" };
  };
  const cat = bmi ? getCategory(parseFloat(bmi)) : null;
  return (
    <div style={{ background: C.cardBg, borderRadius: 16, padding: "24px", border: `1px solid ${C.border}`, boxShadow: "0 4px 24px rgba(11,37,69,0.08)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.teal}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        </div>
        <div><h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:19, color:C.navy, margin:0 }}>BMI Calculator</h3><p style={{ fontSize:12, color:C.muted, margin:0 }}>Body Mass Index</p></div>
      </div>
      <div style={{ display:"flex", gap:8, marginBottom:14 }}>
        {["metric","imperial"].map(u => <button key={u} onClick={() => { setUnit(u); setBmi(null); }} style={{ flex:1, padding:"8px", borderRadius:8, border:`2px solid ${unit===u?C.teal:C.border}`, background:unit===u?C.teal:C.cardBg, color:unit===u?C.white:C.muted, fontSize:13, fontWeight:600, cursor:"pointer", transition:"all .2s" }}>{u==="metric"?"Metric (cm/kg)":"Imperial (in/lbs)"}</button>)}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
        <div><label style={{ fontSize:12, fontWeight:600, color:C.navy, display:"block", marginBottom:4 }}>Height ({unit==="metric"?"cm":"inches"})</label><input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder={unit==="metric"?"e.g. 165":"e.g. 65"} style={{ width:"100%", padding:"10px 14px", borderRadius:8, border:`1px solid ${C.inputBorder}`, fontSize:14, color:C.text, outline:"none", boxSizing:"border-box", background:C.inputBg }} /></div>
        <div><label style={{ fontSize:12, fontWeight:600, color:C.navy, display:"block", marginBottom:4 }}>Weight ({unit==="metric"?"kg":"lbs"})</label><input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder={unit==="metric"?"e.g. 60":"e.g. 132"} style={{ width:"100%", padding:"10px 14px", borderRadius:8, border:`1px solid ${C.inputBorder}`, fontSize:14, color:C.text, outline:"none", boxSizing:"border-box", background:C.inputBg }} /></div>
        <button onClick={calc} style={{ width:"100%", padding:"12px", borderRadius:10, border:"none", background:`linear-gradient(135deg, ${C.teal}, ${C.tealLight})`, color:"#fff", fontSize:15, fontWeight:700, cursor:"pointer" }}>Calculate BMI</button>
        {bmi && cat && (
          <div style={{ padding:"16px", borderRadius:12, background:cat.bg, border:`1px solid ${cat.color}30`, textAlign:"center", animation:"popIn .35s cubic-bezier(.34,1.56,.64,1)" }}>
            <div style={{ fontSize:40, fontWeight:900, color:cat.color, fontFamily:"'Playfair Display',serif", lineHeight:1 }}>{bmi}</div>
            <div style={{ fontSize:14, fontWeight:700, color:cat.color, marginTop:4 }}>{cat.label}</div>
            <div style={{ fontSize:11, color:"#6B7280", marginTop:4 }}>Normal range: 18.5 – 24.9</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── WATER CALCULATOR ────────────────────────────────────
function WaterCalculator({ C }) {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("light");
  const [result, setResult] = useState(null);
  const calc = () => { const w=parseFloat(weight); if (!w) return; const base=w*0.033; const extra=activity==="light"?0:activity==="moderate"?0.5:1.0; setResult((base+extra).toFixed(1)); };
  return (
    <div style={{ background:C.cardBg, borderRadius:16, padding:"24px", border:`1px solid ${C.border}`, boxShadow:"0 4px 24px rgba(11,37,69,0.08)" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
        <div style={{ width:44, height:44, borderRadius:12, background:"#E0F7FA", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00838F" strokeWidth="2" strokeLinecap="round"><path d="M12 2C6 8 4 13 4 16a8 8 0 0 0 16 0c0-3-2-8-8-14z"/></svg>
        </div>
        <div><h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:19, color:C.navy, margin:0 }}>Water Intake</h3><p style={{ fontSize:12, color:C.muted, margin:0 }}>Hydration Calculator</p></div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
        <div><label style={{ fontSize:12, fontWeight:600, color:C.navy, display:"block", marginBottom:4 }}>Weight (kg)</label><input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="e.g. 60" style={{ width:"100%", padding:"10px 14px", borderRadius:8, border:`1px solid ${C.inputBorder}`, fontSize:14, outline:"none", boxSizing:"border-box", background:C.inputBg, color:C.text }} /></div>
        <div><label style={{ fontSize:12, fontWeight:600, color:C.navy, display:"block", marginBottom:4 }}>Activity Level</label><select value={activity} onChange={e=>setActivity(e.target.value)} style={{ width:"100%", padding:"10px 14px", borderRadius:8, border:`1px solid ${C.inputBorder}`, fontSize:14, outline:"none", background:C.inputBg, color:C.text }}><option value="light">Light (mostly sedentary)</option><option value="moderate">Moderate (exercise 3x/week)</option><option value="active">Active (exercise daily)</option></select></div>
        <button onClick={calc} style={{ width:"100%", padding:"12px", borderRadius:10, border:"none", background:"linear-gradient(135deg, #1565C0, #1976D2)", color:"#fff", fontSize:15, fontWeight:700, cursor:"pointer" }}>Calculate</button>
        {result && (
          <div style={{ padding:"16px", borderRadius:12, background:"#E0F7FA", border:"1px solid #00838F30", textAlign:"center", animation:"popIn .35s cubic-bezier(.34,1.56,.64,1)" }}>
            <div style={{ fontSize:40, fontWeight:900, color:"#00838F", fontFamily:"'Playfair Display',serif", lineHeight:1 }}>{result}L</div>
            <div style={{ fontSize:14, fontWeight:700, color:"#00838F", marginTop:4 }}>Recommended daily intake</div>
            <div style={{ fontSize:11, color:"#6B7280", marginTop:4 }}>≈ {Math.round(result/0.25)} glasses of water</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── CALORIE ESTIMATOR ───────────────────────────────────
function CalorieEstimator({ C }) {
  const [age,setAge]=useState(""); const [gender,setGender]=useState("female"); const [height,setHeight]=useState(""); const [weight,setWeight]=useState(""); const [activity,setActivity]=useState("sedentary"); const [result,setResult]=useState(null);
  const calc = () => { const a=parseFloat(age),h=parseFloat(height),w=parseFloat(weight); if (!a||!h||!w) return; let bmr=gender==="male"?10*w+6.25*h-5*a+5:10*w+6.25*h-5*a-161; const m={sedentary:1.2,light:1.375,moderate:1.55,active:1.725}; const tdee=bmr*m[activity]; setResult({ maintain:Math.round(tdee), lose:Math.round(tdee-500), gain:Math.round(tdee+300) }); };
  return (
    <div style={{ background:C.cardBg, borderRadius:16, padding:"24px", border:`1px solid ${C.border}`, boxShadow:"0 4px 24px rgba(11,37,69,0.08)" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
        <div style={{ width:44, height:44, borderRadius:12, background:"#FDE8F0", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D63384" strokeWidth="2" strokeLinecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
        </div>
        <div><h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:19, color:C.navy, margin:0 }}>Calorie Estimator</h3><p style={{ fontSize:12, color:C.muted, margin:0 }}>Daily calorie needs (TDEE)</p></div>
      </div>
      <div style={{ display:"flex", gap:8, marginBottom:12 }}>
        {["female","male"].map(g=><button key={g} onClick={()=>setGender(g)} style={{ flex:1, padding:"8px", borderRadius:8, border:`2px solid ${gender===g?C.coral:C.border}`, background:gender===g?C.coral:C.cardBg, color:gender===g?"#fff":C.muted, fontSize:13, fontWeight:600, cursor:"pointer", transition:"all .2s", textTransform:"capitalize" }}>{g==="female"?"Female":"Male"}</button>)}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
          <div><label style={{ fontSize:12, fontWeight:600, color:C.navy, display:"block", marginBottom:4 }}>Age</label><input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="e.g. 30" style={{ width:"100%", padding:"10px 14px", borderRadius:8, border:`1px solid ${C.inputBorder}`, fontSize:14, outline:"none", boxSizing:"border-box", background:C.inputBg, color:C.text }} /></div>
          <div><label style={{ fontSize:12, fontWeight:600, color:C.navy, display:"block", marginBottom:4 }}>Weight (kg)</label><input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="e.g. 60" style={{ width:"100%", padding:"10px 14px", borderRadius:8, border:`1px solid ${C.inputBorder}`, fontSize:14, outline:"none", boxSizing:"border-box", background:C.inputBg, color:C.text }} /></div>
        </div>
        <div><label style={{ fontSize:12, fontWeight:600, color:C.navy, display:"block", marginBottom:4 }}>Height (cm)</label><input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="e.g. 160" style={{ width:"100%", padding:"10px 14px", borderRadius:8, border:`1px solid ${C.inputBorder}`, fontSize:14, outline:"none", boxSizing:"border-box", background:C.inputBg, color:C.text }} /></div>
        <div><label style={{ fontSize:12, fontWeight:600, color:C.navy, display:"block", marginBottom:4 }}>Activity Level</label><select value={activity} onChange={e=>setActivity(e.target.value)} style={{ width:"100%", padding:"10px 14px", borderRadius:8, border:`1px solid ${C.inputBorder}`, fontSize:14, outline:"none", background:C.inputBg, color:C.text }}><option value="sedentary">Sedentary (desk job)</option><option value="light">Light (1–3x/week)</option><option value="moderate">Moderate (3–5x/week)</option><option value="active">Active (6–7x/week)</option></select></div>
        <button onClick={calc} style={{ width:"100%", padding:"12px", borderRadius:10, border:"none", background:`linear-gradient(135deg, ${C.coral}, #F97054)`, color:"#fff", fontSize:15, fontWeight:700, cursor:"pointer" }}>Estimate Calories</button>
        {result && (
          <div style={{ borderRadius:12, overflow:"hidden", border:"1px solid #D6338420", animation:"popIn .35s cubic-bezier(.34,1.56,.64,1)" }}>
            {[["Maintain Weight",result.maintain,"#2E7D32","#E8F5E9"],["Lose Weight (–500 cal)",result.lose,"#1565C0","#E8F4FF"],["Gain Weight (+300 cal)",result.gain,"#D63384","#FDE8F0"]].map(([label,val,color,bg])=>(
              <div key={label} style={{ padding:"10px 14px", background:bg, borderBottom:"1px solid rgba(0,0,0,0.05)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:12, color:"#6B7280" }}>{label}</span>
                <span style={{ fontWeight:800, color, fontSize:15 }}>{val} <span style={{ fontSize:11, fontWeight:500 }}>kcal/day</span></span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── FAQ ACCORDION ───────────────────────────────────────
function FAQSection({ C }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section id="faq" style={{ background: C.cream }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ display:"inline-block", background:`${C.teal}15`, color:C.teal, fontSize:11, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", padding:"5px 14px", borderRadius:20, marginBottom:10 }}>FAQ</span>
          <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(26px,4vw,38px)", fontWeight:700, color:C.navy, margin:"0 0 8px", lineHeight:1.2, textAlign:"center" }}>Frequently Asked Questions</h2>
          <p style={{ color:C.muted, fontSize:15, lineHeight:1.6, margin:"0 auto", maxWidth:500, textAlign:"center" }}>Everything you need to know about using Healthy Knows.</p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {faqData.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                style={{
                  background: C.cardBg,
                  borderRadius: 16,
                  border: `1px solid ${isOpen ? C.teal : C.border}`,
                  overflow: "hidden",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                  boxShadow: isOpen ? `0 8px 32px ${C.teal}18` : "0 2px 8px rgba(11,37,69,0.05)",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 12,
                    padding: "18px 20px", background: "none", border: "none",
                    cursor: "pointer", textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: C.navy, lineHeight: 1.45, flex: 1 }}>{item.q}</span>
                  <span style={{
                    flexShrink: 0, color: C.teal,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s cubic-bezier(.34,1.56,.64,1)",
                    display: "flex",
                  }}>
                    <ChevronDown />
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(.4,0,.2,1)",
                }}>
                  <p style={{
                    margin: 0, padding: "0 20px 18px",
                    fontSize: 14, color: C.muted, lineHeight: 1.75
                  }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── USE INTERSECTION OBSERVER (for entrance animations) ─
function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.12, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return inView;
}

// ─── ANIMATED SECTION WRAPPER ────────────────────────────
function AnimSection({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...style
    }}>
      {children}
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────
export default function HealthyKnows() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("hk-theme");
    if (saved !== null) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const C = darkMode ? DARK : LIGHT;

  useEffect(() => {
    localStorage.setItem("hk-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      const saved = localStorage.getItem("hk-theme");
      if (!saved) setDarkMode(e.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [showMoreConditions, setShowMoreConditions] = useState(false);
  const [conditionsVisible, setConditionsVisible] = useState(false);
  const [showMoreVideos, setShowMoreVideos] = useState(false);
  const [medtokIdx, setMedtokIdx] = useState(0);
  const [didYouKnowIdx, setDidYouKnowIdx] = useState(0);
  const [hoveredStory, setHoveredStory] = useState(null);
  const [mediaModal, setMediaModal] = useState(null); // { type: 'youtube'|'tiktok', videoId, title }
  const [mediaModalVisible, setMediaModalVisible] = useState(false);

  const openMediaModal = (type, videoId, title) => {
    setMediaModal({ type, videoId, title });
    setTimeout(() => setMediaModalVisible(true), 10);
  };
  const closeMediaModal = () => {
    setMediaModalVisible(false);
    setTimeout(() => setMediaModal(null), 300);
  };
  const factRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Carousel state (fixed infinite loop)
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [carouselTransition, setCarouselTransition] = useState(true);
  const carouselAutoRef = useRef(null);
  const carouselLockRef = useRef(false);

  // Modal states
  const [topicModal, setTopicModal] = useState(null);
  const [conditionModal, setConditionModal] = useState(null);
  const [staticModal, setStaticModal] = useState(null); // 'about'|'privacy'|'terms'|'editorial'

  // Modal visibility (for animation)
  const [topicModalVisible, setTopicModalVisible] = useState(false);
  const [conditionModalVisible, setConditionModalVisible] = useState(false);
  const [staticModalVisible, setStaticModalVisible] = useState(false);

  useEffect(() => { const check = () => { setIsMobile(window.innerWidth < 640); setIsTablet(window.innerWidth < 1024); }; check(); window.addEventListener("resize", check); return () => window.removeEventListener("resize", check); }, []);
  useEffect(() => { const fn = () => { setScrolled(window.scrollY > 40); setShowBackToTop(window.scrollY > 400); }; window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; document.documentElement.style.overflow = ""; };
  }, [menuOpen]);
  useEffect(() => { factRef.current = setInterval(() => setDidYouKnowIdx(i => (i + 1) % didYouKnow.length), 20000); return () => clearInterval(factRef.current); }, []);

  // Modal open/close helpers with animation
  const openTopicModal = (slug) => { setTopicModal(slug); setTimeout(() => setTopicModalVisible(true), 10); };
  const closeTopicModal = () => { setTopicModalVisible(false); setTimeout(() => setTopicModal(null), 300); };
  const openConditionModal = (c) => { setConditionModal(c); setTimeout(() => setConditionModalVisible(true), 10); };
  const closeConditionModal = () => { setConditionModalVisible(false); setTimeout(() => setConditionModal(null), 300); };
  const openStaticModal = (key) => { setStaticModal(key); setTimeout(() => setStaticModalVisible(true), 10); };
  const closeStaticModal = () => { setStaticModalVisible(false); setTimeout(() => setStaticModal(null), 300); };

  const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  // ── INFINITE CAROUSEL (fixed) ──────────────────────────
  const visibleCards = isMobile ? 1 : isTablet ? 2 : 4;
  const total = topics.length;
  // We clone 1 set before and after for seamless looping
  const cloned = [...topics, ...topics, ...topics];
  const cloneOffset = total; // start in middle copy

  const startCarouselAuto = useCallback(() => {
    clearInterval(carouselAutoRef.current);
    carouselAutoRef.current = setInterval(() => {
      if (!carouselLockRef.current) {
        setCarouselTransition(true);
        setCarouselIdx(i => i + 1);
      }
    }, 3500);
  }, []);

  useEffect(() => { startCarouselAuto(); return () => clearInterval(carouselAutoRef.current); }, [startCarouselAuto]);

  // Silent jump to prevent infinite scroll
  useEffect(() => {
    if (!carouselTransition) return;
    const actualIdx = carouselIdx - cloneOffset;
    if (actualIdx >= total) {
      carouselLockRef.current = true;
      const t = setTimeout(() => {
        setCarouselTransition(false);
        setCarouselIdx(cloneOffset);
        setTimeout(() => { setCarouselTransition(true); carouselLockRef.current = false; }, 50);
      }, 480);
      return () => clearTimeout(t);
    }
    if (actualIdx < 0) {
      carouselLockRef.current = true;
      const t = setTimeout(() => {
        setCarouselTransition(false);
        setCarouselIdx(cloneOffset + total - 1);
        setTimeout(() => { setCarouselTransition(true); carouselLockRef.current = false; }, 50);
      }, 480);
      return () => clearTimeout(t);
    }
  }, [carouselIdx, carouselTransition, cloneOffset, total]);

  const scrollCarousel = (dir) => {
    if (carouselLockRef.current) return;
    clearInterval(carouselAutoRef.current);
    setCarouselTransition(true);
    setCarouselIdx(i => i + dir);
    startCarouselAuto();
  };

  const cardWidthPct = 100 / visibleCards;
  const translateX = -(carouselIdx * cardWidthPct);

  // MedTok carousel
  const medtokVisible = isMobile ? 1 : isTablet ? 2 : 4;
  const scrollMedtok = (dir) => {
    setMedtokIdx(i => {
      const next = i + dir;
      if (next < 0) return medtokVideos.length - medtokVisible;
      if (next > medtokVideos.length - medtokVisible) return 0;
      return next;
    });
  };

  const visibleConditions = showMoreConditions ? conditions : conditions.slice(0, 4);
  const activeTopicDot = ((carouselIdx - cloneOffset) % total + total) % total;

  const sectionTag = (text) => (
    <span style={{ display:"inline-block", background:`${C.teal}15`, color:C.teal, fontSize:11, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", padding:"5px 14px", borderRadius:20, marginBottom:10 }}>{text}</span>
  );
  const h2Style = { fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(26px,4vw,38px)", fontWeight:700, color:C.navy, margin:"0 0 8px", lineHeight:1.2 };

  return (
    <div style={{ fontFamily:"'DM Sans','Segoe UI',sans-serif", background:C.cream, color:C.text, minHeight:"100vh", transition:"background 0.35s, color 0.35s" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230E7C7B' d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'/%3E%3C/svg%3E" />

      {/* Loading Screen */}
      {loading && (
        <div style={{
          position:"fixed", inset:0, zIndex:99999,
          background:`linear-gradient(135deg, #0B2545 0%, #163a6e 55%, #0e5f5e 100%)`,
          display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
          gap:20,
          animation: loading ? "none" : "fadeOut 0.6s ease forwards",
        }}>
          <style>{`
            @keyframes heartbeat { 0%,100%{transform:scale(1)} 14%{transform:scale(1.18)} 28%{transform:scale(1)} 42%{transform:scale(1.12)} 70%{transform:scale(1)} }
            @keyframes fadeInLoader { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
            @keyframes spinArc { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
            @keyframes loaderFadeOut { 0%{opacity:1} 100%{opacity:0;pointer-events:none} }
          `}</style>
          <div style={{ animation:"heartbeat 1.4s ease infinite" }}>
            <div style={{ width:72, height:72, borderRadius:20, background:"linear-gradient(135deg, #0E7C7B, #14A5A3)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 40px rgba(14,124,123,0.6)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
          </div>
          <div style={{ textAlign:"center", animation:"fadeInLoader 0.6s 0.3s ease both", opacity:0 }}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:"#fff", letterSpacing:"-0.5px" }}>Healthy Knows</div>
            <div style={{ fontSize:11, color:"rgba(20,165,163,0.9)", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", marginTop:4 }}>Medical Information</div>
          </div>
          <div style={{ animation:"fadeInLoader 0.6s 0.6s ease both", opacity:0 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.12)" strokeWidth="3"/>
              <circle cx="20" cy="20" r="16" stroke="#14A5A3" strokeWidth="3" strokeLinecap="round" strokeDasharray="30 70" style={{ animation:"spinArc 1.2s linear infinite", transformOrigin:"center", transformBox:"fill-box" }}/>
            </svg>
          </div>
        </div>
      )}
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230E7C7B' d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'/%3E%3C/svg%3E" />

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; overflow-x: hidden; }
        button, input, select { font-family: inherit; }
        img { max-width: 100%; display: block; }

        @keyframes fadeInUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeInRight { from { opacity:0; transform:translateX(-28px); } to { opacity:1; transform:translateX(0); } }
        @keyframes popIn { from { opacity:0; transform:scale(0.88); } to { opacity:1; transform:scale(1); } }
        @keyframes slideInUp { from { opacity:0; transform:translateY(40px) scale(0.98); } to { opacity:1; transform:translateY(0) scale(1); } }
        @keyframes bounceIn { 0%{opacity:0;transform:scale(0.7)} 60%{opacity:1;transform:scale(1.08)} 80%{transform:scale(0.97)} 100%{transform:scale(1)} }

        .hk-nav-link { color:#6B7280; text-decoration:none; font-size:13px; font-weight:500; padding:7px 13px; border-radius:8px; transition:color 0.15s; }
        .hk-nav-link:hover { color:#14A5A3; }

        .hk-topic-card { display:block; border-radius:14px; overflow:hidden; box-shadow:0 2px 12px rgba(11,37,69,0.06); transition:transform 0.25s, box-shadow 0.25s; cursor:pointer; }
        .hk-topic-card:hover { transform:translateY(-5px) scale(1.02); box-shadow:0 18px 48px rgba(14,124,123,0.2); }

        .hk-cond-overlay { opacity:0; transition:opacity 0.35s ease; }
        .hk-cond-card:hover .hk-cond-overlay { opacity:1; }
        .hk-cond-card img { transition:filter 0.35s ease; }
        .hk-cond-card:hover img { filter:blur(3px) brightness(0.6); }

        .hk-story-img { transition:transform 0.4s ease; }
        .hk-story-card:hover .hk-story-img { transform:scale(1.07); }

        .hk-nutrition-card { transition:transform 0.2s, box-shadow 0.2s; }
        .hk-nutrition-card:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(14,124,123,0.12); }

        .hk-drawer {
          position:fixed; inset:0; z-index:200;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:0; padding:2rem 1.5rem; overflow-y:auto;
          animation:slideInUp 0.28s cubic-bezier(.22,1,.36,1);
        }
        .hk-drawer-link {
          display:block; width:100%; text-align:center; padding:1rem 0;
          font-size:1.4rem; font-family:'Playfair Display',Georgia,serif; font-weight:700;
          text-decoration:none; transition:color 0.15s;
          background:none; border:none; cursor:pointer;
        }

        .hk-conditions-expand { overflow:hidden; transition:max-height 0.55s cubic-bezier(.4,0,.2,1), opacity 0.4s ease; }
        .hk-conditions-expand.open { max-height:2000px; opacity:1; }
        .hk-conditions-expand.closed { max-height:0; opacity:0; }

        .hk-videos-expand { overflow:hidden; transition:max-height 0.6s cubic-bezier(.4,0,.2,1), opacity 0.45s ease; }
        .hk-videos-expand.open { max-height:3000px; opacity:1; }
        .hk-videos-expand.closed { max-height:0; opacity:0; }

        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:#FDF8F2; }
        ::-webkit-scrollbar-thumb { background:#E8E0D5; border-radius:4px; }

        /* Modal scrollbar — inside, not overlapping */
        .hk-modal-inner::-webkit-scrollbar { width:4px; }
        .hk-modal-inner::-webkit-scrollbar-track { background:transparent; }
        .hk-modal-inner::-webkit-scrollbar-thumb { background:rgba(0,0,0,0.15); border-radius:4px; }
        .hk-modal-inner { scrollbar-gutter:stable inside; }

        @media (max-width:639px) {
          .hk-tools-grid { grid-template-columns:1fr !important; }
          .hk-footer-grid { grid-template-columns:1fr !important; }
          .hk-nutrition-layout { grid-template-columns:1fr !important; }
          .hk-nutrition-grid { grid-template-columns:1fr 1fr !important; }
          .hk-video-grid { grid-template-columns:1fr 1fr !important; }
          .hk-conditions-grid { grid-template-columns:1fr 1fr !important; }
          .hk-stories-grid { grid-template-columns:1fr 1fr !important; }
        }
        @media (max-width:400px) {
          .hk-nutrition-grid { grid-template-columns:1fr !important; }
          .hk-conditions-grid { grid-template-columns:1fr !important; }
          .hk-stories-grid { grid-template-columns:1fr !important; }
        }
        @media (max-width:1023px) {
          .hk-nutrition-layout { grid-template-columns:1fr !important; }
          .hk-footer-grid { grid-template-columns:1fr 1fr !important; }
        }
      `}</style>

      {/* ── MODALS ── */}
      {topicModal && (
        <Modal title={topics.find(t=>t.slug===topicModal)?.label||"Health Topic"} onClose={closeTopicModal} visible={topicModalVisible} modalC={C}>
          <TopicModalContent slug={topicModal} C={C} />
        </Modal>
      )}
      {conditionModal && (
        <Modal title={conditionModal.name} onClose={closeConditionModal} visible={conditionModalVisible} modalC={C}>
          <ConditionModalContent condition={conditionModal} C={C} />
        </Modal>
      )}
      {staticModal && (
        <Modal title={staticModalContent[staticModal].title} onClose={closeStaticModal} visible={staticModalVisible} modalC={C}>
          <StaticModalContent content={staticModalContent[staticModal]} C={C} />
        </Modal>
      )}

      {/* Media Play Modal */}
      {mediaModal && (
        <div
          onClick={closeMediaModal}
          style={{
            position:"fixed", inset:0, zIndex:9500,
            background:"rgba(0,0,0,0.92)", backdropFilter:"blur(8px)",
            display:"flex", alignItems:"center", justifyContent:"center",
            padding:"20px",
            opacity:mediaModalVisible?1:0, pointerEvents:mediaModalVisible?"all":"none",
            transition:"opacity 0.25s ease",
          }}
        >
          <div onClick={e=>e.stopPropagation()} style={{ width:"100%", maxWidth:900, position:"relative" }}>
            <button
              onClick={closeMediaModal}
              style={{
                position:"absolute", top:-44, right:0,
                background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)",
                borderRadius:"50%", width:36, height:36,
                display:"flex", alignItems:"center", justifyContent:"center",
                cursor:"pointer", color:"#fff",
              }}
            ><XIcon /></button>
            <div style={{ fontFamily:"'Playfair Display',serif", color:"#fff", fontSize:16, fontWeight:700, marginBottom:14, paddingRight:48 }}>{mediaModal.title}</div>
            <div style={{
              borderRadius:16, overflow:"hidden",
              aspectRatio: mediaModal.type==="tiktok" ? "9/16" : "16/9",
              maxHeight: mediaModal.type==="tiktok" ? "80vh" : "auto",
              width: mediaModal.type==="tiktok" ? "auto" : "100%",
              margin:"0 auto",
              background:"#000",
              transform:mediaModalVisible?"scale(1) translateY(0)":"scale(0.94) translateY(20px)",
              transition:"transform 0.35s cubic-bezier(.34,1.56,.64,1)",
            }}>
              {mediaModal.type==="youtube" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${mediaModal.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={mediaModal.title}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  style={{ width:"100%", height:"100%", border:"none", display:"block", minHeight:400 }}
                />
              ) : (
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${mediaModal.videoId}`}
                  title={mediaModal.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ width:"100%", height:"100%", border:"none", display:"block", minHeight:600 }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE DRAWER ── */}
      {menuOpen && (
        <div className="hk-drawer" style={{ background: C.cream }}>
          <button onClick={() => setMenuOpen(false)} style={{ position:"absolute", top:18, right:18, background:"none", border:"none", cursor:"pointer", color:C.navy, padding:4, display:"flex" }}>
            <CloseIcon />
          </button>
          <div style={{ marginBottom:32 }}>
            <span style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:22, fontWeight:700, color:C.navy }}>Healthy Knows</span>
          </div>
          {navLinks.map((l,i) => (
            <button key={l} className="hk-drawer-link" onClick={() => scrollTo(navIds[i])} style={{ color:C.navy, borderBottom:i<navLinks.length-1?`1px solid ${C.border}`:"none" }}>{l}</button>
          ))}
        </div>
      )}

      {/* ── NAVBAR ── */}
      <nav style={{ background:scrolled?C.navBgScrolled:C.navBg, borderBottom:`1px solid ${C.border}`, position:"sticky", top:0, zIndex:100, boxShadow:scrolled?"0 2px 16px rgba(11,37,69,0.08)":"0 1px 4px rgba(11,37,69,0.04)", backdropFilter:scrolled?"blur(12px)":"none", transition:"all 0.3s" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <button onClick={()=>scrollTo("hero")} style={{ display:"flex", alignItems:"center", gap:10, background:"none", border:"none", cursor:"pointer" }}>
            <div style={{ width:36, height:36, borderRadius:10, background:`linear-gradient(135deg, ${C.teal}, ${C.tealLight})`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:`0 4px 12px ${C.teal}40` }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <div style={{ display:"flex", flexDirection:"column" }}>
              <span style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:18, fontWeight:700, color:C.navy, lineHeight:1.1 }}>Healthy Knows</span>
              <span style={{ fontSize:9, color:C.teal, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase" }}>Medical Information</span>
            </div>
          </button>
          {!isMobile && (
            <div style={{ display:"flex", gap:2, alignItems:"center" }}>
              {navLinks.map((l,i) => (
                <button key={l} className="hk-nav-link" onClick={()=>scrollTo(navIds[i])} style={{ background:"none", border:"none", cursor:"pointer", padding:"7px 13px", borderRadius:8, fontSize:13, fontWeight:500, color:C.muted, transition:"color 0.15s" }} onMouseEnter={e=>e.currentTarget.style.color=C.teal} onMouseLeave={e=>e.currentTarget.style.color=C.muted}>{l}</button>
              ))}
            </div>
          )}
          {isMobile && (
            <button onClick={()=>setMenuOpen(!menuOpen)} style={{ background:"none", border:"none", cursor:"pointer", color:C.navy, display:"flex", padding:4 }}>
              {menuOpen?<CloseIcon/>:<MenuIcon/>}
            </button>
          )}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ background:`linear-gradient(135deg, ${darkMode?"#060c18":"#0B2545"} 0%, ${darkMode?"#0e1e38":"#163a6e"} 55%, ${darkMode?"#073535":"#0e5f5e"} 100%)`, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle at 15% 50%, rgba(14,124,123,0.35) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(232,83,58,0.12) 0%, transparent 40%)" }} />
        {/* Local Video Background */}
        <div style={{ position:"absolute", inset:0, zIndex:0, overflow:"hidden", pointerEvents:"none" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position:"absolute",
              top:"50%", left:"50%",
              transform:"translate(-50%, -50%)",
              minWidth:"100%",
              minHeight:"100%",
              width:"auto",
              height:"auto",
              objectFit:"cover",
              opacity:0.72,
              pointerEvents:"none",
              userSelect:"none",
            }}
          >
            <source src={`${import.meta.env.BASE_URL}herovid.mp4`} type="video/mp4" />
          </video>
          {/* Gradient overlay */}
          <div style={{ position:"absolute", inset:0, zIndex:2, background:"linear-gradient(to bottom, rgba(11,37,69,0.45) 0%, rgba(11,37,69,0.35) 50%, rgba(11,37,69,0.55) 100%)" }} />
        </div>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:isMobile?"72px 20px 88px":"120px 24px 140px", display:"grid", gridTemplateColumns:"1fr", gap:isMobile?36:56, alignItems:"center", justifyItems:"center", position:"relative", zIndex:3 }}>
          <div style={{ animation:"fadeInRight .75s ease both", maxWidth:720, margin:"0 auto", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(14,124,123,0.28)", border:"1px solid rgba(14,124,123,0.45)", borderRadius:20, padding:"6px 16px", marginBottom:20, alignSelf:"center", animation:"fadeInUp .5s .1s ease both", opacity:0, animationFillMode:"forwards" }}>
              <span style={{ width:7, height:7, background:C.tealLight, borderRadius:"50%", display:"inline-block" }} />
              <span style={{ fontSize:11, color:C.tealLight, fontWeight:700, letterSpacing:"1.2px" }}>TRUSTED HEALTH INFORMATION</span>
            </div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:isMobile?"36px":"clamp(36px,5vw,58px)", color:"#fff", margin:"0 0 20px", lineHeight:1.12, fontWeight:900, animation:"fadeInUp .6s .2s ease both", opacity:0, animationFillMode:"forwards" }}>
              Your Health,<br /><span style={{ color:C.tealLight }}>Clearly</span> Explained.
            </h1>
            <p style={{ color:"rgba(255,255,255,0.82)", fontSize:isMobile?15:18, lineHeight:1.72, marginBottom:32, maxWidth:560, textAlign:"center", animation:"fadeInUp .6s .35s ease both", opacity:0, animationFillMode:"forwards" }}>
              Healthy Knows brings you accurate, easy-to-understand medical information — designed for Filipino and Asian families.
            </p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", justifyContent:"center", animation:"fadeInUp .6s .5s ease both", opacity:0, animationFillMode:"forwards" }}>
              <button onClick={()=>scrollTo("topics")} style={{ padding:"14px 26px", borderRadius:12, background:C.teal, border:"none", color:"#fff", fontSize:14, fontWeight:700, cursor:"pointer", display:"inline-flex", alignItems:"center", gap:8, transition:"transform .2s, box-shadow .2s" }} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(14,124,123,0.4)"}} onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
                Explore Health Topics <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:40, background:C.cream, clipPath:"ellipse(55% 100% at 50% 100%)", transition:"background 0.35s" }} />
      </section>

      {/* ── POPULAR MEDICAL TOPICS CAROUSEL ── */}
      <section id="topics" style={{ background:C.cream, padding:"64px 0 56px", transition:"background 0.35s" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px" }}>
          <AnimSection>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:isMobile?"flex-start":"flex-end", flexDirection:isMobile?"column":"row", gap:16, marginBottom:32 }}>
              <div>
                {sectionTag("Browse")}
                <h2 style={h2Style}>Popular Medical Topics</h2>
                <p style={{ color:C.muted, fontSize:15, lineHeight:1.6, margin:0 }}>Tap a topic to learn more.</p>
              </div>
              <div style={{ display:"flex", gap:8 }}>
                <button onClick={()=>scrollCarousel(-1)} style={{ width:42, height:42, borderRadius:"50%", border:`1px solid ${C.border}`, background:C.cardBg, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:C.navy, transition:"all .2s" }} onMouseEnter={e=>e.currentTarget.style.background=C.teal||""} onMouseLeave={e=>e.currentTarget.style.background=C.cardBg}><ChevronLeft /></button>
                <button onClick={()=>scrollCarousel(1)} style={{ width:42, height:42, borderRadius:"50%", border:`1px solid ${C.border}`, background:C.cardBg, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:C.navy, transition:"all .2s" }} onMouseEnter={e=>e.currentTarget.style.background=C.teal||""} onMouseLeave={e=>e.currentTarget.style.background=C.cardBg}><ChevronRight /></button>
              </div>
            </div>
          </AnimSection>

          {/* Carousel track */}
          <div
            style={{ overflow:"hidden", width:"100%", cursor:"grab" }}
            onMouseDown={e => {
              const startX = e.clientX;
              const startIdx = carouselIdx;
              let dragged = false;
              const onMove = (ev) => {
                dragged = true;
                const diff = ev.clientX - startX;
                const cardPx = e.currentTarget.offsetWidth / visibleCards;
                const steps = Math.round(-diff / cardPx);
                if (steps !== 0) {
                  setCarouselTransition(true);
                  setCarouselIdx(startIdx + steps);
                }
              };
              const onUp = () => {
                window.removeEventListener("mousemove", onMove);
                window.removeEventListener("mouseup", onUp);
                e.currentTarget.style.cursor = "grab";
                if (dragged) startCarouselAuto();
              };
              e.currentTarget.style.cursor = "grabbing";
              window.addEventListener("mousemove", onMove);
              window.addEventListener("mouseup", onUp);
            }}
            onTouchStart={e => {
              const startX = e.touches[0].clientX;
              const startIdx = carouselIdx;
              const onMove = (ev) => {
                const diff = ev.touches[0].clientX - startX;
                const cardPx = e.currentTarget.offsetWidth / visibleCards;
                const steps = Math.round(-diff / cardPx);
                if (steps !== 0) {
                  setCarouselTransition(true);
                  setCarouselIdx(startIdx + steps);
                }
              };
              const onEnd = () => {
                e.currentTarget.removeEventListener("touchmove", onMove);
                e.currentTarget.removeEventListener("touchend", onEnd);
                startCarouselAuto();
              };
              e.currentTarget.addEventListener("touchmove", onMove);
              e.currentTarget.addEventListener("touchend", onEnd);
            }}
          >
            <div style={{
              display:"flex",
              transition:carouselTransition?"transform 0.5s cubic-bezier(.4,0,.2,1)":"none",
              transform:`translateX(${-(carouselIdx / cloned.length) * 100}%)`,
              width:`${cloned.length * cardWidthPct}%`,
            }}>
              {cloned.map((t, i) => (
                <div key={`${t.slug}-${i}`} style={{ flex:`0 0 ${100/cloned.length}%`, padding:"0 8px", boxSizing:"border-box" }}>
                  <div className="hk-topic-card" onClick={()=>openTopicModal(t.slug)}>
                    <div style={{ position:"relative", height:isMobile?140:170 }}>
                      <img src={topicImages[t.label]} alt={t.label} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(11,37,69,0.82) 0%, rgba(11,37,69,0.1) 60%)" }} />
                      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"10px 12px" }}>
                        <div style={{ color:"#fff", fontSize:isMobile?11:13, fontWeight:700, lineHeight:1.3 }}>{t.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop:20 }} />
        </div>
      </section>

      {/* ── COMMON HEALTH CONDITIONS ── */}
      <section id="conditions" style={{ background:C.white, transition:"background 0.35s" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"64px 20px" }}>
          <AnimSection>
            <div style={{ textAlign:"center", marginBottom:48 }}>
              {sectionTag("Learn More")}
              <h2 style={{ ...h2Style, textAlign:"center" }}>Common Health Conditions</h2>
              <p style={{ color:C.muted, fontSize:15, lineHeight:1.6, margin:"0 auto", maxWidth:500, textAlign:"center" }}>Click any condition to read the full guide.</p>
            </div>
          </AnimSection>

          <AnimSection delay={80}>
            <div className="hk-conditions-grid" style={{ display:"grid", gridTemplateColumns:isMobile?"1fr 1fr":isTablet?"1fr 1fr":"repeat(4, 1fr)", gap:isMobile?12:20 }}>
              {conditions.slice(0,4).map((c,i) => (
                <AnimSection key={i} delay={i*60}>
                  <div className="hk-cond-card" onClick={()=>openConditionModal(c)} style={{ borderRadius:18, overflow:"hidden", cursor:"pointer", position:"relative", height:isMobile?200:280, boxShadow:"0 4px 16px rgba(0,0,0,0.08)" }}>
                    <img src={conditionImages[c.name]} alt={c.name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(11,37,69,0.88) 0%, rgba(11,37,69,0.15) 55%)", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:isMobile?12:20 }}>
                      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:isMobile?13:17, fontWeight:700, color:"#fff", margin:"0 0 2px" }}>{c.name}</h3>
                      <p style={{ fontSize:isMobile?10:12, color:"rgba(255,255,255,0.6)", margin:0, lineHeight:1.4 }}>{c.tips[0]}</p>
                    </div>
                    <div className="hk-cond-overlay" style={{ position:"absolute", inset:0, background:`linear-gradient(to top, ${c.accent}EE, ${c.accent}88)`, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:isMobile?12:24, textAlign:"center" }}>
                      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:isMobile?14:18, fontWeight:700, color:"#fff", margin:"0 0 8px" }}>{c.name}</h3>
                      <p style={{ fontSize:isMobile?11:13, color:"rgba(255,255,255,0.92)", lineHeight:1.6, margin:"0 0 14px" }}>{c.desc}</p>
                      <div style={{ display:"flex", alignItems:"center", gap:6, color:"#fff", fontSize:12, fontWeight:700 }}>Read Full Guide <ArrowRight /></div>
                    </div>
                  </div>
                </AnimSection>
              ))}
            </div>
          </AnimSection>

          {/* Expandable remaining conditions */}
          <div className={`hk-conditions-expand ${showMoreConditions?"open":"closed"}`} style={{ maxHeight:showMoreConditions?"2000px":"0", opacity:showMoreConditions?1:0, overflow:"hidden", transition:"max-height 0.55s cubic-bezier(.4,0,.2,1), opacity 0.4s ease" }}>
            <div className="hk-conditions-grid" style={{ display:"grid", gridTemplateColumns:isMobile?"1fr 1fr":isTablet?"1fr 1fr":"repeat(4, 1fr)", gap:isMobile?12:20, marginTop:isMobile?12:20 }}>
              {conditions.slice(4).map((c,i) => (
                <div key={i} className="hk-cond-card" onClick={()=>openConditionModal(c)} style={{ borderRadius:18, overflow:"hidden", cursor:"pointer", position:"relative", height:isMobile?200:280, boxShadow:"0 4px 16px rgba(0,0,0,0.08)", animation:showMoreConditions?`fadeInUp 0.45s ${i*80}ms ease both`:"none" }}>
                  <img src={conditionImages[c.name]} alt={c.name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(11,37,69,0.88) 0%, rgba(11,37,69,0.15) 55%)", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:isMobile?12:20 }}>
                    <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:isMobile?13:17, fontWeight:700, color:"#fff", margin:"0 0 2px" }}>{c.name}</h3>
                    <p style={{ fontSize:isMobile?10:12, color:"rgba(255,255,255,0.6)", margin:0, lineHeight:1.4 }}>{c.tips[0]}</p>
                  </div>
                  <div className="hk-cond-overlay" style={{ position:"absolute", inset:0, background:`linear-gradient(to top, ${c.accent}EE, ${c.accent}88)`, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:isMobile?12:24, textAlign:"center" }}>
                    <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:isMobile?14:18, fontWeight:700, color:"#fff", margin:"0 0 8px" }}>{c.name}</h3>
                    <p style={{ fontSize:isMobile?11:13, color:"rgba(255,255,255,0.92)", lineHeight:1.6, margin:"0 0 14px" }}>{c.desc}</p>
                    <div style={{ display:"flex", alignItems:"center", gap:6, color:"#fff", fontSize:12, fontWeight:700 }}>Read Full Guide <ArrowRight /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign:"center", marginTop:32 }}>
            <button
              onClick={()=>setShowMoreConditions(v=>!v)}
              style={{ padding:"13px 32px", borderRadius:12, border:`2px solid ${C.teal}`, background:"transparent", color:C.teal, fontSize:14, fontWeight:700, cursor:"pointer", transition:"all .25s", display:"inline-flex", alignItems:"center", gap:8 }}
              onMouseEnter={e=>{e.currentTarget.style.background=C.teal;e.currentTarget.style.color="#fff";}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=C.teal;}}
            >
              <span style={{ transform:showMoreConditions?"rotate(180deg)":"rotate(0)", transition:"transform .3s cubic-bezier(.34,1.56,.64,1)", display:"inline-flex" }}><ChevronDown /></span>
              {showMoreConditions?"Show Less Conditions":"See More Conditions"}
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURED STORIES ── */}
      <section id="stories" style={{ background:`linear-gradient(180deg, ${C.cream} 0%, ${C.warm} 100%)`, transition:"background 0.35s" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"64px 20px" }}>
          <AnimSection>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:40, flexWrap:"wrap", gap:16 }}>
              <div>
                {sectionTag("Real People")}
                <h2 style={h2Style}>Featured Stories</h2>
                <p style={{ color:C.muted, fontSize:15, lineHeight:1.6, margin:0 }}>Real Filipino patients. Real journeys. Real hope.</p>
              </div>
            </div>
          </AnimSection>
          <div className="hk-stories-grid" style={{ display:"grid", gridTemplateColumns:isMobile?"1fr 1fr":isTablet?"1fr 1fr":"repeat(4, 1fr)", gap:isMobile?12:20 }}>
            {stories.map((st,i) => (
              <AnimSection key={i} delay={i*70}>
                <div className="hk-story-card" style={{ borderRadius:20, overflow:"hidden", boxShadow:"0 4px 20px rgba(11,37,69,0.08)", border:`1px solid ${C.border}`, position:"relative", height:isMobile?240:340, cursor:"pointer" }} onMouseEnter={()=>setHoveredStory(i)} onMouseLeave={()=>setHoveredStory(null)}>
                  <img className="hk-story-img" src={storyImages[st.name]} alt={st.name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(11,37,69,0.92) 0%, rgba(11,37,69,0.2) 55%)", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:isMobile?12:20, transition:"opacity 0.3s", opacity:hoveredStory===i?0:1 }}>
                    <div style={{ display:"inline-block", background:`${st.accent}30`, border:`1px solid ${st.accent}60`, borderRadius:20, padding:"2px 8px", fontSize:isMobile?9:11, fontWeight:700, color:"#fff", marginBottom:6, width:"fit-content" }}>{st.condition}</div>
                    <div style={{ fontWeight:700, color:"#fff", fontSize:isMobile?13:15, marginBottom:2 }}>{st.name}</div>
                    <div style={{ fontSize:isMobile?10:12, color:"rgba(255,255,255,0.55)" }}>{st.age} yrs · {st.location}</div>
                  </div>
                  <div style={{ position:"absolute", inset:0, background:`linear-gradient(to top, ${st.accent}F0, ${st.accent}C0)`, opacity:hoveredStory===i?1:0, transition:"opacity 0.35s ease", display:"flex", flexDirection:"column", justifyContent:"center", padding:isMobile?12:24, textAlign:"center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" style={{ margin:"0 auto 10px" }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <p style={{ fontFamily:"'Playfair Display',serif", fontSize:isMobile?11:13, fontStyle:"italic", color:"#fff", lineHeight:1.65, margin:"0 0 10px" }}>"{st.quote}"</p>
                    {!isMobile&&<p style={{ fontSize:11, color:"rgba(255,255,255,0.78)", lineHeight:1.6, margin:"0 0 10px" }}>{st.story}</p>}
                    <div style={{ display:"inline-flex", alignItems:"center", gap:5, background:"rgba(255,255,255,0.2)", borderRadius:20, padding:"4px 12px", width:"fit-content", margin:"0 auto" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize:11, color:"#fff", fontWeight:700 }}>{st.duration}</span>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── EAT HEALTHY ── */}
      <section id="nutrition" style={{ background:C.white, transition:"background 0.35s" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"64px 20px" }}>
          <div className="hk-nutrition-layout" style={{ display:"grid", gridTemplateColumns:isTablet?"1fr":"1fr 2fr", gap:isTablet?36:56, alignItems:"start", position:"relative" }}>
            <div style={{ position:"sticky", top:88, zIndex:10 }}>
                {sectionTag("Nutrition")}
                <h2 style={{ ...h2Style, margin:"8px 0 10px" }}>Eat Healthy,<br />Live Better</h2>
                <p style={{ color:C.muted, fontSize:15, lineHeight:1.6, margin:"0 0 24px" }}>Simple, practical eating tips rooted in Filipino cuisine and Asian dietary wisdom.</p>
                <div style={{ padding:"20px", background:`linear-gradient(135deg, ${C.teal}18, ${C.tealLight}10)`, borderRadius:18, border:`1px solid ${C.teal}25`, position:"relative", overflow:"hidden", minHeight:130 }}>
                  <div style={{ position:"absolute", top:-10, right:-10, width:80, height:80, borderRadius:"50%", background:`${C.tealLight}12` }} />
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                    <div style={{ width:30, height:30, background:C.teal, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </div>
                    <div style={{ fontSize:13, fontWeight:700, color:C.navy }}>Did you know?</div>
                  </div>
                  <p style={{ fontSize:13, color:C.muted, lineHeight:1.65, margin:0 }}>{didYouKnow[didYouKnowIdx].fact}</p>
                </div>
              </div>
            <div className="hk-nutrition-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {eatTips.map((t,i) => (
                <AnimSection key={i} delay={i*50}>
                  <div className="hk-nutrition-card" style={{ borderRadius:16, overflow:"hidden", border:`1px solid ${C.border}`, background:C.cardBg }}>
                    <div style={{ height:isMobile?150:200, overflow:"hidden" }}>
                      <img src={nutritionImages[t.title]} alt={t.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                    </div>
                    <div style={{ padding:"12px 14px" }}>
                      <h4 style={{ fontFamily:"'Playfair Display',serif", fontSize:14, fontWeight:700, color:C.navy, margin:"0 0 5px" }}>{t.title}</h4>
                      <p style={{ fontSize:12, color:C.muted, lineHeight:1.6, margin:0 }}>{t.tip}</p>
                    </div>
                  </div>
                </AnimSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERT VIDEOS ── */}
      <section id="videos" style={{ background:darkMode?"#0a0f1a":"#0B2545" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"64px 20px" }}>
          <AnimSection>
            <div style={{ textAlign:"center", marginBottom:48 }}>
              <span style={{ display:"inline-block", background:"rgba(14,124,123,0.3)", color:C.tealLight, fontSize:11, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", padding:"5px 14px", borderRadius:20, marginBottom:10 }}>Watch & Learn</span>
              <h2 style={{ ...h2Style, color:"#fff", textAlign:"center" }}>Videos From Experts</h2>
              <p style={{ color:"rgba(255,255,255,0.55)", fontSize:15, lineHeight:1.6, margin:"0 auto", textAlign:"center", maxWidth:500 }}>Watch trusted medical professionals explain health topics in plain language.</p>
            </div>
          </AnimSection>

          <div className="hk-video-grid" style={{ display:"grid", gridTemplateColumns:isMobile?"1fr 1fr":isTablet?"1fr 1fr":"repeat(4, 1fr)", gap:isMobile?12:20, marginBottom:36 }}>
            {expertVideos.map((v,i) => (
              <AnimSection key={i} delay={i*70}>
                <div onClick={()=>openMediaModal("youtube", v.videoId, v.title)} style={{ textDecoration:"none", cursor:"pointer" }}>
                  <div style={{ background:"rgba(255,255,255,0.05)", borderRadius:16, overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)", cursor:"pointer", transition:"all .25s" }} onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.1)";e.currentTarget.style.transform="translateY(-4px)";}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.transform="";}}>
                    <div style={{ position:"relative", height:isMobile?100:150 }}>
                      <img src={`https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`} alt={v.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                      <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.3)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <div style={{ width:isMobile?36:50, height:isMobile?36:50, background:"rgba(255,255,255,0.92)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"#0B2545" }}><PlayIcon /></div>
                      </div>
                    </div>
                    <div style={{ padding:"12px 14px" }}>
                      <div style={{ display:"inline-block", background:`${C.teal}35`, color:C.tealLight, fontSize:10, fontWeight:700, letterSpacing:"1px", padding:"2px 8px", borderRadius:20, marginBottom:6 }}>{v.topic}</div>
                      <h4 style={{ color:"#fff", fontSize:isMobile?11:13, fontWeight:600, margin:"0 0 4px", lineHeight:1.4 }}>{v.title}</h4>
                      <p style={{ color:"rgba(255,255,255,0.45)", fontSize:11, margin:0 }}>{v.channel}</p>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>

          <div style={{ textAlign:"center" }}>
            <button
              onClick={()=>setShowMoreVideos(v=>!v)}
              style={{ padding:"13px 32px", borderRadius:12, border:"2px solid rgba(255,255,255,0.25)", background:"transparent", color:"#fff", fontSize:14, fontWeight:700, cursor:"pointer", transition:"all .2s", display:"inline-flex", alignItems:"center", gap:8 }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.08)"}
              onMouseLeave={e=>e.currentTarget.style.background="transparent"}
            >
              <span style={{ transform:showMoreVideos?"rotate(180deg)":"rotate(0)", transition:"transform .3s cubic-bezier(.34,1.56,.64,1)", display:"inline-flex" }}><ChevronDown /></span>
              {showMoreVideos?"Show Less":"See More Videos"}
            </button>
          </div>

          {/* MedTok — animated expand */}
          <div className={`hk-videos-expand ${showMoreVideos?"open":"closed"}`} style={{ maxHeight:showMoreVideos?"3000px":"0", opacity:showMoreVideos?1:0, overflow:"hidden", transition:"max-height 0.6s cubic-bezier(.4,0,.2,1), opacity 0.45s ease", marginTop:showMoreVideos?48:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <div style={{ height:1, flex:1, background:"rgba(255,255,255,0.1)" }} />
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ color:"#fff" }}><TiktokIcon /></div>
                <span style={{ color:"#fff", fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700 }}>MedTok</span>
                <span style={{ background:C.coral, color:"#fff", fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:20, letterSpacing:"1px" }}>TIKTOK</span>
              </div>
              <div style={{ height:1, flex:1, background:"rgba(255,255,255,0.1)" }} />
            </div>
            <p style={{ color:"rgba(255,255,255,0.45)", fontSize:13, textAlign:"center", marginBottom:24 }}>Trending medical content from Filipino health creators</p>

            <div style={{ position:"relative" }}>
              <div style={{ overflow:"hidden" }}>
                <div style={{ display:"flex", gap:12, transition:"transform 0.4s ease", transform:`translateX(-${medtokIdx * (100/medtokVisible)}%)`, width:`${(medtokVideos.length/medtokVisible)*100}%` }}>
                  {medtokVideos.map((v,i) => (
                    <div key={i} style={{ flex:`0 0 ${100/medtokVideos.length}%` }}>
                      <div onClick={()=>openMediaModal("tiktok", v.videoId, v.title)} style={{ textDecoration:"none", display:"block", cursor:"pointer" }}>
                        {/* True 9:16 small card */}
                        <div style={{ aspectRatio:"9/16", background:"rgba(255,255,255,0.04)", borderRadius:14, overflow:"hidden", border:"1px solid rgba(255,255,255,0.07)", transition:"all .2s", display:"flex", flexDirection:"column" }} onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.09)";e.currentTarget.style.transform="translateY(-3px)";}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.transform="";}}>
                          <div style={{ flex:1, position:"relative", overflow:"hidden", background:"#000" }}>
                            <img
                              src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}
                              alt={v.title}
                              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", opacity:0.7 }}
                              onError={e=>{ e.currentTarget.style.display="none"; }}
                            />
                            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                              <div style={{ width:38, height:38, background:"rgba(255,255,255,0.15)", border:"2px solid rgba(255,255,255,0.35)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", backdropFilter:"blur(4px)" }}><PlayIcon /></div>
                            </div>
                            <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"0 8px 6px" }}>
                              <p style={{ color:"rgba(255,255,255,0.9)", fontSize:10, fontWeight:600, textAlign:"center", lineHeight:1.35, margin:0 }}>{v.title}</p>
                            </div>
                            <div style={{ position:"absolute", top:6, left:8, background:"rgba(0,0,0,0.6)", color:"rgba(255,255,255,0.8)", fontSize:9, fontWeight:600, padding:"2px 7px", borderRadius:4 }}>{v.views} views</div>
                          </div>
                          <div style={{ padding:"8px 10px", flexShrink:0 }}>
                            <p style={{ color:"rgba(255,255,255,0.5)", fontSize:10, margin:0 }}>{v.channel}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display:"flex", justifyContent:"center", gap:10, marginTop:16 }}>
                <button onClick={()=>scrollMedtok(-1)} style={{ width:38, height:38, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.2)", background:"rgba(255,255,255,0.05)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", transition:"all .2s" }} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.15)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.05)"}><ChevronLeft /></button>
                <button onClick={()=>scrollMedtok(1)} style={{ width:38, height:38, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.2)", background:"rgba(255,255,255,0.05)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", transition:"all .2s" }} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.15)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.05)"}><ChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEALTHY TOOLS ── */}
      <section id="tools" style={{ background:C.cream, transition:"background 0.35s" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"64px 20px" }}>
          <AnimSection>
            <div style={{ textAlign:"center", marginBottom:48 }}>
              {sectionTag("Free Tools")}
              <h2 style={{ ...h2Style, textAlign:"center" }}>Healthy Tools</h2>
              <p style={{ color:C.muted, fontSize:15, lineHeight:1.6, margin:"0 auto", textAlign:"center", maxWidth:480 }}>Quick calculators to check in on your health. Free, instant, no signup needed.</p>
            </div>
          </AnimSection>
          <div className="hk-tools-grid" style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":isTablet?"1fr 1fr":"repeat(3, 1fr)", gap:24 }}>
            <AnimSection delay={0}><BMICalculator C={C} /></AnimSection>
            <AnimSection delay={80}><WaterCalculator C={C} /></AnimSection>
            <AnimSection delay={160}><CalorieEstimator C={C} /></AnimSection>
          </div>
          <div style={{ marginTop:20, padding:"16px 20px", background:`${C.coral}0d`, border:`1px solid ${C.coral}25`, borderRadius:12, display:"flex", gap:12, alignItems:"flex-start" }}>
            <div style={{ flexShrink:0, marginTop:1 }}><WarningIcon /></div>
            <p style={{ fontSize:13, color:C.muted, margin:0, lineHeight:1.65 }}>These tools are for informational purposes only and do not replace professional medical advice. Always consult a licensed physician for medical concerns.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection C={C} />

      {/* ── FOOTER ── */}
      <footer style={{ background:darkMode?"#07090f":"#1A1A2E", color:"rgba(255,255,255,0.65)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:isMobile?"48px 20px 28px":"64px 24px 32px" }}>
          <div className="hk-footer-grid" style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":isTablet?"1fr 1fr":"2fr 1fr 1fr 1fr", gap:isMobile?32:40, marginBottom:48 }}>
            <div>
              <div style={{ marginBottom:16 }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"#fff" }}>Healthy Knows</div>
                <div style={{ fontSize:10, color:C.tealLight, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", marginTop:2 }}>Medical Information</div>
              </div>
              <p style={{ fontSize:14, lineHeight:1.75, maxWidth:280, color:"rgba(255,255,255,0.48)", margin:"0 0 20px" }}>Your trusted source for accurate, clear, and culturally relevant medical information for Filipino and Asian communities.</p>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                {[["Facebook",<FacebookIcon />],["YouTube",<YoutubeIcon />],["Instagram",<InstagramIcon />]].map(([name,icon])=>(
                  <a key={name} href="#" style={{ width:38, height:38, background:"rgba(255,255,255,0.07)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.6)", textDecoration:"none", transition:"all .2s", border:"1px solid rgba(255,255,255,0.08)" }} onMouseEnter={e=>{e.currentTarget.style.background=C.teal;e.currentTarget.style.color="#fff";}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.07)";e.currentTarget.style.color="rgba(255,255,255,0.6)";}}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ color:"#fff", fontWeight:700, fontSize:13, marginBottom:18, letterSpacing:"0.5px", textTransform:"uppercase" }}>Health Topics</div>
              {navLinks.slice(0,3).map(l=>(
                <button key={l} onClick={()=>scrollTo(navIds[navLinks.indexOf(l)])} style={{ display:"block", background:"none", border:"none", padding:"0 0 11px", fontSize:13, color:"rgba(255,255,255,0.52)", cursor:"pointer", transition:"color .15s", textAlign:"left" }} onMouseEnter={e=>e.currentTarget.style.color=C.tealLight} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.52)"}>{l}</button>
              ))}
            </div>

            <div>
              <div style={{ color:"#fff", fontWeight:700, fontSize:13, marginBottom:18, letterSpacing:"0.5px", textTransform:"uppercase" }}>Resources</div>
              {["Articles","Expert Videos","Patient Stories","Health Tools","Nutrition Guide","FAQ"].map(l=>(
                <button key={l} onClick={l==="FAQ"?()=>scrollTo("faq"):undefined} style={{ display:"block", background:"none", border:"none", padding:"0 0 11px", fontSize:13, color:"rgba(255,255,255,0.52)", cursor:"pointer", transition:"color .15s", textAlign:"left" }} onMouseEnter={e=>e.currentTarget.style.color=C.tealLight} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.52)"}>{l}</button>
              ))}
            </div>

            <div>
              <div style={{ color:"#fff", fontWeight:700, fontSize:13, marginBottom:18, letterSpacing:"0.5px", textTransform:"uppercase" }}>About</div>
              {[
                { label:"About Us", key:"about" },
                { label:"Editorial Policy", key:"editorial" },
                { label:"Privacy Policy", key:"privacy" },
                { label:"Terms of Use", key:"terms" },
              ].map(item=>(
                <button key={item.label} onClick={()=>openStaticModal(item.key)} style={{ display:"block", background:"none", border:"none", padding:"0 0 11px", fontSize:13, color:"rgba(255,255,255,0.52)", cursor:"pointer", transition:"color .15s", textAlign:"left" }} onMouseEnter={e=>e.currentTarget.style.color=C.tealLight} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.52)"}>{item.label}</button>
              ))}
            </div>
          </div>

          <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.3)" }}>© 2025 Healthy Knows. All rights reserved. For informational purposes only.</div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.3)", display:"flex", gap:16, flexWrap:"wrap" }}>
              {[{ label:"Privacy Policy", key:"privacy" },{ label:"Terms of Use", key:"terms" }].map(item=>(
                <button key={item.label} onClick={()=>openStaticModal(item.key)} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.3)", cursor:"pointer", fontSize:12, transition:"color .15s", padding:0 }} onMouseEnter={e=>e.currentTarget.style.color=C.tealLight} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.3)"}>{item.label}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING DARK/LIGHT MODE BUTTON ── */}
      <div style={{
        position:"fixed", bottom:isMobile?80:32, right:20, zIndex:500,
        display:"flex", flexDirection:"column", gap:10, alignItems:"center",
        opacity: menuOpen ? 0 : 1,
        pointerEvents: menuOpen ? "none" : "all",
        transition: "opacity 0.2s ease",
      }}>
        {/* Back to Top */}
        <button
          onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
          style={{
            width:46, height:46, borderRadius:"50%",
            background:C.teal, border:"none",
            display:"flex", alignItems:"center", justifyContent:"center",
            cursor:"pointer", color:"#fff",
            boxShadow:"0 4px 20px rgba(14,124,123,0.45)",
            opacity:showBackToTop?1:0,
            transform:showBackToTop?"translateY(0) scale(1)":"translateY(12px) scale(0.85)",
            transition:"opacity 0.3s ease, transform 0.35s cubic-bezier(.34,1.56,.64,1)",
            pointerEvents:showBackToTop?"all":"none",
          }}
          title="Back to top"
        >
          <ArrowUp />
        </button>

        {/* Dark/Light Mode */}
        <button
          onClick={()=>setDarkMode(d=>!d)}
          style={{
            width:46, height:46, borderRadius:"50%",
            background:darkMode?"#E8F4FF":"#0B2545",
            border:`2px solid ${darkMode?"rgba(232,244,255,0.2)":"rgba(11,37,69,0.15)"}`,
            display:"flex", alignItems:"center", justifyContent:"center",
            cursor:"pointer", color:darkMode?"#0B2545":"#E8F4FF",
            boxShadow:darkMode?"0 4px 20px rgba(232,244,255,0.2)":"0 4px 20px rgba(11,37,69,0.35)",
            transition:"all 0.35s cubic-bezier(.34,1.56,.64,1)",
            animation:"bounceIn 0.5s 1s ease both",
          }}
          title={darkMode?"Switch to Light Mode":"Switch to Dark Mode"}
        >
          <span style={{ transform:darkMode?"rotate(180deg)":"rotate(0)", transition:"transform 0.4s cubic-bezier(.34,1.56,.64,1)", display:"flex" }}>
            {darkMode?<SunIcon/>:<MoonIcon/>}
          </span>
        </button>
      </div>
    </div>
  );
}