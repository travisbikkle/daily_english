export interface PredefinedArticle {
  title: string;
  title_chinese: string;
  theme: string;
  sentences: {
    english: string;
    chinese: string;
  }[];
  vocabulary: {
    word: string;
    meaning_en: string;
    meaning_zh: string;
    example: string;
  }[];
}

export const PREDEFINED_ARTICLES: PredefinedArticle[] = [
  {
    title: "The Future of Remote Work",
    title_chinese: "远程工作的未来",
    theme: "Technology and Work",
    sentences: [
      {
        english: "The COVID-19 pandemic has fundamentally transformed how we think about work and productivity.",
        chinese: "新冠疫情从根本上改变了我们对工作和生产力的思考方式。"
      },
      {
        english: "Remote work, once considered a luxury or temporary solution, has become a permanent fixture in many industries.",
        chinese: "远程工作曾经被认为是奢侈品或临时解决方案，现在已成为许多行业的永久性安排。"
      },
      {
        english: "Companies around the world have discovered that employees can be just as productive, if not more so, when working from home.",
        chinese: "世界各地的公司发现，员工在家工作时可以保持同样甚至更高的生产力。"
      },
      {
        english: "This shift has led to significant changes in workplace culture, communication methods, and management strategies.",
        chinese: "这种转变导致了工作场所文化、沟通方式和管理策略的重大变化。"
      },
      {
        english: "Technology has played a crucial role in enabling this transition, with video conferencing, cloud computing, and collaboration tools becoming essential.",
        chinese: "技术在推动这一转变中发挥了关键作用，视频会议、云计算和协作工具变得不可或缺。"
      },
      {
        english: "However, remote work also presents unique challenges, including maintaining work-life balance and fostering team cohesion.",
        chinese: "然而，远程工作也带来了独特的挑战，包括保持工作与生活的平衡以及培养团队凝聚力。"
      },
      {
        english: "The future of work will likely be a hybrid model, combining the best aspects of both remote and office-based work.",
        chinese: "工作的未来很可能是混合模式，结合远程工作和办公室工作的最佳方面。"
      },
      {
        english: "This evolution requires both employers and employees to adapt to new ways of thinking about productivity, collaboration, and workplace culture.",
        chinese: "这种演变要求雇主和员工都适应关于生产力、协作和工作场所文化的新思维方式。"
      }
    ],
    vocabulary: [
      {
        word: "fundamentally",
        meaning_en: "in a basic and important way",
        meaning_zh: "根本上，基础且重要地",
        example: "The internet has fundamentally changed how we communicate."
      },
      {
        word: "fixture",
        meaning_en: "something that is always present or available",
        meaning_zh: "固定物，常驻事务",
        example: "Coffee has become a fixture in most offices."
      },
      {
        word: "cohesion",
        meaning_en: "the state of sticking together or being united",
        meaning_zh: "凝聚力，团结",
        example: "Team cohesion is essential for project success."
      },
      {
        word: "hybrid",
        meaning_en: "combining two different things",
        meaning_zh: "混合的，结合两种不同事物的",
        example: "A hybrid car uses both electricity and gasoline."
      }
    ]
  },
  {
    title: "The Impact of Social Media on Modern Communication",
    title_chinese: "社交媒体对现代交流的影响",
    theme: "Technology and Society",
    sentences: [
      {
        english: "Social media platforms have revolutionized the way we connect, communicate, and share information in the digital age.",
        chinese: "社交媒体平台彻底改变了我们在数字时代连接、沟通和分享信息的方式。"
      },
      {
        english: "These platforms have created unprecedented opportunities for global connectivity, allowing people from different cultures and backgrounds to interact instantly.",
        chinese: "这些平台为全球连接创造了前所未有的机会，让来自不同文化和背景的人们能够即时互动。"
      },
      {
        english: "However, the rise of social media has also brought significant challenges to our communication patterns and social relationships.",
        chinese: "然而，社交媒体的兴起也给我们的沟通模式和社会关系带来了重大挑战。"
      },
      {
        english: "Many people find themselves spending excessive amounts of time on these platforms, often at the expense of face-to-face interactions.",
        chinese: "许多人发现自己花费过多时间在这些平台上，往往以牺牲面对面互动为代价。"
      },
      {
        english: "The instant nature of social media communication has changed our expectations for response times and the depth of our conversations.",
        chinese: "社交媒体沟通的即时性改变了我们对回复时间和对话深度的期望。"
      },
      {
        english: "Moreover, the curated nature of social media content can create unrealistic expectations and contribute to feelings of inadequacy.",
        chinese: "此外，社交媒体内容的精心策划性质可能产生不切实际的期望，并导致不足感。"
      },
      {
        english: "Despite these challenges, social media has also facilitated important social movements and provided platforms for marginalized voices to be heard.",
        chinese: "尽管存在这些挑战，社交媒体也促进了重要的社会运动，并为边缘化声音提供了被听到的平台。"
      },
      {
        english: "The key to healthy social media use lies in finding balance and being mindful of how these platforms affect our mental health and relationships.",
        chinese: "健康使用社交媒体的关键在于找到平衡，并注意这些平台如何影响我们的心理健康和人际关系。"
      }
    ],
    vocabulary: [
      {
        word: "revolutionized",
        meaning_en: "completely changed something in a positive way",
        meaning_zh: "彻底改变，使革命化",
        example: "Smartphones have revolutionized how we access information."
      },
      {
        word: "unprecedented",
        meaning_en: "never having happened or existed before",
        meaning_zh: "前所未有的",
        example: "The pandemic created unprecedented challenges for businesses."
      },
      {
        word: "curated",
        meaning_en: "carefully selected and organized",
        meaning_zh: "精心挑选和组织的",
        example: "The museum has a carefully curated collection of modern art."
      },
      {
        word: "marginalized",
        meaning_en: "treated as unimportant or powerless",
        meaning_zh: "边缘化的",
        example: "The program aims to help marginalized communities."
      }
    ]
  },
  {
    title: "The Importance of Environmental Conservation",
    title_chinese: "环境保护的重要性",
    theme: "Environment and Sustainability",
    sentences: [
      {
        english: "Environmental conservation has become one of the most critical issues facing humanity in the 21st century.",
        chinese: "环境保护已成为21世纪人类面临的最关键问题之一。"
      },
      {
        english: "The rapid pace of industrialization and urbanization has led to significant environmental degradation across the globe.",
        chinese: "工业化和城市化的快速发展导致了全球范围内的严重环境退化。"
      },
      {
        english: "Climate change, deforestation, pollution, and loss of biodiversity are just some of the environmental challenges we must address.",
        chinese: "气候变化、森林砍伐、污染和生物多样性丧失只是我们必须应对的一些环境挑战。"
      },
      {
        english: "These environmental issues not only affect the natural world but also have profound implications for human health, economic stability, and social well-being.",
        chinese: "这些环境问题不仅影响自然界，还对人类健康、经济稳定和社会福祉产生深远影响。"
      },
      {
        english: "Conservation efforts require cooperation between governments, businesses, communities, and individuals to be truly effective.",
        chinese: "保护工作需要政府、企业、社区和个人之间的合作才能真正有效。"
      },
      {
        english: "Simple actions like reducing waste, conserving energy, and supporting sustainable practices can make a significant difference when adopted by many people.",
        chinese: "减少浪费、节约能源和支持可持续实践等简单行动在被许多人采用时会产生重大影响。"
      },
      {
        english: "Education plays a crucial role in raising awareness about environmental issues and inspiring action for conservation.",
        chinese: "教育在提高环境问题意识和激励保护行动方面发挥着关键作用。"
      },
      {
        english: "The choices we make today will determine the quality of life for future generations and the health of our planet.",
        chinese: "我们今天做出的选择将决定子孙后代的生活质量和我们星球健康。"
      }
    ],
    vocabulary: [
      {
        word: "degradation",
        meaning_en: "the process of becoming worse or less valuable",
        meaning_zh: "退化，恶化",
        example: "Soil degradation is a serious problem in many agricultural areas."
      },
      {
        word: "biodiversity",
        meaning_en: "the variety of plant and animal life in a particular habitat",
        meaning_zh: "生物多样性",
        example: "The Amazon rainforest has incredible biodiversity."
      },
      {
        word: "sustainable",
        meaning_en: "able to continue over a period of time without harming the environment",
        meaning_zh: "可持续的",
        example: "We need to find sustainable solutions to energy problems."
      },
      {
        word: "implications",
        meaning_en: "the possible effects or results of an action or decision",
        meaning_zh: "可能的影响，含义",
        example: "The new policy has serious implications for small businesses."
      }
    ]
  }
];

export function getRandomArticle(): PredefinedArticle {
  const randomIndex = Math.floor(Math.random() * PREDEFINED_ARTICLES.length);
  return PREDEFINED_ARTICLES[randomIndex];
} 