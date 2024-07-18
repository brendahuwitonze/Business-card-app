import React from "react";
import image from "../src/assets/Rectangle.svg";
import emailIcons from "../src/assets/Icon.svg"
import linkedIn from "../src/assets/linkedin.svg"

export default function Profile() {
  return (
    <>
    <div className="profile">
      <img className= "imgePerson"src={image} alt="" srcset="" />
      <h1>Laura Smith</h1>
       <p className="ocuupation">Frontend Developer</p>
       <p className="webs">laurasmith.website</p>
       <div>
        <button className="email"><img src={emailIcons} alt="" /> Email</button>
        <button className="linkedIn"><img src ={linkedIn} alt="" /> LinkedIn</button>
       </div>
       </div>
    </>
  );
}
