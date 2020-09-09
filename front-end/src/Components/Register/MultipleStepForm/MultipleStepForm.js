import React, { useState } from "react";
import { StateMachineProvider, createStore } from "little-state-machine";

import Names from "./Names";
import Password from "./Password";
import ProfilePhoto from "./ProfilePhoto";
import UserDescription from "./UserDescription";

const steps = [
  { id: "names" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];

createStore({
  data: {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "2017-05-24",
    password: "",
    description: "this is a description",
    state: "CA",
    zip: "90505",
    email: "email@domain.com",
    phone: "+61 4252 454 332",
    image: {},
  },
});

const MultipleStepForm = () => {
  const [step, setStep] = useState("Name");
  console.log(step);

  return (
    <StateMachineProvider>
      {step === "Name" && <Names setStep={setStep} />}
      {step === "Password" && <Password setStep={setStep} />}
      {step === "ProfilePhoto" && <ProfilePhoto setStep={setStep} />}
      {step === "UserDescription" && <UserDescription setStep={setStep} />}
    </StateMachineProvider>
  );
};

export default MultipleStepForm;
