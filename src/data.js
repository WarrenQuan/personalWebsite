import { Link, GitHub, Brush, Folder, FileOpen } from '@mui/icons-material';
export const selectedPortfolio = [
    {
        id: 1,
        title: "Amazon 🍌",
        img:
            "assets/NIH.png",
        role: "Software Engineer Intern",
        date: "May 2023 - Present",
        location: "Seattle, WA",
        link: "",
        resume: [<p>Develop full-stack operational tools displaying Amazon Grocery delivery time slots in sortable and filterable table and cards format, optimizing 50+ engineers’ on-call process and communication to 300+ million Amazon users</p>, <p>Program software using <b>React/TypeScript</b> front-end and <b>Java</b> back-end with <b>AWS CDK</b> infrastructure as code for <b>CloudFormation</b> resource provision and creating <b>API Gateway</b> with <b>Lambda</b> proxy integration to call internal API </p>, <p>Author low-level design document, scoping and outlining technical and architectural details of software system </p>,  <p>Direct daily stand-ups, sprint planning, retrospectives, sprint reviews, and backlog grooming sessions as Scrum Master for sprint, promoting agile methodologies and ensuring alignment between team and stakeholders</p>
            ]
    },
    
    {
        id: 2,
        title: "National Institutes of Health 🫀",
        img:
            "assets/NIH.png",
        role: "Software Engineer Intern",
        date: "June 2022 - Present",
        location: "Washington, D.C.",
        link: "",
        resume: [<p>One of the <b>159/1600 fellows</b>  selected for Coding it Forward's Civic Digital Fellowship to work as a software engineer for the National Institutes of Health</p>,
        <p>Integrated natural language processing Doc2vec model and neural network, support vector machine, and logistic regression machine learning algorithms to classify Office of Aids research grants, visualizing prediction accuracy and results with webpage developed using StreamLit framework in <b>Python</b> and <b>SQLite3</b> for user authentication and deployed for <b>18,000+ NIH employees</b> internal use 
        </p>,
        <p>Embedded interactive heat map chart with <b>Plotly Python library</b> to display confidence level of predicted grants</p>,
        <p>Processing <b>JSON</b> retrieved from <b>NIH RePorter REST API</b> from user-inputted IDs to output grant information</p>,  
            ]
    },
      {
        id: 1,
        title: "AI Image Generation and Chatbot of Myself 🤖",
        img:
            "", role: "",
        date: "February 2023 - May 2023",
        location: "",
        link: <p><a href="https://drive.google.com/file/d/1apKPGjP6w0qJqan8S0YdbtSOSU8kbxUf/view?usp=sharing"><Link className='icon' />Overview</a> </p>,
        resume: [<p>Implemented transformers model and fine-tuned <b>Microsoft’s DialoGPT model</b> to train chatbot on personal iMessage conversations and coded unconditional art generation with <b>Hugging Face’s Diffusers library</b> in <b>Python</b> on personal photos, cultivating results into paintings and interactive pieces for solo art exhibition next year</p>],
    },
    {
        id: 1,
        title: "Prediction of Chronic Diseases Across United States 🧑‍⚕️",
        img:
            "", role: "",
        date: "January 2023 - May 2023",
        location: "",
        link: <p><a href="https://drive.google.com/file/d/1wuKBUeIP7ih0KBrVBFmQpPdhWanwQsJY/view?usp=sharing"><Link className='icon' />Research Paper PDF</a> </p>,
        resume: [<p>Analyzed correlations between chronic illnesses with diet and exercise, processed and visualized data through <b>Python panda</b> DataFrame and <b>seaborn</b>  heatmaps, composed research paper under Professor O. Troyanskaya</p>,<p>Compiled linear, random forest, and SGD regression models with <b>scikit-learn</b> library, training based on nutritional habits and outputting the prevalence estimate of chronic illnesses with average R2 accuracy of 0.81</p>],
    },
    
    {
        id: 3,
        title: "Hoagie 🥪",
        img:
            "",
        role: "Software Developer",
        date: "  September 2021 - Present",
        location: "Princeton, NJ",
        link: <a href="https://hoagie.io/"><Link className='icon' />hoagie.io</a>,
        resume: [<p>Improved HoagieMail application, new application sending all Princeton residential colleges mailing lists, by developing home page using <b>React</b> for <b>1720+ users</b> sending <b>700+ monthly emails</b></p>]
    },
    {
        id: 4,
        title: "The Daily Princetonian 🐯",
        img:
            "", role: "Software Developer",
        date: "September 2020 - January 2021",
        location: "Princeton, NJ",
        link: <a href="https://dailyprincetonian.com"><Link className='icon' />dailyprincetonian.com</a>,
        resume: [<p>Programmed in <b>Twig</b> to update Princeton’s newspaper’s main website for <b>8000+ concurrent readers</b></p>,
        <p>Designed <a href="https://subscribe.dailyprincetonian.com/"><Link className='icon' /> email subscription page</a> with <b>Figma</b>  then developed with <b>React, CSS grid layouts, and integrated with MailChimp API</b> to enhance reader engagement and provide curated top stories of Ivy League schools</p>],
    },
    {
        id: 5,
        title: "GBH Foundation 🦠",
        img:
            "", role: "Software Engineer Intern",
        date: "November 2020 - January 2021",
        location: "Princeton, NJ",
        link: <a href="https://github.com/dhartiste/immune"><GitHub className='icon' />GitHub</a>,
        resume: [<p>Partnered with four developers and interns to program an interactive game teaching about viruses and the effectiveness of vaccine into an <b>HTML/Canvas interactive with Typescript, Adobe Animate, PixiAnimate</b></p>],
    },
    {
        id: 6,
        title: "EventMatch 📅",
        img:
            "", role: "",
        date: "August 2021 - January 2022",
        location: "",
        link: <p><a href="https://docs.google.com/presentation/d/1mr9tx1Z-k0_tTAgglUjf5SUNJIQOKQNalepVCLAg9VI/edit#slide=id.g35f391192_00"><Link className='icon' />Overview</a></p>,
        resume: [<p>Collaborating with team of four to develop event matching site to address lack of centralized platform to inform
            students of campus events, programming card swiping, flipping functionality interface, Google Calendar
            integration for Princeton students with <b>front-end of React and TypeScript and Python Flask for back-end server</b></p>, "Documenting design and creation process, testing features, database schema, and internal structure of application"],
    },
    {
    id: 1,
        title: "Autonomous Drone Navigation 🛫",
        img:
            "", role: "",
        date: "September 2023 - December 2023",
        location: "",
        link: <p><a href="https://drive.google.com/file/d/14K49BAyHa5PF9emnO9XL1iqzdnb5BsAv/view?usp=sharing"><Link className='icon' />Video Demonstration</a> </p>,
        resume: [<p>Assembled Crazyflie 2.1 drone and implemented a finite state machine to maneuver through obstacle courses, ensuring precise landings adjacent to target objects through the integration of a trained neural network trained on COCO dataset<br></br>- Engineered solutions to enhance drone camera performance by addressing frame distortions, reducing camera noise, and mitigating glitches achieved by implementing a sophisticated algorithm leveraging rolling averages of frames<br></br>- Programmed computer vision techniques with OpenCV to apply bounding boxes to determine obstacles' position and proximity to drone</p>]
},
    {
        id: 1,
        title: "3D Modeling and Mesh Editor Program 🫖",
        img:
            "", role: "",
        date: "February 2023 - May 2023",
        location: "",
        link: <p><a href="https://drive.google.com/file/d/1bij_wOXLFh0fNY_LFaX9QQ9FEASQ10IG/view?usp=sharing"><Link className='icon' />Overview</a> </p>,
        resume: [<p>Executed vertices and faces mesh manipulation with <b>Javascript</b> and <b>ThreeJS</b>, including translation, scaling, euler rotation (twisting), random noise to vertices, smoothing, extrusion, and subdivision functionalities to models</p>],
    },
    {
        id: 7,
        title: "Seam Carving 🖼️",
        img:
            "", role: "",
        date: "April 2021",
        location: "",
        link: "",
        resume: [<p>Designed content-aware image resizing seam carver tool algorithm, implementing dual-gradient energy function to identify least essential pixels and <b>Djikstra's shortest path algorithm</b> in <b>Java</b> to find horizontal and vertical seams to remove</p>],
    }, {
        id: 9,
        title: "Buffer Overflow Attacks with Assembly 💻",
        img:
            "", role: "",
        date: "December 2020",
        location: "",
        link: "",
        resume: [<p>Constructed buffer overflow attacks with <b>C and ARM assembly</b> through manipulating <b>ARMv8 stack frames structures</b>, debugging with <b>GDB</b> and checking coding vulnerabilities with <b>splint and critTer</b></p>]
    },
    {
        id: 10,
        title: "Art Portfolio 🎨",
        img:
            "", role: "",
        date: "",
        location: "",
        link: <a href="https://drive.google.com/drive/folders/12HpZ9OVbAVIZTrCWnT73QlPUqA9YCj2O?usp=sharing"><Folder className='icon' /> Portfolio</a>,
        resume: [<p>Selected as <b>20/40+ candidates</b> for Visual Arts minor at Princeton University. Taken Drawing, Sculpture, Painting, and will be executing Junior Art Theses Show. Current Princeton Art Museum Student Advisory Board Diversity and Inclusion Chair, Princeton Lewis Center of Arts Advisor, and Princeton Entreprenuership Club Design Team President</p>],
    },
];

export const swePortfolio = [
    {
        id: 1,
        title: "Amazon 🍌",
        img:
            "assets/NIH.png",
        role: "Software Engineer Intern",
        date: "May 2023 - Present",
        location: "Seattle, WA",
        link: "",
        resume: [<p>Develop full-stack operational tools displaying Amazon Grocery delivery time slots in sortable and filterable table and cards format, optimizing 50+ engineers’ on-call process and communication to 300+ million Amazon users</p>, <p>Program software using <b>React/TypeScript</b> front-end and <b>Java</b> back-end with <b>AWS CDK</b> infrastructure as code for <b>CloudFormation</b> resource provision and creating <b>API Gateway</b> with <b>Lambda</b> proxy integration to call internal API </p>, <p>Author low-level design document, scoping and outlining technical and architectural details of software system </p>,  <p>Direct daily stand-ups, sprint planning, retrospectives, sprint reviews, and backlog grooming sessions as Scrum Master for sprint, promoting agile methodologies and ensuring alignment between team and stakeholders</p>
            ]
    },
    {
        id: 1,
        title: "National Institutes of Health 🫀",
        img:
            "assets/NIH.png",
        role: "Software Engineer Intern",
        date: "June 2022 - Present",
        location: "Washington, D.C.",
        link: "",
        resume: [<p>One of the <b>159/1600 fellows</b>  selected for Coding it Forward's Civic Digital Fellowship to work as a software engineer for the National Institutes of Health</p>,
        <p>Integrated natural language processing Doc2vec model and neural network, support vector machine, and logistic regression machine learning algorithms to classify Office of Aids research grants, visualizing prediction accuracy and results with webpage developed using StreamLit framework in <b>Python</b> and <b>SQLite3</b> for user authentication and deployed for <b>18,000+ NIH employees</b> internal use 
        </p>,
        <p>Embedded interactive heat map chart with <b>Plotly Python library</b> to display confidence level of predicted grants</p>,
        <p>Processing <b>JSON</b> retrieved from <b>NIH RePorter REST API</b> from user-inputted IDs to output grant information</p>,  
            ]
    },
    {
        id: 2,
        title: "Hoagie 🥪",
        img:
            "",
        role: "Software Developer",
        date: "  September 2021 - Present",
        location: "Princeton, NJ",
        link: <a href="https://hoagie.io/"><Link className='icon' />hoagie.io</a>,
        resume: [<p>Improved HoagieMail application, new application sending all Princeton residential colleges mailing lists, by developing home page using <b>React</b> for <b>1720+ users</b> sending <b>700+ monthly emails</b></p>]
    },
    {
        id: 3,
        title: "The Daily Princetonian 🐯",
        img:
            "", role: "Software Developer",
        date: "September 2020 - January 2021",
        location: "Princeton, NJ",
        link: <a href="https://dailyprincetonian.com"><Link className='icon' />dailyprincetonian.com</a>,
        resume: [<p>Programmed in <b>Twig</b> to update Princeton’s newspaper’s main website for <b>8000+ concurrent readers</b></p>,
        <p>Designed <a href="https://subscribe.dailyprincetonian.com/"><Link className='icon' /> email subscription page</a> with <b>Figma</b>  then developed with <b>React, CSS grid layouts, and integrated with MailChimp API</b> to enhance reader engagement and provide curated top stories of Ivy League schools</p>],
    },
    {
        id: 4,
        title: "GBH Foundation 🦠",
        img:
            "", role: "Software Engineer Intern",
        date: "November 2020 - January 2021",
        location: "Princeton, NJ",
        link: <a href="https://github.com/dhartiste/immunem"><GitHub className='icon' />GitHub</a>,
        resume: [<p>Partnered with four developers and interns to program an interactive game teaching about viruses and the effectiveness of vaccine into an <b>HTML/Canvas interactive with Typescript, Adobe Animate, PixiAnimate</b></p>],
    },
];

export const projectsPortfolio = [
    {
    id: 1,
        title: "Autonomous Drone Navigation 🛫",
        img:
            "", role: "",
        date: "September 2023 - December 2023",
        location: "",
        link: <p><a href="https://drive.google.com/file/d/14K49BAyHa5PF9emnO9XL1iqzdnb5BsAv/view?usp=sharing"><Link className='icon' />Video Demonstration</a> </p>,
        resume: [<p>Assembled Crazyflie 2.1 drone and implemented a finite state machine to maneuver through obstacle courses, ensuring precise landings adjacent to target objects through the integration of a trained neural network trained on COCO dataset<br></br>- Engineered solutions to enhance drone camera performance by addressing frame distortions, reducing camera noise, and mitigating glitches achieved by implementing a sophisticated algorithm leveraging rolling averages of frames<br></br>- Programmed computer vision techniques with OpenCV to apply bounding boxes to determine obstacles' position and proximity to drone</p>]
},
        {
        id: 1,
        title: "AI Image Generation and Chatbot of Myself 🤖",
        img:
            "", role: "",
        date: "February 2023 - May 2023",
        location: "",
        link: <p><a href="https://drive.google.com/file/d/1apKPGjP6w0qJqan8S0YdbtSOSU8kbxUf/view?usp=sharing"><Link className='icon' />Overview</a> </p>,
        resume: [<p>Implemented transformers model and fine-tuned <b>Microsoft’s DialoGPT model</b> to train chatbot on personal iMessage conversations and coded unconditional art generation with <b>Hugging Face’s Diffusers library</b> in <b>Python</b> on personal photos, cultivating results into paintings and interactive pieces for solo art exhibition next year</p>],
    },
         {
        id: 1,
        title: "Prediction of Chronic Diseases Across United States 🧑‍⚕️",
        img:
            "", role: "",
        date: "January 2023 - May 2023",
        location: "",
        link: <p><a href="https://drive.google.com/file/d/1wuKBUeIP7ih0KBrVBFmQpPdhWanwQsJY/view?usp=sharing"><Link className='icon' />Research Paper PDF</a> </p>,
        resume: [<p>Analyzed correlations between chronic illnesses with diet and exercise, processed and visualized data through <b>Python panda</b> DataFrame and <b>seaborn</b>  heatmaps, composed research paper under Professor O. Troyanskaya</p>,<p>Compiled linear, random forest, and SGD regression models with <b>scikit-learn</b> library, training based on nutritional habits and outputting the prevalence estimate of chronic illnesses with average R2 accuracy of 0.81</p>],
    },
    {
        id: 1,
        title: "Understanding Visual Artists’ Perspectives on Use of Generative AI Tools 👩‍🎨",
        img:
            "",
        role: "",
        date: "September 2023 - December 2023",
        location: "",
        link: <p><a href="https://drive.google.com/file/d/1wQz-GoVLHE-LpGXbK7h3kn9RoGFm1mUh/view?usp=sharing"><Link className='icon' />Research Paper PDF</a> </p>,
        resume: [<p>Authored human-computer interaction research paper under Professor Andrés Monroy-Hernández exploring the contentious implications of advanced AI image generation tools in the visual arts space<br></br>- Conducted semi-structured interviews of visual artists and performed thematic analysis to discern perspectives on AI tool usage, identifying ethical and licensure considerations as key factors influencing negative artist opinions on AI generative tools</p>
            ]
    },
    {
        id: 1,
        title: "EventMatch 📅",
        img:
            "", role: "",
        date: "August 2021 - January 2022",
        location: "",
        link: <p><a href="https://docs.google.com/presentation/d/1mr9tx1Z-k0_tTAgglUjf5SUNJIQOKQNalepVCLAg9VI/edit#slide=id.g35f391192_00"><Link className='icon' />Overview</a> </p>,
        resume: [<p>Collaborating with team of four to develop event matching site with card swiping and flipping interface with Google Calendar integration for Princeton students using <b>React, TypeScript, Flask, and Evergreen UI Library</b></p>],
    },
    {
        id: 1,
        title: "3D Modeling and Mesh Editor Program 🫖",
        img:
            "", role: "",
        date: "February 2023 - May 2023",
        location: "",
        link: <p><a href="https://drive.google.com/file/d/1bij_wOXLFh0fNY_LFaX9QQ9FEASQ10IG/view?usp=sharing"><Link className='icon' />Overview</a> </p>,
        resume: [<p>Executed vertices and faces mesh manipulation with <b>Javascript</b> and <b>ThreeJS</b>, including translation, scaling, euler rotation (twisting), random noise to vertices, smoothing, extrusion, and subdivision functionalities to models</p>],
    },
    {
        id: 2,
        title: "Personal Website 👨‍💻",
        img:
            "", role: "",
        date: "June 2022 - Present",
        location: "Princeton, NJ",
        link: <a href='https://github.com/WarrenQuan/personalWebsite'><GitHub className='icon' /> GitHub</a>,
        resume: [<p>Designed and programmed from scratch portfolio website using <b>React, JSX, HTML, SCSS</b> and linked to <b>Google Analytics</b>, deployed through <b>Heroku</b></p>],
    },
    {
        id: 3,
        title: "Course Registrar Application 📓",
        img:
            "", role: "",
        date: "November 2021",
        location: "",
        link: "",
        resume: [<p>Created desktop application for listing Princeton course offerings with <b>Python and PyQt5 GUI</b>, gathered course info with <b>SQL</b> from database, and optimized server efficiency with <b>multiple processes and threads</b></p>,
            <p>Programmed online web/mobile page version through <b>HTML, Javascript, jQuery for AJAX techniques</b> to process user inputted course information, and <b>Bootstrap</b> for styling and responsive layout design
            </p>],
    },
    {
        id: 4,
        title: "Classifying Handwritten Digits with Machine Learning 1️⃣",
        img:
        "", role: "",
    date: "April 2022",
    location: "",
    link: "",
    resume: [<p>Implemented <b>convolutional neural networks</b> to classify images of handwritten digits of MNIST dataset in <b>Python</b> and training model with different learning rates for <b>stochastic gradient descent</b>, plotting training loss with epoch number using <b>matplotlib</b></p>]
    },
    {
        id: 5,
        title: "Word Net 🕸️",
        img:
            "", role: "",
        date: "May 2021",
        location: "",
        link: "",
        resume: [<p>Simulated word net semantic lexicon using <b>Java object-oriented programming, binary search trees, and digraphs</b>, showing relationships and grouping words based on dictionary definition with a <b>rooted directed acyclic graph</b></p>],
    },
    {
        id: 6,
        title: "Buffer Overflow Attacks with Assembly 💻",
        img:
            "", role: "",
        date: "December 2020",
        location: "",
        link: "",
        resume: [<p>Constructed buffer overflow attacks with <b>C and ARM assembly</b> through manipulating <b>ARMv8 stack frames structures</b>, debugging with <b>GDB</b> and checking coding vulnerabilities with <b>splint and critTer</b></p>],
    },
    {
        id: 7,
        title: "Seam Carving 🖼️",
        img:
            "", role: "",
        date: "April 2021",
        location: "",
        link: "",
        resume: [<p>Designed content-aware image resizing seam carver tool algorithm, implementing dual-gradient energy function to identify least essential pixels and <b>Djikstra's shortest path algorithm</b> in <b>Java</b> to find horizontal and vertical seams to remove</p>],
    },
];

export const uiPortfolio = [
    {
        id: 1,
        title: "Tiger Challenge 🐯",
        img:
            "", role: "Maker-Not-Taker Member",
        date: "June 2021 - Present",
        location: "Princeton, NJ",
        link: <a href="https://docs.google.com/presentation/d/1J3Gf1-Qx4QIVGVs9FTLftGuC7C3LsYAy0hLQwAwTswo/edit?usp=sharing"><Folder className='icon' />Portfolio</a>,
        resume: [<p>Coordinated outreach and interviewed <b>30+ individuals</b>, including immigrants, professors, and bilingual educators to synthesize the root problems of social isolation and lack of recognition of contributions among immigrants through human-centric design thinking</p>,
            "Collaborated with three team members to conceptualize sustainable solutions led by immigrants themselves"],
    },
    {
        id: 2,
        title: "Princeton Keller Entrepreneurship Center with ResInDe 💭",
        img: "", role: "UI/UX Designer and Project Manager for Idea Board Website",
        date: "August 2021 - Present",
        location: "Princeton, NJ",
        link: <p><a href="https://docs.google.com/presentation/u/1/d/1QaqlmLn_BU6ZBTMWoqevfE1lQuZSs_698UOSEUJ9Gdw/edit?usp=sharing"><Link className='icon' />Overview</a> <h6> || </h6> <a href="https://www.figma.com/file/ih1ANK54qThHMo5fLrAv7F/Idea-Board?node-id=0%3A1"><Brush className='icon' />Figma</a></p>,
        resume: [<p>Managed team of four to conduct <b>20+ user interviews</b> to synthesize use cases and design prototypes with Figma</p>],
    },
      {
        id: 1,
        title: "Understanding Visual Artists’ Perspectives on Use of Generative AI Tools 👩‍🎨",
        img:
            "",
        role: "",
        date: "September 2023 - December 2023",
        location: "",
        link: <p><a href="https://drive.google.com/file/d/1wQz-GoVLHE-LpGXbK7h3kn9RoGFm1mUh/view?usp=sharing"><Link className='icon' />Research Paper PDF</a> </p>,
        resume: [<p>Authored human-computer interaction research paper under Professor Andrés Monroy-Hernández exploring the contentious implications of advanced AI image generation tools in the visual arts space<br></br>- Conducted semi-structured interviews of visual artists and performed thematic analysis to discern perspectives on AI tool usage, identifying ethical and licensure considerations as key factors influencing negative artist opinions on AI generative tools</p>
            ]
    },
    {
       id: 3,
       title: "FeelGoodBuddy 💌 ",
       img: "", role: "UI/UX Designer",
       date: "December 2021 - February 2022",
       location: "Princeton, NJ",
       link: <p><a href="https://www.figma.com/file/h9ipumvv2bo9pqVaFcJx4E/Feel-Good-Buddy-Design?node-id=36%3A2"><Brush className='icon' />Figma</a></p>,
       resume: ["Decided color palettes and gradients, and designed and implemented graphics and layout of FeelGoodBuddy greeting card website after performing and presenting user research on comparable competitor's websites and products"],
   },
    {
        id: 4,
        title: "IvyHacks and HackPrinceton 🖥️",
        img:
            "", role: "Director, Marketing and Design",
        date: "June 2020 - Present",
        location: "Princeton, NJ",
        link: <p><a href="https://www.hackprinceton.com/"><Link className='icon' />hackprinceton.com</a> <h6> || </h6> <a href="https://www.figma.com/file/g3ztGLq7H1RQurgR5ZTTyN/HackPrinceton-Design-S'22?node-id=28%3A6"><Brush className='icon' />Figma</a></p>, resume: [<p>Kickstarted students media campaigns on Substack, Instagram, and Twitter and outreached to student organizations to engage and obtain over <b>3000+ registered</b> applicants for recently launched IvyHacks Hackathon</p>,
            "Directed design team of six to design vector graphics for HackPrinceton advertisement and build website"],
    },
    {
        id: 5,
        title: "Freelance Website Commissions 🌐",
        img:
            "", role: "Website Manager and Assessibility Certifier",
        date: "",
        location: "",
        link: <p><a href="https://www.drmatthewweed.com/"><Link className='icon' />drmatthewweed.com</a> <h6> || </h6> <a href="https://hellolevo.com/"><Link className='icon' />hellolevo.com</a></p>,
        resume: ["Modernized Dr. Matthew Weed, blind type 1 diabetic motivational speaker and college consultant's website, ensuring all design decisions followed Web Content Accessibility Guidelines standards and compiling 500+ free resources for high school", "Collaborated with the CEO of Levo's, an organizer optimizing the process of matching patients with qualified caregivers, to build the company's website and blog"],
    },
    {
        id: 6,
        title: "Lowell Science Research Program 💡",
        img:
            "", role: "Website and Media Manager",
        date: "August 2018 - June 2020",
        location: "San Francisco, CA",
        link: "",
        resume: [<p>Developed a website reaching <b>1198 members using HTML and CSS</b> integrated with Google Sites editor for the school’s UCSF-partnered science research program to strengthen the organization’s outreach with the continuous management of the presentation schedules, secretary reports, and polls</p>, <p>Designed professional graphics and logo using <b>Adobe Illustrator and Photoshop</b></p>
        ],
    },
    {
        id: 7,
        title: "SafeDrink 🍹",
        img:
            "", role: "",
        date: "May 2021",
        location: "Princeton, NJ",
        link: <a href="https://drive.google.com/file/d/17j21dTY4QaUv9JDp3oWJvOQdv5y3sOnf/view?usp=sharing"><FileOpen className='icon' />Summary</a>,
        resume: [<p>Prototyped with three teammates portable and easy to use BAC
            accessory with connected application to ensure accessibility in any
            circumstance for preventive measures and to
            respond to emergency situations: similar to a
            watch, presented to Princeton faculty and directors</p>,
        <p>Surveyed <b>70 undergraduate students</b>, shared
            via residential college listservs questions about
            Princeton’s drinking culture, personal drinking
            habits, and interest in portable alcohol level
            monitor and interviewed University Health Services</p>,],
    },
];

export const designPortfolio = [
    {
        id: 1,
        title: "Art Portfolio 🎨",
        img:
            "", role: "",
        date: "",
        location: "",
        link: <a href="https://warren-quan-art-portfolio.onrender.com/"><Folder className='icon' /> Portfolio</a>,
        resume: [<p>Selected as <b>20/40+ candidates</b> for Visual Arts minor at Princeton University. Taken Drawing, Sculpture, Painting, Fabric Sculpture, Advanced Graphic Design, Exhibition and Methods, and currently executing senior thesis show. Previous Princeton Art Museum Student Advisory Board Diversity and Inclusion Chair, Princeton Lewis Center of Arts Advisor, and Princeton Entreprenuership Club Design Team President</p>],
    },
    {
        id: 2,
        title: "The Daily Princetonian and The Lowell Cartoons 📰",
        img:
            "assets/theLowell.png", role: "Cartoons Editor and Illustrator",
        date: "June 2019 - May 2021",
        location: "Princeton, NJ and San Francisco, CA",
        link: "",
        resume: [<p>Illustrated graphics using <b>Adobe Illustrator and Photoshop</b> for printed issues and online articles for student-run newspapers</p>, <p>Designed immersive page layouts using <b>Adobe InDesign</b></p>
        ],
    },
    {
        id: 3,
        title: "Entrepreneurship Club Design 🕴️",
        img:
            "", role: "President",
        date: "August 2020 - Present",
        location: "Princeton, NJ",
        link: "",
        resume: [<p>Providing layout, logo, website, app design for non-profits and other clients surrounding Princeton using <b>Adobe Creative Cloud</b></p>, <p>Participating in the web design subteam to handle UI/UX work and intersecting my interests of graphic design and computer science</p>, <p>Hosting and spearheading Design&Impact competition, a two week hackathon style event where teams pitch designs and marketing campaigns to non-profits for <b>50+ participants</b></p>],
    },
];

export const servicePortfolio = [
    {
        id: 1,
        title: "Mentorship 🧑‍🤝‍🧑",
        img:
            "", role: "APIA Scholars, Princeton Scholars Institute Fellows Program, and Princeton University Mentoring Program",
        date: "June 2021 - Present",
        location: "Princeton, NJ",
        link: "",
        resume: [<p>Mentor Collective trained mentor, mentored for <b>APIA Scolars program</b> as a scholorship recipient, <b>Princeton Scholars Institute Fellows Program</b> for other first-generation, low-income students, and <b>Princeton University Mentoring Program</b> for Carl A. Fields Center for Equality and Cultural Understanding for first-years to socially and academically acclimate into college</p>],
    },
    {
        id: 2,
        title: "Service Focus 🔍",
        img:
            "", role: "Tech Policy Cohort Member",
        date: "June 2021 - June 2022",
        location: "Princeton, NJ",
        link: "",
        resume: ["Collaborated with Share My Meals non-profit organization to redesign their website and reoptimize volunteer dashboard to increase efficiency and communication between the managers and the volunteers delivering donated meals to citizen"],
    },
    {
        id: 2,
        title: "Asian American Student Association 🇻🇳",
        img:
            "", role: "Executive Board Member",
        date: "January 2021 - January 2022 (Board), Current Member",
        location: "Princeton, NJ",
        link: "",
        resume: ["Promoting discussion and addressing civic engagement and cultural subjects within Asian community at Princeton as Social Media Chair, which includes Asian representation within media, potential complacency in racial issues, social media campaigns speaking against Asian hate crimes from COVID-19, and the model minority myth"],
    },
    {
        id: 3,
        title: "Red Cross 🏥",
        img:
            "",
        role: "Chapter Social Media Manager and Youth Executive Board Officer",
        date: "August 2017 - June 2020",
        location: "San Francisco, CA",
        link: "",
        resume: [<p>Recruited <b>264 members</b> by printing business cards and flyers, painting posters, and using social media</p>, <p>Fundraised <b>$16630</b> for measles and rubella vaccinations, natural disasters, and veterans by advertising for fundraisers, helping organization achieve <b>Senate Certification of Recognition</b> from Senator Scott Wiener</p>, "Presented Community Disaster Education across the Bay Area, a presentation that raises other's awareness and understanding of natural disasters, coordinated the Pillowcase Project, an interactive preparedness program that teaches children ways to stay safe during a hazard, organized Sound the Alarm events, a campaign where volunteers go around residential areas to promote Red Cross’s free smoke alarm installation service", <p>Amassed <b>200+ volunteer hours</b> and supervised events</p>]

        ,
    },
    {
        id: 4,
        img: "",
        title: "Team HBV 💚",
        role: "Web and Media Manager and iOS App Development Committee Chair and Collegiate Board Finance Advisor",
        date: "May 2019 - January 2022",
        location: "San Francisco, CA",
        link: "",
        resume: ["Demystified hepatitis B (HBV) in the Asian community by facilitating Mandarin, Cantonese, and English presentations at local public libraries", <p>Programmed with <b>HTML and CSS</b> along with WordPress interface to manage website for <b>50+ worldwide high school and collegiate chapters</b></p>, <p>Pioneered a committee to prototype a new iPhone application and connect members with the latest hepatitis B research; recruited and lead a <b>team of seven members</b> while hosting biweekly meetings to initiate discussion</p>, <p>Coordinated <b>$1000 in donations</b> to child burdened with HBV, helping organization achieve public recognition by the National Hepatitis B Foundation</p>, "Writing grant proposals for fundraising TeamHBV international collegiate conference",],
    },
];
