import React from "react";
import "../styles/_about.scss";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About Wander Plan</h1>
        <p>
          Welcome to <strong>Wander Plan</strong>! My name is{" "}
          <strong>Khayala</strong>, and I am the creator of this travel
          itinerary planner. With a passion for travel, exploration, and
          technology, I built Wander Plan to simplify the process of organizing
          trips for people who love exploring new destinations as much as I do.
        </p>
        <p>
          I started my career as an English teacher and later transitioned into
          software development. This platform is a culmination of my skills and
          interests, combining functionality with user-friendly design. Wander
          Plan is designed to help travelers plan their trips with ease,
          ensuring they can focus on creating memories while I handle the
          details.
        </p>
        <p>
          Whether you're planning a weekend getaway or a multi-country
          adventure, Wander Plan is here to make your journey seamless and
          enjoyable. Thank you for being part of this journey, and I hope Wander
          Plan inspires your next adventure!
        </p>
        <p>
          <strong>Let the adventures begin!</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
