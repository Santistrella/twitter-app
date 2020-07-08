import React from "react";
import Button from '@material-ui/core/Button';

const Review = ({ setForm, formData, setStep }) => {
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email
  } = setStep;
  const { go } = '';

  return (
    <div className="form">
      <h3>Review your data</h3>
      <h4>
        Name
        <Button onClick={() => go("names")}>Edit</Button>
      </h4>
      <div>
        {" "}
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`},
      </div>
      <div>Nick Name: {`${nickName}`}</div>
      <h4>
        Address
        <Button onClick={() => go("address")}>Edit</Button>
      </h4>
      <div>
        Address: {`${address}`},
        <br />
        City: {` ${city}`},
        <br />
        State: {`${state}`},
        <br />
        ZIP: {`${zip}`}
      </div>
      <h4>
        Contact
        <Button onClick={() => go("contact")}>Edit</Button>
      </h4>
      <div>
        Phone: {`${phone}`},
        <br />
        E-mail: {`${email}`}
      </div>
      <div>
        <Button onClick={() => go("submit")}>Submit</Button>
      </div>
    </div>
  );
};

export default Review;