import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const data = `
  1. Mobile Sales Force Automation



* Role: Lead Developer
* Technologies: .NET 5, Vue.js (Vue 2 and Vue 3), Microservices, .NET Core Web API, Docker, Azure DevOps, Cosmos DB
* Description: Designed and developed a cutting-edge mobile sales force automation solution for leading pharmaceutical companies in Bangladesh. This application empowered employees to streamline order management, daily call reporting, expense tracking, prescription surveys, and real-time stock monitoring. As the Lead Developer, I played a pivotal role in architecting and building the solution, ensuring its scalability, reliability, and seamless integration with Cosmos DB. My contributions significantly enhanced field sales operations, improving efficiency and customer service.

2. Employee Mobility



* Role: Senior Software Engineer
* Technologies: .NET Core, Angular, .NET Core Web API, Azure DevOps, MSSQL, .NET Core Worker Service, Odata, SAP Integration
* Description: Collaborated with cross-functional teams to deliver a comprehensive employee mobility solution for a top-tier color company. The project aimed to provide employees with real-time access to SAP data through mobile apps, simplifying their daily tasks and automating various activities. As a Senior Software Engineer, I played a key role in building a robust backend system, supporting critical activities and data access. My contributions resulted in improved workflow efficiency and data accessibility for employees.

3. Expiry Control System



* Role: Lead Developer
* Technologies: .NET Core, Angular, Azure Active Directory Integration, MSSQL, SSIS
* Description: Developed a sophisticated Expiry Control System for a global pharmaceutical company to effectively manage product expiry dates. This system enabled the company to monitor and optimize the utilization of short-expiry products within specified timeframes. As the Lead Developer, I architected the solution, integrated Azure Active Directory for secure authentication, and implemented data transformation using SSIS. The project's success led to better control and reduction of product waste.

4. POSM Distribution & Tracking



* Role: Lead Developer
* Technologies: ASP.NET MVC, Razor Views, jQuery, BijoyToUnicode Automation, Form Database
* Description: Designed and developed a backend portal for distributing and tracking Display Products Of Tobacco (POSM) for field merchandisers. This solution streamlined the distribution process and improved tracking capabilities for end-users. As the Lead Developer, I implemented ASP.NET MVC, optimized front-end interactions with jQuery, and automated data conversion using BijoyToUnicode. This project significantly enhanced the efficiency of POSM management and reporting.

5. Integrated Solution for Security Force HQ



* Role: Lead Developer
* Technologies: .NET 6, Microservices, .NET Core Web API, Docker, Azure DevOps, Kubernetes, Azure Service Bus, Cosmos DB
* Description: Contributed to the development of an integrated solution for Security Force HQ, encompassing ten distinct projects. As the Lead Developer, I played a critical role in architecting and implementing a scalable and secure infrastructure using Microservices, Kubernetes, and Azure technologies. This multifaceted project enhanced the operational efficiency and coordination of security forces across various branches, resulting in improved security and responsiveness.

6. Informatiq - Digitalization for Oil and Gas Industry



* Role: Lead Developer
* Technologies: .NET 6, Microservices, .NET Core Web API, Docker, Azure DevOps, Kubernetes, Azure Service Bus, Azure Functions, MSSQL
* Description: Collaborated with a highly experienced software architect in the development of digitalization and visualization solutions for the oil and gas industry. As a Lead Developer, I contributed to building innovative features and businesses. The project leveraged the latest technologies to drive digital transformation in the industry, improving data visualization and analysis for clients.

7. ASP.NET WebForms Thread Management Application



* Role: Software Engineer
* Technologies: ASP.NET WebForms, MSSQL, Javascript, jQuery
* Description: Contributed to the development of a Thread Management Application designed for optimizing garment production processes. My responsibilities included designing and implementing features to manage thread inventory and allocation efficiently. I also integrated real-time data updates, enhancing coordination among production teams. This project significantly improved production workflow and thread management.

8. Land Management System for Garments Industry



* Role: Software Engineer
* Technologies: ASP.NET, MSSQL, Javascript, jQuery
* Description: Developed a comprehensive Land Management System tailored to the needs of the garments industry. This system facilitated the recording and management of land-related data, including land records, sales, and purchases. My role included designing a user-friendly interface and implementing features for efficient data entry and retrieval. The project streamlined land management processes and ensured accurate record-keeping.

9. Commercial Management Software for Garments Industry



* Role: Software Engineer
* Technologies: ASP.NET MVC, MSSQL, Javascript, jQuery, SFTP Integration, CRM Integration
* Description: Played a key role in the development of a Commercial Management Software solution customized for the garments industry. This system enabled efficient management of sales, discounts, promotional offers, and related activities. I was responsible for developing the sales module, implementing discount mechanisms, and integrating the software with customer relationship management (CRM) systems. The project enhanced sales processes and customer engagement for the garment industry.

10. Supply Chain Management for Leading Companies



* Role: Junior Software Engineer
* Technologies: Supply Chain Management, Product Serial Numbers, SCM to CRM Integration via SFTP
* Description: Contributed to the development of a Supply Chain Management solution for one of Bangladesh's largest corporate groups. My responsibilities included implementing robust code for managing a large number of product serial numbers and integrating the supply chain data with CRM systems through secure SFTP protocols. This project improved supply chain efficiency and enhanced the accuracy of product movement tracking.

11. Enterprise Resource Planning (ERP) Implementation



* Technologies: ASP.NET WebForms, MSSQL, Javascript, jQuery
* Description: Led the implementation of a comprehensive Enterprise Resource Planning (ERP) system. This project aimed to streamline and optimize various business processes within the organization. My role included developing interactive and user-friendly interfaces using ASP.NET WebForms, integrating robust database solutions, and enhancing user experience with Javascript and jQuery. The ERP system significantly improved operational efficiency and data management across departments.

12. Financial Management System



* Technologies: ASP.NET MVC, MSSQL, Javascript, jQuery
* Description: Played a pivotal role in the development of a Financial Management System, which provided advanced tools for financial tracking and reporting. My responsibilities included designing and implementing features using ASP.NET MVC, optimizing data management with MSSQL, and enhancing user interactivity through Javascript and jQuery. This system improved financial transparency and streamlined financial operations.

13. Insurance Lead Management



* Technologies: ASP.NET, MVC, Angular, .NET, Web API, Scheduler, MSSQL
* Description: Contributed significantly to the Insurance Lead Management system, leveraging modern technologies. As part of the development team, I implemented Angular for dynamic front-end interfaces, .NET for robust backend logic, and integrated Web API for data access. Additionally, I incorporated a scheduler to automate lead management processes. The system improved lead tracking and conversion, enhancing overall insurance business operations.

14. Commercial Management Software Enhancement



* Technologies: ASP.NET WebForms, MSSQL, Javascript, jQuery
* Description: Collaborated in the enhancement of a Commercial Management Software solution for the garment industry. This project involved optimizing existing software by utilizing ASP.NET WebForms for efficient data handling, enhancing database management with MSSQL, and improving user interfaces using Javascript and jQuery. The enhancements led to more effective commercial management processes and data accuracy.

15. Online Registration & Result System



* Role: Lead Developer
* Technologies: ASP.NET MVC, MSSQL, AWS, Razor Views, Javascript, jQuery
* Description: As the Lead Developer, spearheaded the development of an Online Registration & Result System. This system streamlined registration processes and result management for educational institutions. Leveraging AWS for hosting, I developed efficient Razor Views, optimized data management using MSSQL, and improved user interactivity with Javascript and jQuery. The project delivered an intuitive and scalable solution for institutions.

16. Mobile Sales Force Automation (MSFA)



* Role: Lead Developer
* Technologies: C#, WCF, Oracle, SAP Integration
* Description: Led the development of a Mobile Sales Force Automation (SFA) solution tailored for leading pharmaceutical companies in Bangladesh. This application empowered employees to streamline order management, daily call reporting, expense tracking, prescription surveys, and stock monitoring. The project involved integrating with Oracle and SAP systems, ensuring seamless data exchange. The SFA system significantly improved sales efficiency and data accuracy.
  `
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
