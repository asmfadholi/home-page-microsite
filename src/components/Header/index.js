import { Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>Website test</header>
      <br />
      <Outlet />
    </div>
  );
}

export default Header;
