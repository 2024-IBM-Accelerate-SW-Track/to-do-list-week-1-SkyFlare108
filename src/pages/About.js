import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/profile.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
        <div className="centered">
        <img 
        className="profile_image"
        src={profile}
        alt="Profile Pic"
        ></img>
        </div>
        </div>
        <div className="split right">
        <div className="centered">
        <div className="name_title">Harisri Yerramsetti</div>
        <div className="brief_description">
        <p>Hi my name is Hari and I am a second year Computer Science major at Georgia Tech. I love to play musical instruments and enjoy watching movies with friends. </p>
        <div><br /><br /></div>
        <h2>Contact:</h2>
        <p>
        Email: yerramsettiharisri@gmail.com<br />
        Linkedin: https://www.linkedin.com/in/hariyerrams/
        </p>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}