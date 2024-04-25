import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/Animation - 1714056844773.json";
import emailAnimation from "../../../src/animation/contact.json";

function Contact() {
  const [state, handleSubmit] = useForm("xyyrlawl");

  return (
    <section className="contact-us">
      <h1 id="contact" className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="subtitle">
        Contact Us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{justifyContent:"space-between"}} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting...." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                style={{ height: 35 }}
                loop={false}
                animationData={doneAnimation}
              />
              Your Message has been sent successfully.
            </p>
          )}
        </form>

        <div className="animation">
        <Lottie className="contact-animation"
                style={{ height: 355 }}
               animationData={emailAnimation}
              />
        </div>
      </div>
    </section>
  );
}

export default Contact;
