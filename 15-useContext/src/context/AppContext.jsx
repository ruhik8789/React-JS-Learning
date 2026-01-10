import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "123-456-7890";
  const name = "Raghav";
  return (
    <>
      <AppContext.Provider value={{ phone, name }}>
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export default ContextProvider;
