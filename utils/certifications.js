import { openLink } from "./methods"

const certifications = {
    heading: `Licenses & certifications`,
    list: [
        {
            size: 2,
            title: 'Python Professional Certification',
            platform: 'Python Institute - Advanced Python Programming & AI Development',
            link: '',
            date: 'Issued 2023 · No Expiration Date',
            logo: '/assets/python.png',
            aos: 'fade-right',
            description: `Advanced Python Programming with focus on API Development, Machine Learning, and Data Science.
            Specialized in NumPy, Pandas, and Scikit-learn for data analysis.
            Created REST APIs using Flask and FastAPI frameworks.
            Implemented authentication systems and database integrations.
            Built chatbots using Natural Language Processing techniques.
            Developed automated testing frameworks with PyTest.
            Experience with web scraping using Beautiful Soup and Selenium.`
        },
        {
            size: 2,
            title: 'Advanced Robotics Programming',
            platform: 'Club robotique et programmation - Agadir - Robotics & Automation',
            link: '',
            date: 'Issued 2022 · No Expiration Date',
            logo: '/assets/robotics.png',
            aos: 'fade-left',
            description: `Comprehensive robotics programming using Arduino and Raspberry Pi.
            Mastered Robot Operating System (ROS) for robot control.
            Implemented sensor integration with ultrasonic and infrared sensors.
            Developed motion control algorithms for precise movement.
            Created computer vision systems for object detection and tracking.
            Built autonomous navigation systems with obstacle avoidance.
            Programmed servo motors and stepper motors for robotic arms.`
        },
        {
            size: 2,
            title: 'Data Management & Analytics',
            platform: 'Orange Digital Center - Agadir - Big Data & Business Intelligence',
            link: '',
            date: 'Issued 2024 · No Expiration Date',
            logo: '/assets/data.png',
            aos: 'fade-right',
            description: `Advanced data analysis using SQL and NoSQL databases.
            Created data visualization dashboards with real-time updates.
            Implemented ETL pipelines for data transformation.
            Used Power BI for business intelligence reporting.
            Developed predictive models using statistical analysis.
            Mastered data cleaning and preprocessing techniques.
            Experience with big data tools like Hadoop and Spark.`
        },
        {
            size: 2,
            title: 'Full Stack Web Development',
            platform: 'Energiedin Centre - Agadir - Modern Web Technologies',
            link: '',
            date: 'Issued 2024 · No Expiration Date',
            logo: '/assets/webdev.png',
            aos: 'fade-left',
            description: `Frontend development with React.js and Next.js frameworks.
            Backend development using Node.js and Express.js.
            Database management with MongoDB and PostgreSQL.
            API development following RESTful architecture.
            Implemented real-time features using WebSocket.
            Created responsive designs with Tailwind CSS.
            Version control using Git and GitHub.
            Deployed applications using Docker containers.
            Implemented user authentication and authorization.
            Experience with cloud services and serverless functions.`
        }
    ],
    methods: {
        openLink
    }
}

export default certifications