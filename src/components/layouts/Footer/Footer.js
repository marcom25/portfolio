import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_37u2gnx",
        "contact_me_form",
        form.current,
        "76E8G2O-oc5Z35pr7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>

      <h1 >Footer</h1>
    
      {/* <div id="contactMe" className="footer">
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="title">Send me a Message! 👌</h1>
          <div class="question">
            <input className="form-input" type="text" name="user_name" required />
            <label className="form-label">Name</label>
          </div>
          <div class="question">
            <input className="form-input" type="text" name="user_email" required />
            <label className="form-label">Email</label>
          </div>
          <div class="question">
            <textarea className="form-input" type="text" required />
            <label className="form-label">Email Confirm</label>
          </div>
          <input className="form-button" type="submit" value="Send" />
          
        </form>
      </div> */}
    </>
  );
};

export default Footer;

// <form ref={form} onSubmit={sendEmail}>
//   <h1>Fancy Text Inputs</h1>
//   <div class="question">
//     <input type="text" name="user_name" required/>
//     <label>Name</label>
//   </div>
//   <div class="question">
//     <input type="text" name="user_email" required/>
//     <label>Email</label>
//   </div>
//   <div class="question">
//     <textarea type="text" required/>
//     <label>Email Confirm</label>
//   </div>
//   <Button>Send
//     <input hidden type="submit" value="Send" />
//
//    </Button>
// </form>
//
