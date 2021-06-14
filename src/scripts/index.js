import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "./components/app-footer";
import "./components/app-hero";
import "./components/app-nav";
import "./components/app-grid";
import "./components/app-grid-item";
import Data from "./data/getdata";

// membuat sebuah function untuk mengambil data dan memasang ke grid
const callDataFunction = () => {
  const gridList = document.querySelector("app-grid");
  const fallbackResult = (message) => {
    gridList.renderError(message);
  };

  const renderResult = (results) => {
    gridList.grids = results;
  };

  async function getData() {
    try {
      const data = await Data.getAllData();
      renderResult(data);
    } catch (message) {
      fallbackResult(message);
    }
  }

  getData();
};

callDataFunction();
