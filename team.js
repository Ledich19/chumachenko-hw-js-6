import Employee from "./employee.js";

export default class Team {
  constructor(teamName) {
    this.teamName = teamName;
    this._team = [];
  }
  createTeam = () => {
    const teamForm = document.querySelector(".team-form");
    teamForm.querySelectorAll("input").forEach((userItem) => {
      if (!userItem.value) {
        return;
      }
      const newEmployee = new Employee(
        userItem.value,
        userItem.name
      );
      this._team = this._team.concat(newEmployee);
      console.log(this._team);
    });
  };
  showTeam = () => {
    const showTeam = document.querySelector(".show-team");
    this._team.forEach((employ) => {
      const div = document.createElement("div");
      div.innerHTML = employ.tellAboutYourSelf();
      showTeam.append(div);
    });
  };
}
