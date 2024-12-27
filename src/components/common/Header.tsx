import headerPhoto from "../../assets/headerPhoto.png";
import CartWidget from "./CartWidget";

const Header = () => {
  return (
    <header>
      <img
        src={headerPhoto}
        alt="Eljamuni Header"
        className="img-fluid w-100"
      />

      <div className="mx-4 px-3 text-end mb-3">
        <CartWidget />
      </div>
    </header>
  );
};

export default Header;
