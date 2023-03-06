import Team from "./team.js";

class App {
  constructor(jobTitles) {
    this.jobTitles = jobTitles;
    this.team = new Team("new team");
  }
  #createInputElement = (title) => {
    const label = document.createElement("label");
    label.className = "form-label";
    const input = document.createElement("input");
    input.className = "form-input";
    input.setAttribute("type", "text");
    input.setAttribute("name", `${title}`);
    label.append(`${title}:`);
    label.append(input);
    return label;
  };
  #createBtn = (text, className, handler) => {
    const createTeamBtn = document.createElement("button");
    createTeamBtn.className = `${className}`;
    createTeamBtn.innerHTML = `${text}`;
    createTeamBtn.addEventListener("click", handler);
    return createTeamBtn;
  };

  renderForm = () => {
    const teamForm = document.querySelector(".team-form");
    this.jobTitles.forEach((jobTitle) => {
      teamForm.append(this.#createInputElement(jobTitle));
    });
    teamForm.append(
      this.#createBtn("create-team", "create-team-btn", this.team.createTeam)
    );
    teamForm.append(
      this.#createBtn("show-team", "show-team-btn", this.team.showTeam)
    );
  };
}

const newApp = new App([
  "Junior developer",
  "Middle developer",
  "Senior developer",
  "Junior QA",
  "Middle QA",
  "Senior QA",
  "Project manager",
]);
newApp.renderForm();
