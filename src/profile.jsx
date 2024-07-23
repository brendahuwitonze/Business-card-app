import React from "react";
import image from "../public/assets/Rectangle.svg";
import emailIcons from "../public/assets/Icon.svg"
import linkedIn from "../public/assets/linkedin.svg"

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
