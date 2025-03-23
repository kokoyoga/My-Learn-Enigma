import react from "react";

export const SignupContext = react.createContext({
  title: "",
});

export const SignupContextProvider = SignupContext.Provider;
export const SignupContextConsumer = SignupContext.Consumer;
