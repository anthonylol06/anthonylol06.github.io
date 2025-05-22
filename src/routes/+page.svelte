<script>
  import Experience from '$component/Experience.svelte';
  import ScrollableCardList from '$component/ScrollableCardList.svelte';

  const cardData = [
    {
      title: 'CUHK iCar App',
      description:
        'Android & iOS Flutter app to control CUHK iCar with speech recognition and more.',
    },
    {
      title: 'Omegle Clone',
      description: 'Multi-person text-and-video chat website using React, Express and SocketIO.'
    },
    {
      title: 'Sales Management System',
      description: 'Command-line sales management system using MySQL and Java.'
    },
    {
      title: 'Mini iPerf',
      description: 'Throughput testing tool using TCP and socket programming in C.'
    },
    {
      title: 'AI translation App',
      description:
        'Native Android app using AI models to translate voice, with Voice RAG feature. Written in Kotlin'
    },
    {
      title: 'Simplified PageRank',
      description:
        'A simplified PageRank algorithm using Java and Hadoop with distributed computing.'
    },
    {
      title: 'More Yet to Come!!!',
      description: 'Stay tuned to GitHub for more projects and works!'
    }
  ];

  const experiences = [
    {
      title: 'Part-time Software Engineer',
      company: 'AppicIDEA IT Solution Limited',
      startDate: new Date('2024-09'),
      endDate: new Date('2024-10'),
      location: 'Hong Kong',
      descriptions: [
        'Skills: Node.js, Express, TypeScript, Jest, Test-driven Development, Backend Development, Object-oriented Programming',
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'AppicIDEA IT Solution Limited',
      startDate: new Date('2024-07'),
      endDate: new Date('2024-08'),
      location: 'Hong Kong',
      descriptions: ['Skills: React Native, TypeScript, Scrum & Agile, Mobile App Development']
    },
    {
      title: 'Toolkit team Intern',
      company: 'CUHK JC AI for the Future Project',
      startDate: new Date('June 2023'),
      endDate: new Date('August 2023'),
      location: 'Hong Kong',
      descriptions: [
        'Skills: Flutter, Dart, AI, Teaching, Event handling, Speech recognition, Bluetooth (BLE), Mobile App Development'
      ]
    }
  ];
</script>

<title>Anthony Lo</title>
<meta
  name="description"
  content="Anthony Lo, Software Developer, expreienced in software development."
/>

<div
  class="flex flex-col justify-center gap-y-6 overflow-hidden bg-white p-6 shadow-lg backdrop:backdrop-blur-xl backdrop:backdrop-filter md:max-w-screen-sm md:p-10"
>
  <div class="flex flex-col gap-4 py-2">
    <div class="flex">
      <p class="text-left text-lg font-bold">
        Anthony LO <span class="px-2 text-sm font-light sm:px-4"
          >Software Developer | AI | ML
        </span>
      </p>
    </div>
    <div class="flex gap-4">
      <a href="https://github.com/anthonylol06" target="_blank" rel="noopener noreferrer">
        <img class="h-8 w-8" src="/github.png" alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/anthony-lo-yh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="h-8 w-8" src="/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
  </div>

  <div class="flex flex-col gap-2 py-2">
    <h1 class="pb-2 text-left text-lg font-bold">Biography</h1>
    <p class="break-words text-base font-normal">
      <span class="font-bold">Anthony LO</span> is a Computer Science Graduate from CUHK. He developed
      mobile apps, full-stack webpages, AI models, internal devtools and more! He is interested in cloud
      computing, AI, software development and computer network.
    </p>
  </div>

  <div class="flex flex-col gap-2 py-2">
    <h1 class="pb-2 text-left text-lg font-bold">Contact</h1>
    <p class="break-words text-base font-normal">
      Email: <a href="mailto:anthonylocuhk@gmail.com" class="text-blue-500">anthonylocuhk@gmail.com</a>
    </p>
  </div>

  <div class="flex flex-col gap-2 py-2">
    <p class="py-2 text-left text-lg font-bold">Education</p>
    <p class="text-left text-lg font-medium">
      BSc Computer Science (CUHK) <span class="text-sm font-light">2021 - 2025</span>
    </p>
    <p class="text-md text-left font-medium">Database and Infomation Systems Stream</p>
    <p class="text-md text-left font-medium">Courses</p>
    <p class="text-base font-light leading-7">
      Data Structures and Algorithms, Operating System, Database, AI, Machine Learning, Deep
      Learning, Cloud Computing, Blockchain, Cybersecurity, Computer Network, Software Engineering
    </p>
    <p class="text-md text-left font-medium">Awards</p>
    <div class="flex flex-col gap-2">
      <p class="text-base font-light">College Service Award 2023 & 2024</p>
      <p class="text-base font-light">Innovation and Creativity Award 2024</p>
    </div>
    <p class="text-md text-left font-medium">Final Year Project</p>
    <div class="flex flex-col gap-2">
      <p class="text-base font-light">AI-Text Detection</p>
      <p class="text-base font-light">
        Supervisor: <a href="https://tsungyiho.github.io/" target="_blank" class="text-blue-500"
          >Prof. Tsung-Yi Ho</a
        >
      </p>
      <p class="text-base font-light">
        Advisor: <a href="https://gregxmhu.github.io/" target="_blank" class="text-blue-500"
          >Mr. Xiaomeng Hu</a
        >
      </p>
      <p class="text-base font-light">
        Skills: Python, Hugging Face, Bash, PyTorch, sklearn, numpy, matplotlib, NLP, LLMs, Data
        Visualization
      </p>
    </div>
  </div>

  <div class="flex flex-col py-2">
    <h1 class="py-4 text-left text-lg font-bold">Working Experience</h1>
    <div class="flex flex-col gap-8">
      {#each experiences as experience}
        <Experience {...experience} />
      {/each}
    </div>
  </div>

  <div class="flex flex-col gap-1 py-2">
    <h1 class="py-2 text-left text-lg font-bold">Selected Projects</h1>
    <ScrollableCardList cards={cardData} />
  </div>

  <div class="flex flex-col gap-1 py-2">
    <h1 class="py-2 text-left text-lg font-bold">Other Certificates</h1>
    <p class="text-base font-light">Bloomberg Finance Fundamentals</p>
    <p class="text-base font-light">Bloomberg Market Concepts</p>
  </div>
</div>
