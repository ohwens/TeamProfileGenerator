const ProfileInfo = require("../index");

const generateManager = function manager(manager) {
  return `
        
        <div class="col s4">
            <div class="card">
                <h2 class="card-title card-panel blue lighten-2 first-name">${manager.getName()}
                    <br>
                    <span class = "icon">☕</span>
                    <span class = "job-title">Manager</span>
                </h2>
            <div class="card-content">
                <ul class="collapsible">
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>ID:&nbsp; <span class="id">${manager.getId()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>E-Mail:&nbsp; <span class="Email">${manager.getEmail()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>Office Number:&nbsp; <span class="office-number">${manager.getOfficeNumber()}</span></div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        `;
};

const generateEngineer = function engineer(engineer) {
  return `
        <div class="col s4">
            <div class="card">
                <h2 class="card-title card-panel blue lighten-2 first-name">${engineer.getName()}
                    <br>
                    <span class = "icon">👓</span>
                    <span class = "job-title">Engineer</span>
                </h2>
            <div class="card-content">
                <ul class="collapsible">
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>ID:&nbsp; <span class="id">${engineer.getId()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>E-Mail:&nbsp; <span class="email">${engineer.getEmail()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>Office Number:&nbsp; <span class="github">${engineer.getGitHub()}</span></div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        `;
};

const generateIntern = function intern(intern) {
  return `
        <div class="col s4">
            <div class="card">
                <h2 class="card-title card-panel blue lighten-2 first-name">${intern.getName()}
                    <br>
                    <span class = "icon">🎓</span>
                    <span class = "job-title">Intern</span>
                </h2>
            <div class="card-content">
                <ul class="collapsible">
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>ID:&nbsp; <span class="id">${intern.getId()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>E-Mail:&nbsp; <span class="Email">${intern.getEmail()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>Office Number:&nbsp; <span class="school">${intern.getSchool()}</span></div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        `;
};

const generateTeam = (employees) => {
  let cards = ``;
  for (let i = 0; i < employees.length; i++) {
    switch (employees[i].getRole()) {
      case "Manager":
        cards+= generateManager(employees[i]);
        break;
      case "Intern":
        cards+= generateIntern(employees[i]);
        break;
      case "Engineer":
        cards+=generateEngineer(employees[i]);
        break;
    }
  }
  return cards;
};

const generateHTML = function mainPage(employees) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <title>Office Employees</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo center">My Team</a>
            </div>
        </nav>
        <div class="row">
        ${generateTeam(employees)}
        </div>     
    </div>     
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </html>
        `;
};
module.exports = generateHTML; 

