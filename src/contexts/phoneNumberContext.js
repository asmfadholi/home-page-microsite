import React, { useContext, useState } from "react";

const PhoneNumberStateContext = React.createContext({
  phoneNumber: "02112345678",
});

const PhoneNumberActionContext = React.createContext({
  setPhoneNumber: () => {},
});

const PhoneNumberProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState("02112345678");

  return (
    <PhoneNumberStateContext.Provider value={{ phoneNumber }}>
      <PhoneNumberActionContext.Provider value={{ setPhoneNumber }}>
        {children}
      </PhoneNumberActionContext.Provider>
    </PhoneNumberStateContext.Provider>
  );
};

const usePhoneNumberStateContext = () => useContext(PhoneNumberStateContext);
const usePhoneNumberActionContext = () => useContext(PhoneNumberActionContext);

export {
  PhoneNumberProvider,
  usePhoneNumberStateContext,
  usePhoneNumberActionContext,
};
