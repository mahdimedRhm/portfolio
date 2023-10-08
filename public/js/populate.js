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
    const projectsContainer = document.getElementById('projects-container');
    const educationContainer = document.getElementById('education-container');
    const expContainer = document.getElementById('exp-container');
    // Loop through the project data and create project entries
    dummyData.forEach(project => {
        const projectEntry = document.createElement('div');
        projectEntry.classList.add('project');

        const titleElement = document.createElement('h3');
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;

        const linkElement = document.createElement('a');
        linkElement.href = project.link;
        linkElement.textContent = 'View';

        projectEntry.appendChild(titleElement);
        projectEntry.appendChild(descriptionElement);
        projectEntry.appendChild(linkElement);

        projectsContainer.appendChild(projectEntry);
        
    });
    dummyData.forEach(project => {
        const projectEntry = document.createElement('div');
        projectEntry.classList.add('project');

        const titleElement = document.createElement('h3');
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;

        const linkElement = document.createElement('a');
        linkElement.href = project.link;
        linkElement.textContent = 'View';

        projectEntry.appendChild(titleElement);
        projectEntry.appendChild(descriptionElement);
        projectEntry.appendChild(linkElement);

        educationContainer.appendChild(projectEntry);
        
    });
    dummyData.forEach(project => {
        const projectEntry = document.createElement('div');
        projectEntry.classList.add('project');

        const titleElement = document.createElement('h3');
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;

        const linkElement = document.createElement('a');
        linkElement.href = project.link;
        linkElement.textContent = 'View';

        projectEntry.appendChild(titleElement);
        projectEntry.appendChild(descriptionElement);
        projectEntry.appendChild(linkElement);

        expContainer.appendChild(projectEntry);
    });
});
