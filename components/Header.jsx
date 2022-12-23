import Image from "next/image";
import logo from "../assets/images/27b9e386375ebde43a9b022ba6c9d727.png";

const Header = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image src={logo} alt="logo" width={120} />
      <p>My TODO list</p>
    </div>
  );
};

export default Header;
