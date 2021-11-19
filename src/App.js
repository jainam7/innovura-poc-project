import React, { Component } from "react";
import SideBarComponent from "./Pages/sideBar";
import CompanyDetails from "./Pages/companyDetails";
import "./Styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <SideBarComponent />
        <CompanyDetails />
        <CompanyDetails isTataCompany />
      </div>
    );
  }
}

export default App;
