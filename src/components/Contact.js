import React from "react";
import "./Contact.css";

export default function Contact() {
  const submit = () => {
    alert("Information submitted successfully");
  };
  return (
    <>
      <div className="contact-container">
        <h1 className="topic">Connect with Me</h1>
        <div className="line"></div>
        <form className="contact-form">
          <label for="name"> Name</label>
          <br />
          <input type="text" placeholder="Your Name" name="name" />
          <br />
          <label for="name">Address</label>
          <br />
          <input type="text" placeholder="Your Address" name="address" />
          <br />
          <label for="number">Contact No.</label>
          <br />
          <input type="number" name="number" placeholder="Your contact no." />
          <br />
          <label for="email">Email</label>
          <br />
          <input type="email" name="email" placeholder="Your email" />
          <br />
          <label for="message">Message</label>
          <br />
          <textarea placeholder="Drop your feedback or enquiry"></textarea>
          <br />
          <button onClick={submit} type="submit">
            Submit
          </button>{" "}
        </form>
      </div>
    </>
  );
}
