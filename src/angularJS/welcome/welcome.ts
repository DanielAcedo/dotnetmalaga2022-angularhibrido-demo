import template from "./welcome.html";

class WelcomeController {
  showAlert() {
    alert("hola");
  }
}

const welcomeComponent: ng.IComponentOptions = {
  template,
  controller: WelcomeController,
};
export default welcomeComponent;
