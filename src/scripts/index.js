import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "./components/app-footer";
import "./components/app-hero";
import "./components/app-nav";
import "./components/app-grid";
import "./components/app-grid-item";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({ content: document.querySelector("#main-place") });

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
