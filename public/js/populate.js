 // JavaScript code to populate the project data dynamically
document.addEventListener('DOMContentLoaded', function () {
    fetchProjects();
    // fetchExperiences();
    // fetchEducations();
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
        const projectsList = document.getElementById('projects');
        // Loop through the projects and add them to the list
        projects.forEach((project) => {
          const listItem = document.createElement('div');
          listItem.classList.add('pl-lg-4')
          listItem.innerHTML = `
            <div class="row">
                <div class="col-lg-4">
                    ${project.name} (Developed With ${project.team})
                </div>
                <div class="col-lg-4"></div>
                <div class="col-4 text-right">
                    <a href="${project.link}" class="btn btn-sm btn-primary">Link</a>
                </div>
            </div><br>
            ${project.description}
            <hr class="my-4">
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
        const experiencesList = document.getElementById('experiences');
        // Loop through the experiences and add them to the list
        experiences.forEach((experience) => {
          const listItem = document.createElement('div');
          listItem.classList.add('pl-lg-4')
          listItem.innerHTML = `
          <div class="row">
          <div class="col-lg-4">
              ${experience.role} at ${experience.company}
          </div>
          <div class="col-lg-4">
          </div>
          <div class="col-4 text-right">
              <p>${experience.start_date}  ${experience.end_date}</p>
          </div>
          </div><br>
          ${experience.description}
          <hr class="my-4">
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
        const educationsList = document.getElementById('educations');
        // Loop through the educations and add them to the list
        educations.forEach((education) => {
          const listItem = document.createElement('div');
          listItem.classList.add('pl-lg-4')
          listItem.innerHTML = `
            <div class="row">
            <div class="col-lg-4">
                ${education.course} at ${education.school}
            </div>
            <div class="col-lg-4">
              <p>${education.start_date} To: ${education.end_date}</p>
            </div>
            <div class="col-4 text-right">
                <a href="${education.link}" class="btn btn-sm btn-primary">Link</a>
            </div>
            </div><br>
            ${education.description}
            <hr class="my-4">
          `;
          educationsList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error('Fetch error:', error);
    });
}