import {useContext} from "react";
import {SignupContext} from "../context/SignupContext";
const Heading = () => {
  const SignUpContext = useContext(SignupContext);
  return <h1 className="font-bold text-center p-8">{SignUpContext.title}</h1>;
};

export default Heading;
