import { AboutSection } from '@/api/about';
import nataliaSeated from "@/assets/natalia-seated.jpg";

// Mock data pentru pagina Despre - folosit ca fallback când backend-ul nu are date
export const mockAboutSections: AboutSection[] = [
  // 1. Hero Section
  {
    id: 1,
    sectionType: 'hero',
    titleEn: 'About Me',
    titleRo: 'Despre Mine',
    titleRu: 'Обо мне',
    subtitleEn: 'Psychologist & Psychotherapist',
    subtitleRo: 'Psiholog & Psihoterapeut',
    subtitleRu: 'Психолог и Психотерапевт',
    contentEn: `<p>I am Natalia Șargu, a psychologist and integrative psychotherapist dedicated to supporting people in their journey of self-discovery and healing.</p>
    <p>With experience in anxiety, depression, trauma, and personal development, I offer a safe and empathetic space where you can explore your emotions, understand behavioral patterns, and build resources for a balanced and authentic life.</p>`,
    contentRo: `<p>Sunt Natalia Șargu, psiholog și psihoterapeut integrativ, dedicat sprijinirii oamenilor în călătoria lor de autocunoaștere și vindecare.</p>
    <p>Cu experiență în lucrul cu anxietate, depresie, traumă și dezvoltare personală, ofer un spațiu sigur și empatic unde poți explora emoțiile, înțelege tiparele comportamentale și construi resurse pentru o viață echilibrată și autentică.</p>`,
    contentRu: `<p>Я Наталья Шаргу, психолог и интегративный психотерапевт, посвятившая себя поддержке людей в их пути самопознания и исцеления.</p>
    <p>Имея опыт работы с тревогой, депрессией, травмой и личностным развитием, я предлагаю безопасное и эмпатичное пространство, где вы можете исследовать свои эмоции, понять поведенческие паттерны и построить ресурсы для сбалансированной и аутентичной жизни.</p>`,
    imageUrl: nataliaSeated,
    imageAltTextEn: 'Natalia Șargu - Psychologist and Psychotherapist',
    imageAltTextRo: 'Natalia Șargu - Psiholog și Psihoterapeut',
    imageAltTextRu: 'Наталья Шаргу - Психолог и Психотерапевт',
    displayOrder: 0,
    isActive: true,
    backgroundColor: 'bg-background'
  },

  // 2. Approach Section
  {
    id: 2,
    sectionType: 'approach',
    titleEn: 'My Therapeutic Approach',
    titleRo: 'Abordarea Mea Terapeutică',
    titleRu: 'Мой Терапевтический Подход',
    contentEn: `<p>I work within an <strong>integrative framework</strong>, combining techniques from cognitive-behavioral therapy (CBT), acceptance and commitment therapy (ACT), mindfulness, and trauma-focused approaches.</p>
    <p>Each person is unique, which is why I adapt my approach to your specific needs, creating a personalized therapeutic plan that respects your pace and values.</p>
    <p>In our sessions, I focus on:</p>
    <ul>
      <li>Understanding the roots of current difficulties</li>
      <li>Developing practical coping strategies</li>
      <li>Building emotional resilience</li>
      <li>Fostering authentic personal growth</li>
    </ul>`,
    contentRo: `<p>Lucrez într-un <strong>cadru integrativ</strong>, combinând tehnici din terapia cognitiv-comportamentală (TCC), terapia acceptării și angajamentului (ACT), mindfulness și abordări focalizate pe traumă.</p>
    <p>Fiecare persoană este unică, motiv pentru care adaptez abordarea la nevoile tale specifice, creând un plan terapeutic personalizat care respectă ritmul și valorile tale.</p>
    <p>În ședințele noastre, mă concentrez pe:</p>
    <ul>
      <li>Înțelegerea rădăcinilor dificultăților actuale</li>
      <li>Dezvoltarea strategiilor practice de coping</li>
      <li>Construirea resilienței emocionale</li>
      <li>Promovarea creșterii personale autentice</li>
    </ul>`,
    contentRu: `<p>Я работаю в <strong>интегративной структуре</strong>, сочетая техники когнитивно-поведенческой терапии (КПТ), терапии принятия и ответственности (ACT), майндфулнесс и подходов, ориентированных на травму.</p>
    <p>Каждый человек уникален, поэтому я адаптирую свой подход к вашим конкретным потребностям, создавая персонализированный терапевтический план, который уважает ваш темп и ценности.</p>
    <p>На наших сессиях я фокусируюсь на:</p>
    <ul>
      <li>Понимании корней текущих трудностей</li>
      <li>Разработке практических стратегий преодоления</li>
      <li>Построении эмоциональной устойчивости</li>
      <li>Содействии аутентичному личностному росту</li>
    </ul>`,
    displayOrder: 1,
    isActive: true,
    backgroundColor: 'bg-secondary'
  },

  // 3. Values Section
  {
    id: 3,
    sectionType: 'values',
    titleEn: 'Core Values',
    titleRo: 'Valorile Mele',
    titleRu: 'Мои Ценности',
    items: [
      {
        iconName: 'Heart',
        titleEn: 'Empathy',
        titleRo: 'Empatie',
        titleRu: 'Эмпатия',
        descriptionEn: 'I believe that genuine understanding and compassion are the foundation of therapeutic healing.',
        descriptionRo: 'Cred că înțelegerea genuină și compasiunea sunt fundamentul vindecării terapeutice.',
        descriptionRu: 'Я верю, что истинное понимание и сострадание являются основой терапевтического исцеления.',
        orderIndex: 0
      },
      {
        iconName: 'Shield',
        titleEn: 'Safety',
        titleRo: 'Siguranță',
        titleRu: 'Безопасность',
        descriptionEn: 'I create a confidential and non-judgmental space where you can express yourself freely.',
        descriptionRo: 'Creez un spațiu confidențial și lipsit de judecăți unde te poți exprima liber.',
        descriptionRu: 'Я создаю конфиденциальное и не осуждающее пространство, где вы можете свободно выражать себя.',
        orderIndex: 1
      },
      {
        iconName: 'Users',
        titleEn: 'Collaboration',
        titleRo: 'Colaborare',
        titleRu: 'Сотрудничество',
        descriptionEn: 'Therapy is a collaborative journey where we work together towards your goals.',
        descriptionRo: 'Terapia este o călătorie colaborativă unde lucrăm împreună către obiectivele tale.',
        descriptionRu: 'Терапия - это совместное путешествие, где мы работаем вместе к вашим целям.',
        orderIndex: 2
      },
      {
        iconName: 'Sparkles',
        titleEn: 'Authenticity',
        titleRo: 'Autenticitate',
        titleRu: 'Аутентичность',
        descriptionEn: 'I encourage you to be genuine and true to yourself in a supportive environment.',
        descriptionRo: 'Te încurajez să fii autentic și fidel ție însuți într-un mediu de susținere.',
        descriptionRu: 'Я поощряю вас быть искренними и верными себе в поддерживающей среде.',
        orderIndex: 3
      },
      {
        iconName: 'Target',
        titleEn: 'Growth',
        titleRo: 'Creștere',
        titleRu: 'Рост',
        descriptionEn: 'I believe in your capacity for change and personal development.',
        descriptionRo: 'Cred în capacitatea ta de schimbare și dezvoltare personală.',
        descriptionRu: 'Я верю в вашу способность к изменениям и личностному развитию.',
        orderIndex: 4
      },
      {
        iconName: 'Eye',
        titleEn: 'Awareness',
        titleRo: 'Conștientizare',
        titleRu: 'Осознанность',
        descriptionEn: 'Self-awareness is the first step towards meaningful change.',
        descriptionRo: 'Auto-conștientizarea este primul pas către o schimbare semnificativă.',
        descriptionRu: 'Самосознание - это первый шаг к значимым изменениям.',
        orderIndex: 5
      }
    ],
    displayOrder: 2,
    isActive: true,
    backgroundColor: 'bg-card'
  },

  // 4. Expertise Section
  {
    id: 4,
    sectionType: 'expertise',
    titleEn: 'Areas of Expertise',
    titleRo: 'Domenii de Expertiză',
    titleRu: 'Области Экспертизы',
    items: [
      {
        iconName: 'Brain',
        titleEn: 'Anxiety & Panic Attacks',
        titleRo: 'Anxietate și Atacuri de Panică',
        titleRu: 'Тревога и Панические Атаки',
        descriptionEn: 'I help you understand anxiety mechanisms and develop effective management strategies.',
        descriptionRo: 'Te ajut să înțelegi mecanismele anxietății și să dezvolți strategii eficiente de gestionare.',
        descriptionRu: 'Я помогаю вам понять механизмы тревоги и разработать эффективные стратегии управления.',
        orderIndex: 0
      },
      {
        iconName: 'Heart',
        titleEn: 'Chronic Stress & Burnout',
        titleRo: 'Stres Cronic și Epuizare',
        titleRu: 'Хронический Стресс и Выгорание',
        descriptionEn: 'Together we identify stress sources and build resilience resources.',
        descriptionRo: 'Împreună identificăm sursele stresului și construim resurse de reziliență.',
        descriptionRu: 'Вместе мы выявляем источники стресса и строим ресурсы устойчивости.',
        orderIndex: 1
      },
      {
        iconName: 'Leaf',
        titleEn: 'Depression',
        titleRo: 'Depresie',
        titleRu: 'Депрессия',
        descriptionEn: 'I offer support in the recovery process and rebuilding life meaning.',
        descriptionRo: 'Ofer sprijin în procesul de recuperare și reconstrucție a sensului vieții.',
        descriptionRu: 'Я предлагаю поддержку в процессе восстановления и воссоздания смысла жизни.',
        orderIndex: 2
      },
      {
        iconName: 'Users',
        titleEn: 'Relationship Difficulties',
        titleRo: 'Dificultăți Relaționale',
        titleRu: 'Трудности в Отношениях',
        descriptionEn: 'We explore relational patterns and develop healthy communication skills.',
        descriptionRo: 'Explorăm tiparele relaționale și dezvoltăm competențe de comunicare sănătoasă.',
        descriptionRu: 'Мы исследуем паттерны отношений и развиваем навыки здорового общения.',
        orderIndex: 3
      },
      {
        iconName: 'Shield',
        titleEn: 'Emotional Blockages',
        titleRo: 'Blocaje Emoționale',
        titleRu: 'Эмоциональные Блокировки',
        descriptionEn: 'We identify and process blocked emotions to release energy and vitality.',
        descriptionRo: 'Identificăm și procesăm emoțiile blocate pentru a elibera energie și vitalitate.',
        descriptionRu: 'Мы выявляем и обрабатываем заблокированные эмоции для высвобождения энергии и жизненной силы.',
        orderIndex: 4
      },
      {
        iconName: 'Sparkles',
        titleEn: 'Personal Development',
        titleRo: 'Dezvoltare Personală',
        titleRu: 'Личностное Развитие',
        descriptionEn: 'I support you in self-discovery and realizing your personal potential.',
        descriptionRo: 'Te susțin în procesul de autocunoaștere și realizare a potențialului personal.',
        descriptionRu: 'Я поддерживаю вас в самопознании и реализации личностного потенциала.',
        orderIndex: 5
      }
    ],
    displayOrder: 3,
    isActive: true,
    backgroundColor: 'bg-background'
  },

  // 5. Qualifications Section
  {
    id: 5,
    sectionType: 'qualifications',
    titleEn: 'Professional Qualifications',
    titleRo: 'Calificări Profesionale',
    titleRu: 'Профессиональная Квалификация',
    items: [
      {
        iconName: 'Award',
        titleEn: 'Psychologist, Master in Clinical Psychology',
        titleRo: 'Psiholog, Master în Psihologie Clinică',
        titleRu: 'Психолог, Магистр клинической психологии',
        descriptionEn: '',
        descriptionRo: '',
        descriptionRu: '',
        orderIndex: 0
      },
      {
        iconName: 'Award',
        titleEn: 'Master in Organizational Psychology',
        titleRo: 'Master în Psihologie Organizațională',
        titleRu: 'Магистр организационной психологии',
        descriptionEn: '',
        descriptionRo: '',
        descriptionRu: '',
        orderIndex: 1
      },
      {
        iconName: 'Award',
        titleEn: 'Integrative Psychotherapist in Supervision',
        titleRo: 'Psihoterapeut Integrativ în Supervizare',
        titleRu: 'Интегративный психотерапевт под супервизией',
        descriptionEn: '',
        descriptionRo: '',
        descriptionRu: '',
        orderIndex: 2
      },
      {
        iconName: 'Award',
        titleEn: 'Certification - Personal Development Specialist',
        titleRo: 'Certificare – Specialist în Dezvoltare Personală',
        titleRu: 'Сертификация - Специалист по личностному развитию',
        descriptionEn: '',
        descriptionRo: '',
        descriptionRu: '',
        orderIndex: 3
      },
      {
        iconName: 'Award',
        titleEn: 'Specialization in Anxiety Work',
        titleRo: 'Specializare în Lucrul cu Anxietatea',
        titleRu: 'Специализация в работе с тревогой',
        descriptionEn: '',
        descriptionRo: '',
        descriptionRu: '',
        orderIndex: 4
      },
      {
        iconName: 'Award',
        titleEn: 'Specialization in Trauma Work',
        titleRo: 'Specializare în Lucrul cu Trauma',
        titleRu: 'Специализация в работе с травмой',
        descriptionEn: '',
        descriptionRo: '',
        descriptionRu: '',
        orderIndex: 5
      },
      {
        iconName: 'Award',
        titleEn: 'Specialization in Mindfulness and Emotional Regulation',
        titleRo: 'Specializare în Tehnici de Mindfulness și Reglare Emoțională',
        titleRu: 'Специализация в техниках майндфулнесс и эмоциональной регуляции',
        descriptionEn: '',
        descriptionRo: '',
        descriptionRu: '',
        orderIndex: 6
      }
    ],
    displayOrder: 4,
    isActive: true,
    backgroundColor: 'bg-secondary'
  },

  // 6. Diaspora Section
  {
    id: 6,
    sectionType: 'diaspora',
    titleEn: 'Support for Diaspora',
    titleRo: 'Suport pentru Diaspora',
    titleRu: 'Поддержка для Диаспоры',
    contentEn: `<p>I understand the unique challenges faced by those living away from home. Cultural adaptation, identity, feelings of loneliness, and family distance can create emotional pressures that affect daily well-being.</p>
    <p>I offer online sessions tailored to diaspora needs, in a space where you can explore these experiences in Romanian, Russian, or English.</p>`,
    contentRo: `<p>Înțeleg provocările unice cu care se confruntă cei care trăiesc departe de casă. Adaptarea culturală, identitatea, sentimentele de singurătate și distanța de familie pot crea presiuni emoționale care afectează bunăstarea zilnică.</p>
    <p>Ofer ședințe online adaptate nevoilor diasporei, într-un spațiu unde poți explora aceste experiențe în română, rusă sau engleză.</p>`,
    contentRu: `<p>Я понимаю уникальные вызовы, с которыми сталкиваются те, кто живет вдали от дома. Культурная адаптация, идентичность, чувство одиночества и расстояние от семьи могут создавать эмоциональное давление, которое влияет на повседневное благополучие.</p>
    <p>Я предлагаю онлайн-сессии, адаптированные к потребностям диаспоры, в пространстве, где вы можете исследовать этот опыт на румынском, русском или английском языках.</p>`,
    ctaButtons: [
      {
        textEn: 'Schedule a Session',
        textRo: 'Programează o Ședință',
        textRu: 'Записаться на Сессию',
        url: '/contact',
        variant: 'primary',
        icon: 'Calendar'
      }
    ],
    displayOrder: 5,
    isActive: true,
    backgroundColor: 'bg-card'
  },

  // 7. CTA Section
  {
    id: 7,
    sectionType: 'cta',
    titleEn: 'Ready to Start?',
    titleRo: 'Gata să Începi?',
    titleRu: 'Готовы Начать?',
    contentEn: `<p>Taking the first step towards change is a courageous act. I'm here to support you on this journey.</p>
    <p>Schedule a consultation session to discuss together how I can help you in your specific situation.</p>`,
    contentRo: `<p>A face primul pas către schimbare este un act curajos. Sunt aici să te sprijin în această călătorie.</p>
    <p>Programează o ședință de consultație pentru a discuta împreună cum pot fi de ajutor în situația ta specifică.</p>`,
    contentRu: `<p>Сделать первый шаг к изменениям - это смелый поступок. Я здесь, чтобы поддержать вас в этом путешествии.</p>
    <p>Запишитесь на консультацию, чтобы обсудить вместе, как я могу помочь вам в вашей конкретной ситуации.</p>`,
    ctaButtons: [
      {
        textEn: 'Schedule a Consultation',
        textRo: 'Programează o Consultație',
        textRu: 'Записаться на Консультацию',
        url: '/contact',
        variant: 'primary',
        icon: 'Calendar'
      },
      {
        textEn: 'Learn About Services',
        textRo: 'Află despre Servicii',
        textRu: 'Узнать об Услугах',
        url: '/servicii',
        variant: 'outline',
        icon: 'ArrowRight'
      }
    ],
    displayOrder: 6,
    isActive: true,
    backgroundColor: 'bg-accent/5'
  }
];
