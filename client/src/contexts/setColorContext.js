import { createContext, useState } from "react";

const SetColorContext = createContext("#fff");

export const SetColorProvider = ({ children }) => {
  const [color, setColor] = useState("#fff");

  const values = {
    color,
    setColor,
  };
  return (
    <SetColorContext.Provider value={values}>{children}</SetColorContext.Provider>
  );
};

export default SetColorContext;