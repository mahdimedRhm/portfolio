-- CREATE DATABASE portfolio;

-- USE portfolio;

-- Create the 'experiences' table
CREATE TABLE experiences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(255),
    company VARCHAR(255),
    start_date VARCHAR(255),
    end_date VARCHAR(255),
    description TEXT,
    link VARCHAR(255)
);

-- Create the 'projects' table
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    team VARCHAR(255),
    description TEXT,
    link VARCHAR(255)
);

-- Create the 'educations' table
CREATE TABLE educations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course VARCHAR(255),
    school VARCHAR(255),
    description TEXT,
    start_date VARCHAR(255),
    end_date VARCHAR(255),
    link VARCHAR(255)
);

-- Insert data into the 'projects' table
INSERT INTO projects (name, description, team, link)
VALUES
  ('Mulhouse Water Services (Eupla!)', 'Mulhouse Water Service is a cutting-edge digital platform designed to revolutionize water management within the city of Mulhouse. This innovative system empowers city residents by enabling them to conveniently pay their water invoices online, monitor their consumption through informative graphs, and establish alerts for both reaching specified consumption limits and detecting potential water leaks.', 'Numesia', 'https://e-services.mulhouse-alsace.fr/catalogue/mulhouse/sde/accueil'),
  ('Mulhouse Parking', 'The Mulhouse Parking Management System is a user-friendly platform dedicated to managing parking fees for the residents of Mulhouse. This convenient system allows residents to easily pay for parking in various areas of Mulhouse, taking into account dynamic pricing based on location and driver type.', 'Numesia', 'https://e-services.mulhouse-alsace.fr/catalogue/mulhouse/stationnement/accueil'),
  ('Mulhouse Aquatique Activities', 'Mulhouse Aquatique Services is a comprehensive platform designed to simplify the subscription process and enhance participation in a wide variety of aquatic activities available in the vibrant city of Mulhouse. Offering an array of enticing options such as swimming courses, aquatic events, and even activities tailored for those with aquaphobia, along with access to multiple swimming pools spread across 38 communes in Mulhouse, this platform serves as the ultimate solution for water enthusiasts.', 'Numesia', 'https://e-services.mulhouse-alsace.fr/__proxy/cms/page/catalog-m2a-aqua'),
  ('AlgoMan', 'An Android game crafted with Unity 3D and powered by C#. The core objective of the game is to challenge players to accumulate resources strategically, ultimately advancing to higher levels. This unique gaming experience demands players to utilize their problem-solving skills by creating algorithms based on instructions provided within the game.', 'Zorx Corporate', 'https://play.google.com/store/apps/details?id=com.zorx.gaming.algoman&pli=1');

-- Insert data into the 'experiences' table
INSERT INTO experiences (role, company, description, start_date, end_date, link) VALUES
  ('Full-stack Developer', 'Numesia', '
  - Played a pivotal role in crafting essential features for significant projects, including the Mulhouse parking system and Mulhouse activities platform. Within a collaborative team of developers, we
  collectively voted on task deadlines and maintained effective communication throughout the project
  development cycle. <br>
  - Leveraging PHP and Laravel, designed and implemented RESTful APIs,
  ensuring efficient data exchange between the front-end and back-end components of our applications. This
  included crafting secure and performant API endpoints to meet project requirements. <br>
  - Developed front-end solutions using JavaScript and Vue.js, ensuring the appropriate
  connection of the front end and the API. Assessed the backend response time, optimizing API requests to
  enhance overall system performance. <br>
  - Managed databases using both MySQL and MongoDB, tailoring the choice of
  database to suit the specific needs of each project. This versatility allowed me to optimize data storage and
  retrieval, enhancing overall application performance.
  - Actively maintained projects by promptly addressing and resolving
  bug fixes, implementing data changes using PHP or bash scripts, and adapting user interaction changes to
  enhance project stability and user experience.', '06/2020', '12/2021', 'https://www.google.fr/'),
  ('Software Developer', 'Zorx', '
  - Developed various features for more than 10 projects, adhering to the requirements set by senior management and diverse clients.<br>
  - Expertly resolved Git conflicts within the team, facilitating smooth collaboration and code integration.<br>
  - Actively participated in the modeling of solutions using UML (Unified Modeling Language),contributing to the design and planning phases of projects.
  ', '06/2019', '06-2020', 'https://www.google.fr/'),
  ('Front-end Developer', 'Icar', '
  - Implemented front-end designs and functionalities based on specifications provided by UX designers and the senior management team, ensuring a seamless user experience. <br>
  - Successfully integrated RESTful APIs into mobile applications, including real-time updating of backend responses as required, to enhance application functionality and data synchronization. <br>
  - Effectively communicated and collaborated with cross-functional teams, including
  design, marketing, and senior management, to improve the user experience and user interface of mobile applications. This collaborative approach resulted in enhanced user engagement and satisfaction.
  ', '12/2018', '05/2019', 'https://www.google.fr/');

-- Insert data into the 'educations' table
INSERT INTO educations (course, school, description, start_date, end_date, link) VALUES
  ('Masters in Cyber Security', 'University of Bradford', 'Description', '2020-01-01', '2023-12-12', 'https://www.google.fr/'),
  ('Masters in Cryptography and Security', 'University of Batna 2', 'Description', '2020-01-01', '2023-12-12', 'https://www.google.fr/'),
  ('Bachelors in Information Systems', 'University of Batna 2', 'Description', '2020-01-01', '2023-12-12', 'https://www.google.fr/');
