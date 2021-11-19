import React from "react";
import { GiScales } from "react-icons/gi";
import { BsFillChatDotsFill, BsPencilSquare } from "react-icons/bs";
import {
  MdVerified,
  MdMessage,
  MdLocationOn,
  MdOutlineSavedSearch,
  MdOutlineCall,
  MdTimer,
} from "react-icons/md";
import { AiFillPlusSquare } from "react-icons/ai";
import relianceImage from "../Assets/relience.png";
import tataImage from "../Assets/tata.png";
import "../Styles/App.css";

const companyDetails = (props) => {
  return (
    <div
      class="container floatLeft companyDetailsWidth"
      style={{ width: "72%", marginBottom: "0px" }}
    >
      <div class="row">
        <div
          style={{
            margin: "20px",
            width: "100px",
            height: "100px",
            borderRadius: "150px",
            outline: "1px solid black",
            flexDirection: "row",
            display: "flex",
          }}
          class="companyBodyPartDetails col-3"
        >
          <img
            class="companyLogo"
            src={props.isTataCompany ? tataImage : relianceImage}
            alt="company"
          />
        </div>
        <div class="col-7" style={{ borderRight: "1px solid black" }}>
          <div class="row">
            <div class="col-11">
              <p style={{ margin: "0px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "20px",
                  }}
                >
                  <h6
                    style={{
                      color: "green",
                      marginRight: "5px",
                      marginTop: "3px",
                    }}
                  >
                    Ad
                  </h6>
                  <span>
                    {props.isTataCompany ? (
                      <b> Tata Consultant Service Ltd. </b>
                    ) : (
                      <b> Reliance Industries Ltd. </b>
                    )}
                  </span>
                  <span class="iconColor">
                    <MdVerified />
                  </span>
                </div>
              </p>
            </div>
            <div class="col">
              <div>
                <h4
                  class="marginTop10 iconColor"
                  style={{ textAlign: "center" }}
                >
                  <AiFillPlusSquare />
                </h4>
              </div>
            </div>
          </div>
          <div class="col" style={{ marginBottom: "10px" }}>
            <span>Digital Marketing Agency</span>
          </div>
          <div class="row">
            <div class="col-6">
              <ul>
                <li>Digital Marketing</li>
                <li>Gsuit Google Mail</li>
                <li>Mob Apps Developments</li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>Web & E - commerce</li>
                <li>Branding & Creative</li>
                <li>
                  Ipads Apps &nbsp;
                  <span style={{ color: "blue" }}>More ....</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <p>
              <span class="iconColor">
                <MdLocationOn />
              </span>
              <span>
                504, NBC Complex, Plot #43, Sector 11, Opp IDBI Bank, CBD
                Belapur, Navi Mumbai - 400614
              </span>
            </p>
          </div>
          <div class="row" style={{ fontSize: "14px", marginBottom: "10px" }}>
            <div class="col-4">
              <span style={{ marginRight: "4px" }} class="iconColor">
                <MdOutlineSavedSearch />
              </span>
              <span>Founding Year : 2017</span>
            </div>
            <div class="col-4">
              <span style={{ marginRight: "4px" }} class="iconColor">
                <MdOutlineCall />
              </span>
              <span>+91 9594 31 5559</span>
            </div>
            <div class="col-4">
              <span style={{ marginRight: "4px" }} class="iconColor">
                <MdTimer />
              </span>
              <span>Opens 8pm Close 8pm</span>
            </div>
          </div>
        </div>
        <div class="col-2" style={{ margin: "auto" }}>
          <div
            class="fontSize25 marginTop10"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <div
            class="marginTop10"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span>97592 Reviews</span>
          </div>
          <div
            class="marginTop10"
            style={{
              border: "1px solid black",
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            <span
              style={{
                marginRight: "10px",
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              <BsPencilSquare />
            </span>
            <span>Write Reviews</span>
          </div>
          <div class="marginTop10">
            <div class="row">
              <div class="col-9" style={{ margin: "auto" }}>
                <span
                  class="iconColor fontSize25"
                  style={{ marginLeft: "20px" }}
                >
                  <BsFillChatDotsFill />
                </span>
              </div>
              <div class="col-2">
                <span class="enquiryIconColor fontSize25">
                  <MdMessage />
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-9">
                <span>Chat Now</span>
              </div>
              <div class="col-2">
                <span> Enquire</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid black" }}>
          <div class="row" style={{ fontSize: "14px", marginBottom: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ marginRight: "10px" }}>
                <h9>
                  Min Order : <b> $1000 - 2200 </b>
                </h9>
              </div>
              <div style={{ marginRight: "10px" }}>
                <h9>
                  Team : <b> 1 - 1000</b>
                </h9>
              </div>
              <div style={{ marginRight: "10px" }}>
                <h9>
                  Response Rate : <b> 20% </b>
                </h9>
              </div>
              <div style={{ marginLeft: "216px" }}>
                <span style={{ marginRight: "5px" }} class="iconColor">
                  <GiScales />
                </span>
                <span>Compare</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default companyDetails;
