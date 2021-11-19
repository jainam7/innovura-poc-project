import React from "react";
import {
  MdOutlineSearch,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdClose,
} from "react-icons/md";
import "../Styles/App.css";

const sideBar = () => {
  return (
    <div>
      <div class="container floatLeft" style={{ width: "20%", margin: "20px" }}>
        <div class="row">
          <div class="col-9 filterDetails">
            <span>Fiters</span>
          </div>
          <div class="col">
            <span style={{ textDecorationLine: "underline", color: "blue" }}>
              Clear
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-10 filterDetails">
            <span>Location</span>
          </div>
          <div class="col">
            <span>
              <MdOutlineKeyboardArrowUp />
            </span>
          </div>
        </div>

        <div class="dropdown" style={{ margin: "5px 0px" }}>
          <div style={{ border: "1px solid #DDD" }} class="filterDetails">
            <MdOutlineSearch /> &nbsp;
            <input
              style={{ border: "none" }}
              type="text"
              placeholder="Locations"
              aria-label="Locations"
            />
          </div>
          <ul class="dropdown-menu">
            <li>
              <a href="#">HTML</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
            <li>
              <a href="#">JavaScript</a>
            </li>
          </ul>
        </div>

        <div class="row">
          <div class="col-12">
            <p style={{ backgroundColor: "skyblue" }}>
              <span>Mumbai</span>
              <span style={{ float: "right", marginRight: "10px" }}>
                <MdClose />
              </span>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <p style={{ backgroundColor: "skyblue" }}>
              <span>Kolkata</span>
              <span style={{ float: "right", marginRight: "10px" }}>
                <MdClose />
              </span>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <p style={{ backgroundColor: "skyblue" }}>
              <span>Delhi</span>
              <span style={{ float: "right", marginRight: "10px" }}>
                <MdClose />
              </span>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-10 filterDetails">
            <span>Industry</span>
          </div>
          <div class="col filterDetails">
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-10 filterDetails">
            <span>Business Type</span>
          </div>
          <div class="col filterDetails">
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-10 filterDetails">
            <span>Company Type</span>
          </div>
          <div class="col filterDetails">
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-10 filterDetails">
            <span>Filter By High to Low</span>
          </div>
          <div class="col filterDetails">
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-10 filterDetails">
            <span>Sort By</span>
          </div>
          <div class="col filterDetails">
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-10 filterDetails">
            <span>Number Of Employee</span>
          </div>
          <div class="col filterDetails">
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
