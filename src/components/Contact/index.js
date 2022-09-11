import { usePhoneNumberStateContext } from "../../contexts/phoneNumberContext";

function Contact() {
  const { phoneNumber } = usePhoneNumberStateContext();
  return (
    <div>
      <h3>PT. ABC</h3>
      <p>Jl. Setiabudi No.33</p>
      <p>{phoneNumber}</p>
    </div>
  );
}

export default Contact;
