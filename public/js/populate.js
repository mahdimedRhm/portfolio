 // JavaScript code to populate the project data dynamically
const dummyData = [
    {
        title: 'name 1',
        description: 'Description for name 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'https://e-services.mulhouse-alsace.fr',
        start_date: '01/01/2020',
        end_date: '12/12/2022'
    },
    {
        title: 'name 2',
        description: 'Description for name 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'https://play.google.com/store/apps/details?id=com.zorx.gaming.algoman',
        start_date: '01/01/2020',
        end_date: '12/12/2022'
    },
    {
        title: 'name 2',
        description: 'Description for name 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'https://play.google.com/store/apps/details?id=com.zorx.gaming.algoman',
        start_date: '01/01/2020',
        end_date: '12/12/2022'
    },
    // Add more project objects as needed
];
// Get the projects container element
document.addEventListener('DOMContentLoaded', function () {
    fetchProjects();
    fetchExperiences();
    fetchEducations();
    //example of using dummy data for you widad if needed
    //const educationContainer = document.getElementById('education-container');
    //// Loop through the project data and create project entries
    //dummyData.forEach(project => {
    //    const projectEntry = document.createElement('div');
    //    projectEntry.classList.add('project');
    //    const titleElement = document.createElement('h3');
    //    titleElement.textContent = project.title;
    //    const descriptionElement = document.createElement('p');
    //    descriptionElement.textContent = project.description;
    //    const linkElement = document.createElement('a');
    //    linkElement.href = project.link;
    //    linkElement.textContent = 'View';
    //    projectEntry.appendChild(titleElement);
    //    projectEntry.appendChild(descriptionElement);
    //    projectEntry.appendChild(linkElement);
    //    educationContainer.appendChild(projectEntry);
    //    
    //});
    
});

function fetchProjects() {
    fetch('/api/projects') // Replace with your API endpoint URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then((projects) => {
        // Get the projects list element
        const projectsList = document.getElementById('projects-container');
        // Loop through the projects and add them to the list
        projects.forEach((project) => {
          const listItem = document.createElement('div');
          listItem.classList.add('project')
          listItem.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p>Team: ${project.team}</p>
            <p>link: ${project.link}</p>
          `;
          projectsList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error('Fetch error:', error);
    });
}

function fetchExperiences() {
    fetch('/api/experiences') // Replace with your API endpoint URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then((experiences) => {
        // Get the experiences list element
        const experiencesList = document.getElementById('exp-container');
        // Loop through the experiences and add them to the list
        experiences.forEach((experience) => {
          const listItem = document.createElement('div');
          listItem.classList.add('project')
          listItem.innerHTML = `
            <h3>${experience.role}</h3>
            <p>${experience.company}</p>
            <p>${experience.description}</p>
            <p>From: ${experience.start_date}</p>
            <p>To: ${experience.end_date}</p>
            <p>link: ${experience.link}</p>
          `;
          experiencesList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error('Fetch error:', error);
    });
}

function fetchEducations(){
    fetch('/api/educations') // Replace with your API endpoint URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then((educations) => {
        // Get the educations list element
        const educationsList = document.getElementById('education-container');
        // Loop through the educations and add them to the list
        educations.forEach((education) => {
          const listItem = document.createElement('div');
          listItem.classList.add('project')
          listItem.innerHTML = `
            <h3>${education.course}</h3>
            <p>${education.school}</p>
            <p>${education.description}</p>
            <p>From: ${education.start_date}</p>
            <p>To: ${education.end_date}</p>
            <p>link: ${education.link}</p>
          `;
          educationsList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error('Fetch error:', error);
    });
}