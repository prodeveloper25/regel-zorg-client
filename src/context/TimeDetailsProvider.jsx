import { createContext, useState } from "react";

export const TimeDetailsContext = createContext(null);
const TimeDetailsProvider = ({ children }) => {
  const [timeRefDates, setTimeRefDates] = useState("");

  return (
    <TimeDetailsContext.Provider value={{ timeRefDates, setTimeRefDates }}>
      {children}
    </TimeDetailsContext.Provider>
  );
};

export default TimeDetailsProvider;
