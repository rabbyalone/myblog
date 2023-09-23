import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const data = `## CEM (CLIENTS & ENGAGEMENTS) - EY.COM

  **Role:** Senior Software Engineer
  
  **Technologies:** .NET 6, Microservices, .NET Core Web API, Docker, Azure DevOps, Kubernetes, Azure service bus, Azure Functions, Application insights, MSSQL
  
  **Project Description:** During my tenure as a Senior Engineer, I played a key role in a significant project at EY, one of the renowned "Big 4" accounting firms worldwide. My responsibilities were working on a cutting-edge application infrastructure designed specifically for tax consultancy, utilizing a stack of advanced technologies and tools. Some of the core technologies and services I worked with included .NET 6, Microservices architecture, .NET Core Web API, Docker for containerization, Azure DevOps for streamlined development and deployment, Kubernetes for orchestration, Azure Service Bus for efficient messaging, Azure Functions for serverless computing, and Microsoft SQL Server for data management.
  
  This project held immense significance as it aimed to empower EY's clients with state-of-the-art tools and invaluable insights for optimizing tax management strategies. My role as a Senior Developer allowed me to contribute to the success of this endeavor, ensuring that the application structure met the highest standards of performance and functionality.
  
  
  ### OIL RIG MANAGEMENT | INFORMATIQ.NO
  
  **Role:** Lead Developer
  
  **Technologies:** .NET 6, Microservices, .NET Core Web API, Docker, Azure DevOps, Kubernetes, Azure Service Bus, Cosmos DB
  
  **Project Description:**
  
  Informatiq, at the forefront of digitalization and visualization in the oil and gas industry, entrusted me with the role of Lead Developer. In this capacity, I had the privilege of collaborating closely with a highly experienced software architect boasting 25 years of expertise. Together, we harnessed the most advanced technologies of our time to pioneer innovative features and transformative business solutions that are reshaping the industry.
  
  Our technological arsenal included .NET 6 for cutting-edge development, a Microservices architecture for flexibility and scalability, .NET Core Web API for robust backend services, Docker for containerization, Azure DevOps for streamlined development and deployment, Kubernetes for efficient container orchestration, Azure Service Bus for seamless communication, and Cosmos DB for high-performance data management.
  
  This project revolved around Oil Rig Management, where our mission was to deliver solutions that optimize operations, enhance safety, and elevate efficiency in the oil and gas sector. As the Lead Developer, I played a pivotal role in crafting and implementing solutions that are setting new industry standards and driving digital transformation in oil rig management.
  
  
  ### PIQLCONNECT | PIQL.COM
  
  **Role:** Lead Developer
  
  **Technologies:** .NET 5, Vue.js 2, Vue.js 3, Microservices, .NET Core Web API, Docker, Azure DevOps, Cosmos DB
  
  **Project Description:**
  
  At Piql Connect, we offer you the extraordinary opportunity to safeguard your data for a millennium. Your valuable information finds its home in the highly secure Arctic World Archive. In my role as Lead Developer, I am instrumental in shaping and maintaining this exceptional data sanctuary. Collaborating closely with the Piql administration team, our collective mission is to simplify the process of storing and safeguarding your data within the Arctic vault.
  
  Our technology toolkit includes .NET 5 for robust application development, Vue.js 2 and Vue.js 3 for building dynamic and user-friendly interfaces, Microservices for creating flexible and scalable software components, .NET Core Web API for building robust backend services, Docker for containerization, Azure DevOps for efficient development and deployment, and Cosmos DB for effective data management.
  
  This project revolves around providing a secure and reliable solution for preserving your data for a millennia, ensuring that your information remains intact and accessible for generations to come. As the Lead Developer, I play a pivotal role in making this vision a reality and ensuring the seamless operation of this invaluable data repository in the Arctic.
  
  
  ### EMPLOYEE MOBILITY
  
  **Role:** Solution Architect
  
  **Technologies:** .NET Core, Angular, .NET Core Web API, Azure DevOps, MSSQL, .NET Core Worker Service, Odata SAP Integration
  
  **Project Description:**
  
  In my capacity as a Solution Architect, I spearheaded a team dedicated to architecting solutions for a prominent color company's employee mobility initiative. Our primary goal was to enhance the delivery of SAP data to mobile applications, automate routine employee tasks, and establish a resilient backend infrastructure to underpin these transformative endeavors.
  
  We harnessed a range of cutting-edge technologies, including .NET Core for robust application development, Angular for creating dynamic user interfaces, .NET Core Web API for building strong backend services, Azure DevOps for streamlined development and deployment, MSSQL for efficient data management, .NET Core Worker Service for task automation, and Odata SAP Integration to seamlessly connect with SAP systems.
  
  Our project's focus centered on improving employee mobility within the company, ensuring that SAP data is readily accessible on mobile devices, and optimizing workflows through automation. As the Solution Architect, I played a pivotal role in designing the architecture that facilitated these advancements, ultimately contributing to the company's operational efficiency and competitiveness.
  
  
  ### Expiry Control System
  
  **Role: **Solution Architect
  
  **Technologies:** .NET Core, MSSQL, Razor Pages, ASP.NET Identity, Docker, Azure DevOps (CI & CD)
  
  **Project Description:**
  
  As a Solution Architect, I've undertaken a pivotal role in crafting the architecture for the Expiry Control System, a project of significance for a leading pharmaceutical company. The primary objective of this initiative is to enhance the company's ability to manage expired products efficiently by ensuring the timely consumption of items with short expiry dates.
  
  To achieve this, I employed a cutting-edge technology stack, featuring .NET Core for robust application development, MSSQL for efficient data management, Razor Pages for creating intuitive user interfaces, ASP.NET Identity for secure user authentication, Docker for seamless containerization, and Azure DevOps for continuous integration and continuous deployment (CI & CD) processes.
  
  The Expiry Control System project is integral to the pharmaceutical company's operations, as it enables them to proactively address product expiration issues, thereby optimizing inventory management and ensuring product safety and compliance. My role as a Solution Architect involved designing the architecture that facilitates these objectives, utilizing the latest technology to meet the company's evolving needs.
  
  
  ### POSM Distribution & Tracking
  
  **Role:** Lead Developer
  
  **Technologies:** .NET Core, Angular, .NET Core Web API, Azure Active Directory Integration, MSSQL, SSIS
  
  **Project Description:**
  
  In my role as Lead Developer, I have been instrumental in the development of the POSM Distribution & Tracking system. This project focuses on the creation of a backend portal designed to efficiently distribute and track POSM (Display Product Of Tobacco) items for field merchandisers, with an accompanying application catering to end-user inputs.
  
  The technology stack employed for this project comprises .NET Core for robust application development, Angular for creating dynamic user interfaces, .NET Core Web API for building resilient backend services, Azure Active Directory Integration for secure access management, MSSQL for efficient data storage and management, and SSIS for data integration and transformation.
  
  The POSM Distribution & Tracking system plays a crucial role in enhancing the field merchandising process, ensuring the seamless distribution and tracking of tobacco display products. My role as Lead Developer involved leveraging these technologies to deliver a reliable and efficient solution that meets the specific needs of our end-users.
  
  
  ### IDIM | Integrated Solution
  
  **Role:** Lead Developer
  
  **Technologies:** ASP.NET MVC, Razor Views, jQuery, BijoyToUnicode, Database Automation
  
  **Project Description:**
  
  As Lead Developer, I have played a pivotal role in the IDIM (Integrated Solution) project, which is one of the most significant government initiatives. This project aims to streamline operations across ten branches of the Security Force HQ by consolidating ten projects into a unified platform.
  
  The technology stack used for this endeavor includes ASP.NET MVC for building robust web applications, Razor Views for creating dynamic web pages, jQuery for enhancing user interactions, BijoyToUnicode for character encoding and conversion, and a sophisticated database system for automating essential processes.
  
  The IDIM project is a monumental effort aimed at improving efficiency and coordination within the Security Force HQ. As Lead Developer, my responsibilities included harnessing these technologies to create a comprehensive and unified solution that meets the diverse needs of the ten branches and enhances the overall effectiveness of the organization.
  
  
  ### Mobile Sales Force Automation
  
  
  
  * **Role:** Lead Developer
  * **Technologies:** C#, WCF, Oracle, SAP Integration 
  * **Description:** Designed and developed a cutting-edge mobile sales force automation solution for leading pharmaceutical companies in Bangladesh. This application empowered employees to streamline order management, daily call reporting, expense tracking, prescription surveys, and real-time stock monitoring. As the Lead Developer, I played a pivotal role in architecting and building the solution, ensuring its scalability, reliability, and seamless integration with Cosmos DB. My contributions significantly enhanced field sales operations, improving efficiency and customer service.
  
  
  ### Thread Management Application
  
  
  
  * Role: Software Engineer
  * Technologies: ASP.NET WebForms, MSSQL, Javascript, jQuery
  * Description: Contributed to the development of a Thread Management Application designed for optimizing garment production processes. My responsibilities included designing and implementing features to manage thread inventory and allocation efficiently. I also integrated real-time data updates, enhancing coordination among production teams. This project significantly improved production workflow and thread management.
  
  
  ### Land Management System for Garments Industry
  
  
  
  * Role: Software Engineer
  * Technologies: ASP.NET, MSSQL, Javascript, jQuery
  * Description: Developed a comprehensive Land Management System tailored to the needs of the garments industry. This system facilitated the recording and management of land-related data, including land records, sales, and purchases. My role included designing a user-friendly interface and implementing features for efficient data entry and retrieval. The project streamlined land management processes and ensured accurate record-keeping.
  
  
  ### Commercial Management Software for Garments Industry
  
  
  
  * Role: Software Engineer
  * Technologies: ASP.NET MVC, MSSQL, Javascript, jQuery, SFTP Integration, CRM Integration
  * Description: Played a key role in the development of a Commercial Management Software solution customized for the garments industry. This system enabled efficient management of sales, discounts, promotional offers, and related activities. I was responsible for developing the sales module, implementing discount mechanisms, and integrating the software with customer relationship management (CRM) systems. The project enhanced sales processes and customer engagement for the garment industry.
  
  
  ### Supply Chain Management
  
  
  
  * Role: Junior Software Engineer
  * Technologies: Supply Chain Management, Product Serial Numbers, SCM to CRM Integration via SFTP
  * Description: Contributed to the development of a Supply Chain Management solution for one of Bangladesh's largest corporate groups. My responsibilities included implementing robust code for managing a large number of product serial numbers and integrating the supply chain data with CRM systems through secure SFTP protocols. This project improved supply chain efficiency and enhanced the accuracy of product movement tracking.
  
  
  ### Enterprise Resource Planning (ERP) Implementation
  
  
  
  * Technologies: ASP.NET WebForms, MSSQL, Javascript, jQuery
  * Description: Led the implementation of a comprehensive Enterprise Resource Planning (ERP) system. This project aimed to streamline and optimize various business processes within the organization. My role included developing interactive and user-friendly interfaces using ASP.NET WebForms, integrating robust database solutions, and enhancing user experience with Javascript and jQuery. The ERP system significantly improved operational efficiency and data management across departments.
  
  
  ### Financial Management System
  
  
  
  * Technologies: ASP.NET MVC, MSSQL, Javascript, jQuery
  * Description: Played a pivotal role in the development of a Financial Management System, which provided advanced tools for financial tracking and reporting. My responsibilities included designing and implementing features using ASP.NET MVC, optimizing data management with MSSQL, and enhancing user interactivity through Javascript and jQuery. This system improved financial transparency and streamlined financial operations.
  
  
  ### Insurance Lead Management
  
  * Role: Software Engineer 
  
  * Technologies: ASP.NET, MVC, Angular, .NET, Web API, Scheduler, MSSQL
  * Description: Contributed significantly to the Insurance Lead Management system, leveraging modern technologies. As part of the development team, I implemented Angular for dynamic front-end interfaces, .NET for robust backend logic, and integrated Web API for data access. Additionally, I incorporated a scheduler to automate lead management processes. The system improved lead tracking and conversion, enhancing overall insurance business operations.
  
  
  ### Online Registration & Result System
  
  
  
  * Role: Lead Developer
  * Technologies: ASP.NET MVC, MSSQL, AWS, Razor Views, Javascript, jQuery
  * Description: As the Lead Developer, spearheaded the development of an Online Registration & Result System. This system streamlined registration processes and result management for educational institutions. Leveraging AWS for hosting, I developed efficient Razor Views, optimized data management using MSSQL, and improved user interactivity with Javascript and jQuery. The project delivered an intuitive and scalable solution for institutions.`

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Projects at a glance</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {/* {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))} */}

            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
              </div>
            </div>

            <a
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              href="https://rabbyhasan.com.bd"
            >
              See projects here{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
