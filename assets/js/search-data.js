// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-ongoing-activities",
          title: "ongoing activities",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "activities-call-for-papers-for-special-issue-on-intelligent-rehabilitation-technology-incorporating-multimodal-information-feedback-and-stimulation-in-frontiers-in-bioengineering-and-biotechnology",
          title: 'Call for papers for special issue on “Intelligent Rehabilitation Technology Incorporating Multimodal Information...',
          description: "",
          section: "Activities",},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-imtp-intention-matching-trajectory-prediction-for-autonomous-vehicles-received-best-paper-award-at-proceedings-of-the-2023-29th-international-conference-on-mechatronics-and-machine-vision-in-practice-m2vip",
          title: 'Our paper “IMTP: Intention-Matching Trajectory Prediction for Autonomous Vehicles” received Best Paper Award...',
          description: "",
          section: "News",},{id: "news-our-paper-distributed-collision-free-bearing-coordination-of-multi-uav-systems-with-actuator-faults-and-time-delays-was-accepted-by-ieee-transactions-on-intelligent-transportation-systems",
          title: 'Our paper “Distributed Collision-Free Bearing Coordination of Multi-UAV Systems With Actuator Faults and...',
          description: "",
          section: "News",},{id: "news-our-paper-precision-robotic-assembly-of-industrial-components-with-robust-pose-estimation-and-cooperative-manipulation-was-selected-to-the-finalist-of-best-paper-award-at-proceedings-of-the-2024-ieee-international-conference-on-industrial-technology-icit",
          title: 'Our paper “Precision Robotic Assembly of Industrial Components with Robust Pose Estimation and...',
          description: "",
          section: "News",},{id: "news-our-paper-a-twisting-mechanism-with-parallel-springs-for-series-variable-stiffness-actuator-was-accepted-by-ieee-asme-transactions-on-mechatronics",
          title: 'Our paper “A Twisting Mechanism With Parallel Springs for Series Variable Stiffness Actuator”...',
          description: "",
          section: "News",},{id: "news-our-paper-a-survey-of-multi-agent-systems-on-distributed-formation-control-was-accepted-by-unmanned-systems",
          title: 'Our paper “A Survey of Multi-Agent Systems on Distributed Formation Control” was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-progressive-learning-based-assist-as-needed-control-for-ankle-rehabilitation-was-accepted-by-ieee-transactions-on-cognitive-and-developmental-systems",
          title: 'Our paper “Progressive-Learning-Based Assist-as-Needed Control for Ankle Rehabilitation” was accepted by IEEE Transactions...',
          description: "",
          section: "News",},{id: "news-our-paper-improvement-of-error-related-potential-monitoring-in-brain-computer-interface-based-on-optimal-feature-dimensionality-selection-was-accepted-by-ieee-sensors-journal",
          title: 'Our paper “Improvement of error-related potential monitoring in brain-computer interface based on optimal...',
          description: "",
          section: "News",},{id: "news-zhenhong-served-as-organizing-chair-for-30th-international-conference-on-mechatronics-and-machine-vision-in-practice-m2vip-2024",
          title: 'Zhenhong served as Organizing Chair for 30th International Conference on Mechatronics and Machine...',
          description: "",
          section: "News",},{id: "news-zhenhong-served-as-technical-committee-for-ieee-international-conference-on-omni-layer-intelligent-systems-2025",
          title: 'Zhenhong served as Technical Committee for IEEE International Conference on Omni-layer Intelligent Systems...',
          description: "",
          section: "News",},{id: "news-zhenhong-joined-academic-committee-of-the-ieee-uk-and-ireland-robotics-amp-amp-autonomous-systems-chapter",
          title: 'Zhenhong joined Academic Committee of the IEEE UK and Ireland Robotics &amp;amp;amp; Autonomous...',
          description: "",
          section: "News",},{id: "news-zhenhong-served-as-organizing-committee-for-ieee-international-conference-on-robotics-and-control-engineering-2025",
          title: 'Zhenhong served as Organizing Committee for IEEE International Conference on Robotics and Control...',
          description: "",
          section: "News",},{id: "news-zhenhong-served-as-poster-chair-for-8th-annual-ieee-uk-and-ireland-robotics-and-automation-society-chapter-conference-2025",
          title: 'Zhenhong served as Poster Chair for 8th Annual IEEE UK and Ireland Robotics...',
          description: "",
          section: "News",},{id: "news-zhenhong-served-as-local-arrangement-chair-for-ieee-international-conference-on-advanced-robotics-and-mechatronics-2025",
          title: 'Zhenhong served as Local Arrangement Chair for IEEE International Conference on Advanced Robotics...',
          description: "",
          section: "News",},{id: "news-zhenhong-served-as-workshop-chair-for-31th-international-conference-on-mechatronics-and-machine-vision-in-practice-m2vip-2025",
          title: 'Zhenhong served as Workshop Chair for 31th International Conference on Mechatronics and Machine...',
          description: "",
          section: "News",},{id: "news-we-organized-a-special-issue-on-intelligent-rehabilitation-technology-incorporating-multimodal-information-feedback-and-stimulation-in-frontiers-in-bioengineering-and-biotechnology",
          title: 'We organized a special issue on “Intelligent Rehabilitation Technology Incorporating Multimodal Information Feedback...',
          description: "",
          section: "News",},{id: "news-zhenhong-was-elected-as-a-senior-member-of-the-ieee",
          title: 'Zhenhong was elected as a Senior Member of the IEEE.',
          description: "",
          section: "News",},{id: "news-our-paper-instance-based-transfer-learning-with-similarity-aware-subject-selection-for-cross-subject-ssvep-based-bcis-was-accepted-by-ieee-journal-of-biomedical-and-health-informatics",
          title: 'Our paper “Instance-Based Transfer Learning with Similarity-Aware Subject Selection for Cross-Subject SSVEP-Based BCIs”...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
