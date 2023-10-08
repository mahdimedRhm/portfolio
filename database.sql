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
  ('AlgoMan', 'Description for Project Algoman', 'Zorx Corporate', 'https://www.google.fr/'),
  ('Mulhouse Parking', 'Description for Mulhouse parking', 'Numesia', 'https://www.google.fr/'),
  ('Mulhouse Activities', 'Description for Mulhouse Activities', 'Numesia', 'https://www.google.fr/'),
  ('Mulhouse Aqua', 'Description for Mulhouse Aqua', 'Numesia', 'https://www.google.fr/');

-- Insert data into the 'experiences' table
INSERT INTO experiences (role, company, description, start_date, end_date, link) VALUES
  ('Full-stack Developer', 'Numesia', 'Description', '2020-01-01', '2023-12-12', 'https://www.google.fr/'),
  ('Software Developer', 'Zorx', 'Description', '2020-01-01', '2023-12-12', 'https://www.google.fr/'),
  ('Front-end Developer', 'Icar', 'Description', '2020-01-01', '2023-12-12', 'https://www.google.fr/');

-- Insert data into the 'educations' table
INSERT INTO educations (course, school, description, start_date, end_date, link) VALUES
  ('Masters in Cyber Security', 'University of Bradford', 'Description', '2020-01-01', '2023-12-12', 'https://www.google.fr/'),
  ('Masters in Cryptography and Security', 'University of Batna 2', 'Description', '2020-01-01', '2023-12-12', 'https://www.google.fr/'),
  ('Bachelors in Information Systems', 'University of Batna 2', 'Description', '2020-01-01', '2023-12-12', 'https://www.google.fr/');
