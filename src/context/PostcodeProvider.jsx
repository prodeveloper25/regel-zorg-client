import { createContext, useState } from "react";

export const PostcodeContext = createContext(null);
const PostcodeProvider = ({ children }) => {
  const [locationPostcode, setLocationPostcode] = useState("");
  return (
    <PostcodeContext.Provider value={{ locationPostcode, setLocationPostcode }}>
      {children}
    </PostcodeContext.Provider>
  );
};

export default PostcodeProvider;
