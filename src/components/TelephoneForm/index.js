import { useState } from "react";
import { usePhoneNumberActionContext } from "../../contexts/phoneNumberContext";

// styles
import styles from "./index.module.css";

function TelephoneForm() {
  const { setPhoneNumber } = usePhoneNumberActionContext();
  const [currentPhone, setCurrentPhone] = useState("");

  const handleChangePhoneNumber = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const getValue = e.target.value || "";
    setCurrentPhone(getValue);
  };

  const handleClickGo = () => {
    setPhoneNumber(currentPhone);
    setCurrentPhone("");
  };

  return (
    <div className={styles.styContainerPhone}>
      <h3>No Telp</h3>
      <input
        type="number"
        placeholder="ex: 098877126"
        onChange={handleChangePhoneNumber}
        value={currentPhone}
      />
      <br />
      <br />
      <button onClick={handleClickGo}>Go</button>
    </div>
  );
}

export default TelephoneForm;
