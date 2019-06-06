import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import endpoint from "../../apis/endpoint";

const SendEmail = ({ setShowEmailForm, flashSuccess }) => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    const hostname = window.location.href;

    const textWithLink =
      text + `<br>Check out this graph: <a href="${hostname}">${hostname}</a>`;

    endpoint
      .post("/graphs/sendEmail", { email, text: textWithLink })
      .then(response => {
        setShowEmailForm(false);
        flashSuccess();
      })
      .catch(e => alert("Could not send the email. Try again later mate"));
  };

  const renderForm = () => {
    return (
      <div className="ui inverted email form error">
        <form onSubmit={onSubmit}>
          <div className="field">
            <label>Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea
              rows="2"
              value={text}
              onChange={e => setText(e.target.value)}
              type="text"
            />
          </div>
          <Button basic inverted color="green" type="submit">
            Send
          </Button>
          <Button
            basic
            inverted
            color="red"
            onClick={() => setShowEmailForm(false)}
          >
            Cancel
          </Button>
        </form>
      </div>
    );
  };

  return renderForm();
};

export default SendEmail;
