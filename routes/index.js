const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const terms = [
    {
      id: 1,
      name: "DevOps",
      description: "DevOps is a software development methodology.DevOps focuses on enabling close collaboration between development (Dev) and operations (Ops)",
      reference: "Microsoft. (2023). What Is DevOps? Learn.Microsoft. https://learn.microsoft.com/en-us/devops/what-is-devops",
    },
    {
      id: 2,
      name: "The Wall of Confusion",
      description: "The Wall of Confusion is the idea that different departments have different goals and work according to their own goals.",
      reference: "stephen , K. (2020). The Wall of Confusion. Levelup. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26",
    },    {
      id: 3,
      name: "Microservices",
      description: "Microservices are an architecture for developing software. Connecting a variety of small, independent services together via APIs",
      reference: "Aws. (2020). What Is Microservices. Amazon. https://aws.amazon.com/microservices/",
    },    {
      id: 4,
      name: "API",
      description: "An API is a mechanism that allows two pieces of software to communicate with each other using an API.",
      reference: "Aws. (2020). What Is API. Amazon. https://aws.amazon.com/cn/what-is/api/",
    },    {
      id: 5,
      name: "Software development life cycle",
      description: "SDLC is a software development process.It is required to produce high quality software with high efficiency. And to meet delivery standards",
      reference: "synopsys. (2023). Software Development Life Cycle (SDLC). Synopsys. https://www.synopsys.com/glossary/what-is-sdlc.html",
    },    {
      id: 6,
      name: "Continuous integration",
      description: "continuous integration is an approach to the DevOps development process. It is when developers periodically commit code to a shared code base for automated testing. This method is used to find problems in the code and fix them.",
      reference: "Aws. (2023). What Is Continuous Integration? Amazon. https://aws.amazon.com/devops/continuous-integration/",
    },    {
      id: 7,
      name: "Continuous Delivery",
      description: "Continuous delivery is also an approach to development using DevOps. In this method, the system automatically deploys the code that passes the automated tests to a pre-release environment.",
      reference: "Aws. (2023). What Is Continuous Delivery? Amazon. https://aws.amazon.com/devops/continuous-delivery/",
    },    {
      id: 8,
      name: "Continuous Deployment",
      description: "Continuous deployment is a strategy in software development. When the software passes the automated tests it is not just deployed in a pre-production environment.Continuous deployment releases the code into the production environment. When the code passes the tests it is pushed directly to the users.",
      reference: "Ibm. (2023). What Is Continuous Deployment? IBM. https://www.ibm.com/topics/continuous-deployment",
    },    {
      id: 9,
      name: "Agile software development",
      description: "Agile software development is a development framework that promotes cross-departmental collaboration across multiple departments.",
      reference: "Wiki. (2023). Agile Software Development. WIKI. https://en.wikipedia.org/wiki/Agile_software_development",
    },    {
      id: 10,
      name: "version control",
      description: "version control is a tool that helps DevOps teams manage source code. Teams can fix bugs in a timely manner through version control. It helps them to reduce development time and increase the success rate of deployments",
      reference: "Bitbucket. (2023). What Is Version Control? Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control",
    },    {
      id: 11,
      name: "Deployment frequency",
      description: "Deployment frequency refers to the rate at which code changes are deployed to production environments. It is a metric that measures how often an application or service is deployed to production.",
      reference: "Opsera. (2023). How to Measure and Increase Deployment Frequency in Your DevOps Practice. Opsera. https://www.opsera.io/blog/what-is-deployment-frequency",
    },    {
      id: 12,
      name: "Lead time for changes",
      description: "One of the critical DevOps metrics to track is lead time for changes. Not to be confused with cycle time (discussed below), lead time for changes is the length of time between when a code change is committed to the trunk branch and when it is in a deployable state. For example, when code passes all necessary pre-release tests.",
      reference: "Hall, T. (2023). DevOps Metrics. Atlassian. https://www.atlassian.com/devops/frameworks/devops-metrics",
    },    {
      id: 13,
      name: "Mean time to recovery",
      description: "Mean time to recovery (MTTR) measures how long it takes to recover from a partial service interruption or total failure. This is an important metric to track, regardless of whether the interruption is the result of a recent deployment or an isolated system failure. ",
      reference: "Hall, T. (2023). DevOps Metrics. Atlassian. https://www.atlassian.com/devops/frameworks/devops-metrics",
    },    {
      id: 14,
      name: "Change failure rate",
      description: "The change failure rate is the percentage of code changes that require hot fixes or other remediation after production. This does not measure failures caught by testing and fixed before code is deployed.",
      reference: "Hall, T. (2023). DevOps Metrics. Atlassian. https://www.atlassian.com/devops/frameworks/devops-metrics",
    },    {
      id: 15,
      name: "Reliability",
      description: "Reliability differs from the other four performances in that it is an operational performance. Reliability is how well your services meet user expectations, such as availability and performance.",
      reference: "Debellis, D. (2022). 2022 Accelerate State of DevOps Report. DORA. Page 10.",
    },    {
      id: 16,
      name: "software delivery and operational (SDO) performance",
      description: "That means faster software delivery and time to market (the period of time from when the idea is born to the moment it can be accomplished).",
      reference: "Kodjamanova, D. (2023). 4 DevOps Metrics To Maximize Success. Mentormate. https://mentormate.com/blog/how-devops-metrics-pave-the-way-to-better-performance/",
    },    {
      id: 17,
      name: "Monolithic",
      description: "A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.",
      reference: "Harris, C. (2023). Microservices vs. Monolithic Architecture. Atlassian. https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith",
    },    {
      id: 18,
      name: "Service-oriented architecture (SOA)",
      description: "SOA is an architectural pattern in computer software design. In this type of application, components provide services to other components via a communications protocol, typically over a network. The principles of service-orientation are independent of any product, vendor, or technology. The full form of SOA is service-oriented architecture",
      reference: "Walker, A. (2023). SOA vs Microservices – Difference Between Them. Guru99. https://www.guru99.com/microservices-vs-soa.html",
    },    {
      id: 19,
      name: "Cloud Tools",
      description: "A cloud-based tool is a software that uses cloud application technology to centrally store data and offer up-to-date information to all users. The data is frequently stored on faraway servers, and the program is frequently accessed online or through an app.",
      reference: "Dutta, B. (2022). 10 Best Cloud-Based Tools in 2022. Analyticssteps. https://www.analyticssteps.com/blogs/best-cloud-based-tools",
    },
    {
      id: 20,
      name: "Productivity in Software Development",
      description: "Simply put, developer productivity is a measure of a team’s ability to efficiently ship high-quality code that delivers business value. Developer productivity should be both a qualitative and quantitative dataset. ",
      reference: "Pedro, T. (2022). What Is Developer Productivity and How to Measure It. Linearb. https://linearb.io/blog/developer-productivity",
    },
    {
      id: 21,
      name: "The Agile methodology",
      description: "Agile methodology is a project management approach that prioritizes cross-functional collaboration and continuous improvement. It divides projects into smaller phases and guides teams through cycles of planning, execution, and evaluation.",
      reference: "Wrike. (2023). What Is Agile Methodology? Wrike. https://www.wrike.com/project-management-guide/faq/what-is-agile-methodology-in-project-management/",
    },
    {
      id: 22,
      name: "Dockerize",
      description: "Dockerizing is the process of packing, deploying, and running applications using Docker containers. Docker is an open-source tool that ships your application with all the necessary functionalities as one package. You can use Docker to pack your application with everything you need to run the application (such as libraries) and ship it as one package – a container. Containers are created from images that specify their precise contents.",
      reference: "Tripathi, D. (2021). How To Dockerize An Application. Knoldus. https://blog.knoldus.com/how-to-dockerize-an-application/",
    },
    {
      id: 23,
      name: "DevOps architecture",
      description: "Some might think that DevOps Architecture is either a tool or a technology. But it is a methodology or procedure involving various tools. These tools help to resolve the issues between the two teams. The development team always has an extra burden to finish their faulty backlogs. These backlogs consist of codes declared erroneous by the operations team. With the help of DevOps Architecture, a developer receives rapid code feedback and fixes the bugs. Hence, this process accelerates code production and software launches.",
      reference: "anand, B. (2023). DevOps Architecture: Principles, Best Practices, Tools, Features. Knowledgehut. https://www.knowledgehut.com/blog/devops/devops-architecture",
    },
    {
      id: 24,
      name: "Deployment time",
      description: "Deployment time metric measures how long you need to perform a deployment. Even though it might initially seem irrelevant, measuring deployment time is one of the DevOps metrics that can indicate potential problems.",
      reference: "Naumovska, marija. (2018). What Is the Role of Deployment Time in DevOps Metrics and KPIs? Quora. https://www.quora.com/What-is-the-role-of-deployment-time-in-DevOps-metrics-and-KPIs",
    },
    {
      id: 25,
      name: "Deployment failure detection time",
      description: "This KPI strongly relates to the previous one. Failures will occur, but then the question is, how fast are these detected and when will mitigating actions to resolve these issues be taken",
      reference: "Mulder, J. (2021). Enterprise DevOps for Architects (1010921st ed.). Packt.",
    },
    {
      id: 26,
      name: "Full cycle time",
      description: "In short, cycle time is the total elapsed time you need to move a task from the moment it enters the “in progress” (working) stage to the moment it is considered finished. So the simplest way to measure the cycle time of an assignment is to count the number of days it spends being worked on.",
      reference: "Naydenov, P. (2022). How to Measure Cycle Time: With or Without Non-Working Hours? Kanbanize. https://kanbanize.com/blog/measure-cycle-time-calculations/",
    },
    {
      id: 27,
      name: "Definition of Done (DOD)",
      description: "The Definition of Done is an agreed-upon set of items that must be completed before a project or user story can be considered complete. It is applied consistently and serves as an official gate separating things from being “in progress” to “done.”",
      reference: "Productplan. (2023). The Definition of Done: What Product Managers Need to Know. Productplan. https://www.productplan.com/learn/agile-definition-of-done/",
    },
    {
      id: 28,
      name: "Root cause analysis (RCA)",
      description: "Root cause analysis (RCA) is defined as a collective term that describes a wide range of approaches, tools, and techniques used to uncover causes of problems. Some RCA approaches are geared more toward identifying true root causes than others, some are more general problem-solving techniques, and others simply offer support for the core activity of root cause analysis.",
      reference: "Asq. (2023). WHAT IS ROOT CAUSE ANALYSIS (RCA)? Asq. https://asq.org/quality-resources/root-cause-analysis",
    },
    {
      id: 29,
      name: "User acceptance tests (UAT)",
      description: "User Acceptance Testing (UAT) is a type of testing performed by the end user or the client to verify/accept the software system before moving the software application to the production environment. UAT is done in the final phase of testing after functional, integration and system testing is done.",
      reference: "hamilton, T. (2023). What Is User Acceptance Testing (UAT)? Examples. Guru99. https://www.guru99.com/user-acceptance-testing.html",
    },
    {
      id: 30,
      name: "User story",
      description: "A user story is an informal, general explanation of a software feature written from the perspective of the end user. Its purpose is to articulate how a software feature will provide value to the customer.",
      reference: "rehkopf, M. (2023). User Stories with Examples and a Template. Atlassian. https://www.atlassian.com/agile/project-management/user-stories",
    },
    {
      id: 31,
      name: "Terraform",
      description: "Terraform by HashiCorp is an open-source DevOps tool. It allows to build, manage, and define infrastructure across cloud providers. The Terraform tool, also called the Infrastructure Build tool, enables developers to create and modify infrastructure in a secure and efficient environment. ",
      reference: "sohail, M. (2023). Chef vs Terraform - Comparing Top DevOps Tools. Knowledgehut. https://www.knowledgehut.com/blog/devops/chef-vs-terraform#what-is-terraform?%C2%A0%C2%A0",
    },
    {
      id: 32,
      name: "Infrastructure as code (IaC)",
      description: "Infrastructure as code (IaC) uses DevOps methodology and versioning with a descriptive model to define and deploy infrastructure, such as networks, virtual machines, load balancers, and connection topologies. Just as the same source code always generates the same binary, an IaC model generates the same environment every time it deploys.",
      reference: "Microsoft. (2022). What Is Infrastructure as Code (IaC)? Microsoft. https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code",
    },
    {
      id: 33,
      name: "Security in DevOps (DevSecOps)",
      description: "DevSecOps stands for development, security, and operations. It's an approach to culture, automation, and platform design that integrates security as a shared responsibility throughout the entire IT lifecycle.",
      reference: "Redhat. (2022). What Is DevSecOps? Redhat. https://www.redhat.com/en/topics/devops/what-is-devsecops",
    },
    {
      id: 34,
      name: "configuration as code",
      description: "Configuration as code (config as code) allows you to manage Compass component data via a YAML file that is stored in a git repository. Config as code requires the Bitbucket, GitHub, or GitLab app to be installed and configured on your Compass site. ",
      reference: "Atlassian. (2023). What Is Configuration as Code? Atlassian. https://developer.atlassian.com/cloud/compass/config-as-code/what-is-config-as-code/",
    },
    {
      id: 35,
      name: "DevOps automation",
      description: "DevOps automation is the addition of technology that performs tasks with reduced human assistance to processes that facilitate feedback loops between operations and development teams so that iterative updates can be deployed faster to applications in production.",
      reference: "Redhat. (2019). What Is DevOps Automation? Redhat. https://www.redhat.com/en/topics/automation/what-is-devops-automation",
    },
    {
      id: 36,
      name: "production environment",
      description: "a production environment is where the latest versions of software, products, or updates are pushed live to the intended users. Think of it as a final phase of production. ",
      reference: "Pagerduty. (2023). What Is a Production Environment? Pagerduty. https://www.pagerduty.com/resources/learn/what-is-production-environment",
    },
    {
      id: 37,
      name: "Kubernetes",
      description: "Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.",
      reference: "Kubernetes. (2023). Production-Grade Container Orchestration. Kubernetes. https://kubernetes.io/",
    },
    {
      id: 38,
      name: "container",
      description: "A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.",
      reference: "Docker. (2023). Use Containers to Build, Share and Run Your Applications. Docker. https://www.docker.com/resources/what-container/",
    },
    {
      id: 39,
      name: "Deployment Process",
      description: "Deployment is the mechanism through which applications, modules, updates, and patches are delivered from developers to users. The methods used by developers to build, test and deploy new code will impact how fast a product can respond to changes in customer preferences or requirements and the quality of each change.",
      reference: "Sumologic. (2023). Software Deployment - Definition & Overview. Sumologic. https://www.sumologic.com/glossary/software-deployment/",
    },
    {
      id: 40,
      name: "Security as Code (SaC)",
      description: "Security as code (SaC) is the discipline of integrating security into DevOps tools and processes by identifying where security checks, tests, and gates may be included without adding extra costs or delays to the process of making changes to code and infrastructure. Developers can specify infrastructure platforms and configuration by creating code designed for the purpose.",
      reference: "Checkpoint. (2023). What Is Security as Code (SaC)? Checkpoint. https://www.checkpoint.com/cyber-hub/cloud-security/what-is-security-as-code-sac/",
    },
    {
      id: 41,
      name: "",
      description: "",
      reference: "",
    },{
      id: 42,
      name: "",
      description: "",
      reference: "",
    },{
      id: 43,
      name: "",
      description: "",
      reference: "",
    },{
      id: 44,
      name: "",
      description: "",
      reference: "",
    },{
      id: 45,
      name: "",
      description: "",
      reference: "",
    },{
      id: 46,
      name: "",
      description: "",
      reference: "",
    },{
      id: 47,
      name: "",
      description: "",
      reference: "",
    },{
      id: 48,
      name: "",
      description: "",
      reference: "",
    },{
      id: 49,
      name: "",
      description: "",
      reference: "",
    },{
      id: 50,
      name: "",
      description: "",
      reference: "",
    },
  ];

  res.render('index', { title: 'Sit 722 DevOps Glossary', terms: terms });
});

module.exports = router;
