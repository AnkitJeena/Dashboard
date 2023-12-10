import React from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../Navbar";
import photo from "../images/profile.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 6 }}>
          <div className="container stu-profile">
            <form method="">
              <div className="row">
                <div className="col-md-4">
                  <img src={photo} alt="photo" />
                </div>
                <div className="col-md-6">
                  <div className="profile-head">
                    <h3>Hero Ayush </h3>
                    <h6>Full Stack Developer</h6>
                    <p>Fresher</p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" id="education-tab" data-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="false">Education</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <input type="submit" className="profile-edit-btn" value="Edit Profile" name="btnAddMore"/>
                  <input type="submit" className="profile-save-btn" value="Save" name="btnAddMore"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-work">
                    <p>Social Media</p>
                    <a href="instagram" target="thapa">linkedIn link</a>
                    <br />
                    <a href="instagram" target="thapa">github link</a>
                    <br />
                  </div>
                </div>
                <div className="col-md-8 pl-5 about-info">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Objective</label>
                        </div>
                        <div className="col-md-6">
                          <p>Kisi bhi environment me krwa lo kisi bhi field me krwa lo kaam ek number milega</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>Hero Ayush</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>heroayush@gmail.com</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p>VIP hai</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>profession</label>
                        </div>
                        <div className="col-md-6">
                          <p>Full stack developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="row">
                        <div className="col-md-6">
                          <label>Graduation</label>
                        </div>
                        <div className="col-md-6">
                          <p>Dronacharya group of Instituions</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Graduation percentage</label>
                        </div>
                        <div className="col-md-6">
                          <p>100%</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>12th</label>
                        </div>
                        <div className="col-md-6">
                          <p>Hero se Pucho</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>12th Percentage</label>
                        </div>
                        <div className="col-md-6">
                          <p>100%</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>10th</label>
                        </div>
                        <div className="col-md-6">
                          <p>Hero se pucho</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>10th Percentage</label>
                        </div>
                        <div className="col-md-6">
                          <p>100%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Profile;