// styles
import { useState } from "react";
import styles from "./index.module.css";

function TelephoneForm() {
  const [phone, setPhone] = useState("");

  const handleChangePhoneNumber = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const getValue = e.target.value || "";
    setPhone(getValue);
  };

  const handleClickGo = () => {
    setPhone("");
  };

  return (
    <div className={styles.styContainerPhone}>
      <h3>No Telp</h3>
      <input
        type="number"
        placeholder="ex: 098877126"
        onChange={handleChangePhoneNumber}
        value={phone}
      />
      <br />
      <br />
      <button onClick={handleClickGo}>Go</button>
    </div>
  );
}

export default TelephoneForm;
