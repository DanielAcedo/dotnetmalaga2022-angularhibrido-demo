import * as angular from "angular";
import WelcomeComponent from "./welcome/welcome";

export const register = () => {
  const appModule = angular.module("myApp", []);

  appModule.component("welcome", WelcomeComponent);

  return appModule;
};
