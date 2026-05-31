import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/media/images/surajmern..jpeg"
            alt="Team member"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">SURAJ KUMAR</h4>
          <h6>Full Stack Developer</h6>
          <h6>Open Source Contributor</h6>

        </div>
        <div className="col-6 p-3">
          <p>
            I'm Second year Computer Science student at Indian Institute of Technology, Patna. I have a strong passion for technology and software development, and I am always eager to learn and grow in this field.
          </p>
          <p>
            I'm a full stack developer with a passion for building scalable and efficient web applications with expertise in React,Node.js, and MongoDB. I have a strong background in software development and a proven track record of delivering high-quality projects on time. I am a quick learner and always eager to take on new challenges.
          </p>
          <p>Playing cricket brings me peace and fulfillment.</p>
          <p>
            Connect on <a href="">Homepage</a> _/ <a href="">TradingQnA</a> /{" "}
            <a href="https://www.instagram.com/_im__suraj1" target="_blank" rel="noreferrer">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;