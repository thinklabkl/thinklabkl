import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Clock, Layers, Laptop, Shield, UserCheck, Microscope, Zap, ChevronDown, ChevronUp, CheckCircle2, Target } from 'lucide-react';
import industrySpecificImage from '../assets/images/training/Industry-Specific Training.png';
import immersiveLearningImage from '../assets/images/training/Immersive Learning.png';
import handsOnPracticeImage from '../assets/images/training/Hands-On Practice.png';

// Technology Images
import industrialRoboticsImage from '../assets/images/training/course-image/technology/Industrial Robotics & Automation.png';
import bimTechnologyImage from '../assets/images/training/course-image/technology/BIM Technology.png';
import blockchainTechnologyImage from '../assets/images/training/course-image/technology/Blockchain Technology.png';
import digitalTransformationImage from '../assets/images/training/course-image/technology/Digital Transformation & Strategy.png';
import digitalLiteracyImage from '../assets/images/training/course-image/technology/Digital Literacy for Professionals.png';
import cybersecurityPdpaImage from '../assets/images/training/course-image/technology/Cybersecurity Awareness & PDPA Compliance Training.png';
import statisticsPythonImage from '../assets/images/training/course-image/technology/Statistics For Data Analytics With Python.png';
import aiForAllImage from '../assets/images/training/course-image/technology/AI for ALL Real-World Applications for Every Role.png';
import powerBiImage from '../assets/images/training/course-image/technology/Getting Started with Microsoft Power BI.png';
import becomingAgileImage from '../assets/images/training/course-image/technology/Becoming AGILE.png';
import iotLabImage from '../assets/images/training/course-image/technology/Industry 4.0 & IoT Lab Building Smart Systems for the Future.png';
import smartFarmingImage from '../assets/images/training/course-image/technology/Smart Farming Leveraging IoT and AI for Sustainable Agriculture.png';
import assetTrackingImage from '../assets/images/training/course-image/technology/Advanced Asset Tracking Technologies.png';

// Health & Safety Images
import oshBasicsImage from '../assets/images/training/course-image/healthsafety/Safety & Health OSH Basics.png';
import hseAuditImage from '../assets/images/training/course-image/healthsafety/HSE Audit & Compliance Specialist.png';
import ertErpImage from '../assets/images/training/course-image/healthsafety/Advanced ERT & ERP Implementation.png';
import chemicalHandlingImage from '../assets/images/training/course-image/healthsafety/Chemical Handling & Safety.png';
import firstAidImage from '../assets/images/training/course-image/healthsafety/Basic Occupational First Aid BOFA.png';

// ESG Images
import esgDataPrivacyImage from '../assets/images/training/course-image/esg/ESG & Data Privacy Management.png';
import carbonNeutralityImage from '../assets/images/training/course-image/esg/Carbon Neutrality, Net Zero and GHG.png';
import corporateGovernanceImage from '../assets/images/training/course-image/esg/Corporate Governance.png';

// Management Images
import transformationalLeadershipImage from '../assets/images/training/course-image/management/Transformational Leadership & Strategic Direction.png';
import highPerformanceTeamImage from '../assets/images/training/course-image/management/Leading High-Performance Team.png';
import supervisorySkillsImage from '../assets/images/training/course-image/management/Professional Supervisory Skills.png';
import analyticalThinkingImage from '../assets/images/training/course-image/management/Analytical and Critical Thinking.png';
import changeManagementImage from '../assets/images/training/course-image/management/Change Management for Professional.png';

// Language Images
import languageCorporateImage from '../assets/images/training/course-image/language/Language Program for Corporate.png';
import languageStudentsImage from '../assets/images/training/course-image/language/Language Program for Students.png';
import ieltsTeflImage from '../assets/images/training/course-image/language/IELTS & TEFL Preparation Course.png';
import proofreadingImage from '../assets/images/training/course-image/language/Professional Proofreading Services.png';

interface Program {
  title: string;
  cat: string;
  image: string;
  description: string;
}

interface ParagraphSection {
  text: string;
  bullets: string[];
}

interface ParsedDescription {
  sections: ParagraphSection[];
}

const parseDescription = (description: string): ParsedDescription => {
  const result: ParsedDescription = {
    sections: []
  };

  // Clean up the description
  let cleanDesc = description.trim();

  // NOTE: Target audience extraction removed - "Suitable for" now displays as regular paragraph text
  // This keeps the description flow consistent across all courses

  // Split by double newlines to get paragraphs
  const paragraphs = cleanDesc.split(/\n\n+/);

  // Process each paragraph to extract text and bullets
  paragraphs.forEach(paragraph => {
    const section: ParagraphSection = {
      text: '',
      bullets: []
    };

    // Extract bullet points from this paragraph
    const bulletPattern = /\(([i|v|x]+)\)\s*([^()]+?)(?=\([ivx]+\)|$)/gi;
    const bulletMatches = [...paragraph.matchAll(bulletPattern)];

    if (bulletMatches.length > 0) {
      bulletMatches.forEach(match => {
        section.bullets.push(match[2].trim());
      });
      // Remove bullet points from text
      paragraph = paragraph.replace(bulletPattern, '');
    }

    // Clean up the remaining text
    section.text = paragraph.replace(/\s+/g, ' ').trim();

    if (section.text.length > 0 || section.bullets.length > 0) {
      result.sections.push(section);
    }
  });

  return result;
};

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const parsed = parseDescription(program.description);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col group">
      <div className="relative h-48 overflow-hidden shrink-0">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm">
            {program.cat}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title - Standardized 2-line height for alignment */}
        <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 h-[3.5rem]">
          {program.title}
        </h3>

        {/* Description Content - Shows 4 lines when collapsed */}
        <div className={`${isExpanded ? '' : 'line-clamp-4'} mb-4`}>
          {/* Sections - Each paragraph with its bullets */}
          {parsed.sections.length > 0 && (
            <div className="space-y-3">
              {parsed.sections.map((section, idx) => (
                <div key={idx}>
                  {section.text && (
                    <p className="text-slate-600 text-sm leading-relaxed mb-2">
                      {section.text}
                    </p>
                  )}
                  {section.bullets.length > 0 && (
                    <ul className="space-y-1.5">
                      {section.bullets.map((point, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Target Audience - Removed, now displays as regular paragraph text */}
        </div>

        {/* Read More / Less Toggle - Always visible at bottom */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:text-blue-800 transition-colors self-start mt-auto"
        >
          {isExpanded ? (
            <>Show Less <ChevronUp size={14} /></>
          ) : (
            <>Read More <ChevronDown size={14} /></>
          )}
        </button>
      </div>
    </div>
  );
};

const Training: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('All');

  // Check URL hash on mount to set initial active tab
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'Language') {
      setActiveTab('Language');
      // Scroll to courses section after a short delay to ensure render
      setTimeout(() => {
        const coursesSection = document.getElementById('courses-catalog');
        if (coursesSection) {
          coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const trainingGroundItems = [
    {
      title: "Industry-Specific Training",
      image: industrySpecificImage,
      description: "Bespoke curricula meticulously aligned with current industrial standards, technical requirements, and emerging sector-specific shifts."
    },
    {
      title: "Immersive Learning",
      image: immersiveLearningImage,
      description: "Interactive, engagement-focused environments that simulate real-world corporate and industrial scenarios for superior knowledge retention."
    },
    {
      title: "Hands-On Practice",
      image: handsOnPracticeImage,
      description: "Practical, lab-based sessions focusing on immediate skill acquisition through direct application and expert-guided demonstrations."
    }
  ];

  const categories = ['All', 'Management', 'Health & Safety', 'ESG', 'IT and Digital', 'Language'];

  const programs: Program[] = [
    // TECHNOLOGY CATEGORY
    {
      title: "Industrial Robotics & Automation",
      cat: "IT and Digital",
      image: industrialRoboticsImage,
      description: "An introduction to the principles, technologies, and practical applications of industrial robotics and automation in modern manufacturing and industrial environments. This course covers the fundamentals of robotic systems, automation design concepts, sensors, control systems, and smart production technologies aligned with Industry 4.0"
    },
    {
      title: "BIM Technology",
      cat: "IT and Digital",
      image: bimTechnologyImage,
      description: "A comprehensive introduction to Building Information Modelling (BIM) and its role in transforming planning, design, construction, and asset management processes. This course equips professionals with the knowledge needed to understand BIM implementation strategies, industry standards, and practical applications across the built environment sector. Participants will learn the key principles of BIM workflows, collaborative digital project environments, data integration, and model-based coordination that support improved project efficiency, accuracy, and lifecycle management."
    },
    {
      title: "Blockchain Technology",
      cat: "IT and Digital",
      image: blockchainTechnologyImage,
      description: "A practical introduction to blockchain technology, covering its core concepts, architecture, and real-world applications across industries. Participants will gain an understanding of how distributed ledger systems work, including consensus mechanisms, security principles, and emerging use cases such as healthcare management, supply chain tracking, and financial technologies."
    },
    {
      title: "Digital Transformation & Strategy",
      cat: "IT and Digital",
      image: digitalTransformationImage,
      description: "Empower professionals with the knowledge and skills required to navigate, lead, and execute digital transformation initiatives within organisations. The course focuses on leveraging emerging technologies, digital strategy development, and organisational change management to drive innovation and operational excellence."
    },
    {
      title: "Digital Literacy for Professionals",
      cat: "IT and Digital",
      image: digitalLiteracyImage,
      description: "Equip professionals with the essential digital knowledge and skills required to thrive in a technology-driven work environment. The course addresses core digital competencies, including effective digital communication, data awareness, online security, and the use of digital tools for productivity and collaboration. It is designed to enhance employee confidence, digital readiness, and overall organisational performance in the digital economy."
    },
    {
      title: "Cybersecurity Awareness & PDPA Compliance Training",
      cat: "IT and Digital",
      image: cybersecurityPdpaImage,
      description: "This practical and industry-focused training equips employees with the knowledge and awareness needed to protect organisational data and comply with Malaysia's Personal Data Protection Act (PDPA) 2010.\n\nParticipants will learn how to identify and prevent common cyber threats such as phishing, ransomware, malware, social engineering, and insider risks. The programme also emphasizes on PDPA data protection principles, responsibilities of data users and employees, managing personal data securely and reducing organisational legal and reputational risks.\n\nThrough real-life case studies and interactive scenarios, employees will understand their role in safeguarding company information and maintaining regulatory compliance. This training is ideal for private companies seeking to: (i) Strengthen internal data protection practices (ii) Reduce cyber risk exposure (iii) Enhance PDPA compliance readiness (iv) Build a proactive security culture across the organisation"
    },
    {
      title: "Statistics For Data Analytics With Python",
      cat: "IT and Digital",
      image: statisticsPythonImage,
      description: "Statistics with Data Analytics with Python introduces fundamental statistical concepts and techniques essential for data analysis. Participants will learn to apply these skills using Python, one of the world's most in-demand programming tools to interpret and visualize data effectively.\n\nParticipants will also learn how to apply key statistical concepts for business decision-making, analyse and interpret real-world datasets, perform data cleaning, visualisation, and exploratory data analysis, generate insights using Python libraries and present data findings clearly to support strategic decisions.\n\nThe course combines foundational statistics with applied analytics, ensuring participants not only understand the theory but can confidently apply it in workplace scenarios. It is ideal for organisations seeking to: (i) Strengthen data-driven decision-making (ii) Upskill teams in analytics and digital competencies (iii) Improve operational efficiency through data insights (iv) Support digital transformation initiatives.\n\nSuitable for executives, analysts, engineers, managers, and professionals with little to intermediate experience in statistics or coding."
    },
    {
      title: "AI for ALL: Real-World Applications for Every Role",
      cat: "IT and Digital",
      image: aiForAllImage,
      description: "This course demystifies AI concepts and showcases practical applications across industries and job roles. Participants will explore tools and case studies to understand how AI can enhance productivity and decision making. This practical training demonstrates how AI can be applied across departments such as in HR, finance, marketing, operations, customer service, and management, regardless of technical background.\n\nIdeal for organisations seeking to: (i) Accelerate digital transformation initiatives (ii) Improve workforce productivity through AI adoption (iii) Build AI awareness across all levels of the organisation (iv) Foster innovation while maintaining responsible AI governance.\n\nSuitable for executives, managers, administrative staff, and professionals from all functions. No technical background required."
    },
    {
      title: "Getting Started with Microsoft Power BI",
      cat: "IT and Digital",
      image: powerBiImage,
      description: "Connects and transform data from various sources, build interactive reports and dashboards, learn core DAX functions, and publish and share insights securely. By the end, participants confidently create professional data-driven visuals that deliver real business impact.\n\nKey learning areas include; importing and cleaning data from multiple sources, data visualisation best practices, track key performance indicators (KPIs) and understanding basic data modelling concepts. This course is suitable for organisations aiming to strengthen data-driven decision-making, improve reporting efficiency, and enhance business performance visibility.\n\nSuitable for managers, analysts, finance personnel, HR teams, operations staff, and professionals with little to no prior Power BI experience."
    },
    {
      title: "Becoming AGILE",
      cat: "IT and Digital",
      image: becomingAgileImage,
      description: "Explore Agile principals through methodologies like Scrum and Kanban for project management. The course includes role simulations, sprint planning and tools for collaborative team environment.\n\nThis is a practical training programme designed to introduce professionals to Agile principles, mindset, and frameworks that drive flexibility, collaboration, and performance. Participants will learn core Agile values and principles, differences between traditional and Agile ways of working, key Agile frameworks, how to foster collaboration, accountability, and continuous improvement.\n\nThrough interactive exercises and real-world case discussions, participants will understand how Agile practices can be applied across projects, departments, and organisational functions, not just IT. This course is ideal for organisations seeking to: (i) Improve project delivery speed and adaptability (ii) Strengthen cross-functional collaboration (iii) Enhance innovation and customer responsiveness (iv) Build a culture of continuous improvement.\n\nSuitable for managers, team leaders, project teams, and professionals across all industries who want to lead and work more effectively in dynamic environments."
    },
    {
      title: "Industry 4.0 & IoT Lab: Building Smart Systems for the Future",
      cat: "IT and Digital",
      image: iotLabImage,
      description: "This intensive 6-week course provides a comprehensive project driven introduction to Industry 4.0 and Internet of Things (IoT), equipping students with practical skills to design, build, and deploy smart systems. Participants will be exposed to Python programming, augmented reality interfaces and industry oriented hands-on projects.\n\nThe course culminates in group projects, presentations and offers digital badges based on objectives like attendance, programming challenges, and team contributions. It emphasizes real-world applications, collaboration, and innovation, it prepares participants to address challenges in smart cities, industrial automation and connected devices."
    },
    {
      title: "Smart Farming: Leveraging IoT and AI for Sustainable Agriculture",
      cat: "IT and Digital",
      image: smartFarmingImage,
      description: "This 15-day training focuses on building a smart farming system using Internet of Things (IoT) and Artificial Intelligence (AI) technologies. Participants will be divided into several teams to develop a fully functional smart farm prototype integrating sensors, data analytics, and cloud-based dashboards to optimize agricultural processes. The project emphasizes hands-on learning, from sensor setup to AI driven insights, culminating in a secure and maintainable system."
    },
    {
      title: "Advanced Asset Tracking Technologies",
      cat: "IT and Digital",
      image: assetTrackingImage,
      description: "This course explores advanced asset tracking technologies, integrating AI visual recognition, LoraWAN, sensors, geofencing, UWB, RTLS, RFID, Bluetooth, GPS, and Blockchain. Participants will learn to implement these solutions for efficient tracking and management of assets across diverse environments, enhancing operational transparency and accuracy with blockchain's immutable ledger."
    },

    // HEALTH & SAFETY CATEGORY
    {
      title: "Safety & Health (OSH) Basics",
      cat: "Health & Safety",
      image: oshBasicsImage,
      description: "Foundational safety principles ensuring compliance with regional OSH regulations and workforce protection. The course introduces core OSH concepts, hazard identification, risk assessment, and preventive measures to create a safe and healthy working environment."
    },
    {
      title: "HSE Audit & Compliance Specialist",
      cat: "Health & Safety",
      image: hseAuditImage,
      description: "Advanced methodology for conducting internal and external HSE audits within high-stakes industrial environments. This course is designed to develop competent professionals capable of evaluating, auditing, and monitoring organizational compliance with Health, Safety, and Environment (HSE) requirements."
    },
    {
      title: "Advanced ERT & ERP Implementation",
      cat: "Health & Safety",
      image: ertErpImage,
      description: "Advanced understanding of emergency risk assessment, incident command structures, roles and responsibilities of ERT members, and coordination with internal and external stakeholders. The course emphasizes practical implementation, including emergency procedures, communication protocols, evacuation planning, emergency equipment deployment, and post-incident recovery. It is designed and customized to strengthen organizational preparedness and response capability during emergency situations."
    },
    {
      title: "Chemical Handling & Safety",
      cat: "Health & Safety",
      image: chemicalHandlingImage,
      description: "Essential awareness and practical understanding of safe chemical management in the workplace. The course addresses the identification of chemical hazards, associated health, safety, and environmental risks, and the application of safe handling practices throughout the chemical lifecycle—storage, use, transport, and disposal."
    },
    {
      title: "Basic Occupational First Aid (BOFA)",
      cat: "Health & Safety",
      image: firstAidImage,
      description: "This course is designed to equip participants with essential first aid knowledge and practical skills to respond effectively to workplace medical emergencies. Knowledge on basic first aid principles, including casualty assessment, bleeding control, fracture management, cardiopulmonary resuscitation (CPR), and response to common workplace medical conditions. It supports organisations in meeting occupational safety and health requirements while enhancing emergency preparedness, employee confidence, and overall workplace safety."
    },

    // ESG CATEGORY
    {
      title: "ESG & Data Privacy Management",
      cat: "ESG",
      image: esgDataPrivacyImage,
      description: "Equip professionals with a practical understanding of Environmental, Social, and Governance (ESG) principles alongside responsible data privacy and protection practices. The course focuses on integrating sustainability, ethical governance, and data protection requirements into organisational strategy, operations, and decision-making."
    },
    {
      title: "Carbon Neutrality, Net Zero and GHG",
      cat: "ESG",
      image: carbonNeutralityImage,
      description: "Essential knowledge and practical understanding of organisational decarbonisation strategies. This course focuses on measuring, managing, and reducing greenhouse gas (GHG) emissions while supporting long-term carbon neutrality and net zero commitments. Participants will gain exposure to key climate concepts, GHG accounting principles, emissions scopes, and reduction pathways."
    },
    {
      title: "Corporate Governance",
      cat: "ESG",
      image: corporateGovernanceImage,
      description: "Provide professionals with a clear understanding of governance principles, structures, and practices that support ethical leadership, accountability, and sustainable organisational performance. Participants will gain exposure to governance frameworks, regulatory expectations, risk oversight, and internal control mechanisms. This course supports organisations in enhancing trust, managing risk, ensuring compliance, and achieving long-term value creation."
    },

    // MANAGEMENT CATEGORY
    {
      title: "Transformational Leadership & Strategic Direction",
      cat: "Management",
      image: transformationalLeadershipImage,
      description: "Empowering executives to lead through change and align organizational goals with a forward-looking strategic vision. Designed to develop leaders who can inspire change, drive organisational performance, and provide clear strategic direction in dynamic and complex environments. The course also addresses the role of leaders in navigating uncertainty, managing organisational change, and translating strategic intent into actionable outcomes."
    },
    {
      title: "Leading High-Performance Team",
      cat: "Management",
      image: highPerformanceTeamImage,
      description: "Advanced strategies for building and sustaining elite teams through psychological safety and performance optimization. By strengthening leadership capability at the team level, this course supports organisations in improving productivity, employee engagement, and overall performance while developing resilient and adaptive teams."
    },
    {
      title: "Professional Supervisory Skills",
      cat: "Management",
      image: supervisorySkillsImage,
      description: "Core competencies for managerial excellence, focusing on personnel guidance, effective delegation, and output monitoring. This course highlights the importance of effective communication, problem-solving, people management in driving productivity, quality, and workplace harmony. Applicable for supervisors in developing confidence, professionalism, and consistency in supervision while strengthening team performance and organisational effectiveness."
    },
    {
      title: "Analytical and Critical Thinking",
      cat: "Management",
      image: analyticalThinkingImage,
      description: "Sharpening decision-making capabilities through structured problem-solving and rigorous logical framework analysis. Develop participants’ ability to think logically, evaluate information objectively, make sound decisions in complex and uncertain work environments. The course focuses on structured analysis, critical reasoning, problem-solving, and evidence-based decision-making."
    },
    {
      title: "Change Management for Professional",
      cat: "Management",
      image: changeManagementImage,
      description: "Mastering the human and operational dimensions of organizational transition to ensure business continuity and success. Equip professionals with the knowledge and skills required to effectively manage, support, and sustain change within organisations. Designed to support organisations in navigating transformation initiatives, minimising disruption, and achieving sustainable change outcomes."
    },

    // LANGUAGE CATEGORY
    {
      title: "Language Program for Corporate",
      cat: "Language",
      image: languageCorporateImage,
      description: "A tailored language course designed to equip professionals with practical language skills for effective workplace communication. Focused on real business scenarios, it enhances speaking, writing, and presentation abilities, while strengthening confidence in meetings, negotiations, and cross-cultural interactions. Learners develop clear, professional, and impactful communication skills that drive collaboration and business performance."
    },
    {
      title: "Language Program for Students",
      cat: "Language",
      image: languageStudentsImage,
      description: "This program helps students build strong communication skills for academic success and future careers. Through interactive learning and real-world practice, learners improve their speaking, writing, reading, and listening abilities while gaining confidence in presentations, discussions, and teamwork. The course prepares students to communicate clearly and confidently in both academic and professional environments."
    },
    {
      title: "IELTS & TEFL Preparation Course",
      cat: "Language",
      image: ieltsTeflImage,
      description: "The IELTS and TEFL Preparation Course offers structured training in English language proficiency and teaching methodology. The programme supports participants in meeting international language assessment requirements while developing essential competencies for English language instruction in diverse educational contexts. Learners will develop strategic language and test performance skills across Listening, Reading, Writing, and Speaking, enabling them to meet required band scores for overseas postings, postgraduate study, and regulatory or migration requirements."
    },
    {
      title: "Professional Proofreading",
      cat: "Language",
      image: proofreadingImage,
      description: "Our Professional Proofreading Service ensures your documents are refined, error-free, and aligned with industry standards. We review and enhance: (i) Business reports and proposals (ii) Corporate communications and policy documents (iii) Academic papers and research manuscripts (iv) Marketing materials and website content (v) Tender submissions and official correspondence.\n\nWe also refine sentence structure to improve readability and professional tone. This professional service is suitable for organisations and individuals seeking to: (i) Enhance document credibility and professionalism (ii) Reduce reputational risk from language errors (iii) Improve clarity and impact of key communications (iv) Strengthen submissions for publication, accreditation, or tender processes.\n\nSuitable for corporate teams, executives, researchers, consultants, and professionals who require high-quality written communication."
    },
  ];

  const filtered = activeTab === 'All' ? programs : programs.filter(p => p.cat === activeTab);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Training & Programs</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            World-class programs powered by industry veterans and specialized development frameworks.
          </p>
        </div>
      </div>

      {/* Training Ground Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Learning Hub</h2>
          <p className="text-slate-600">Our physical and virtual environments are thoughtfully designed to foster meaningful professional transformation —empowering individuals and organisations to grow, adapt, and excel in today’s evolving landscape.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingGroundItems.map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Catalog */}
      <section id="courses-catalog" className="mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Course Catalog</h2>
            <p className="text-slate-600 mb-10">Select a category to explore our professional development pathways.</p>

            {/* Centered, Non-Scrolling Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100/50 border border-slate-200 rounded-2xl max-w-fit mx-auto">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveTab(c)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === c
                    ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {filtered.map((p, i) => (
              <ProgramCard key={i} program={p} />
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <p className="text-slate-500 font-medium">No programs found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Tailored Training CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a custom training framework?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10">
              We design specialized internal training systems for enterprise clients, including proprietary curriculum development and internal LMS integration.
            </p>
            <Link to="/contact">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                Consult with an Expert
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;