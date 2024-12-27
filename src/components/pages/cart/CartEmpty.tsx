import { LogoImage } from "../PresentationPage";
import ButtonMenu from "../../common/ButtonMenu";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import logoEljamuni from "../../../assets/eljamuniLogo.png";
import burgerIcon from "../../../assets/burgerIcon.png";
import { useLocation } from "react-router-dom";

interface CartEmptyProps {
  title: string;
  message: string;
}

function CartEmpty({ title, message }: CartEmptyProps) {
  const location = useLocation();

  const getCartForPath = (path: string): JSX.Element | string => {
    switch (path) {
      case "/cartpage":
        return <ShoppingCartIcon fontSize="large" />;
      case "/checkout":
        return <RemoveShoppingCartIcon fontSize="large" />;
      default:
        return <LogoImage src={burgerIcon} alt="Burger Icon" width={50} />;
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center presentation w-100">
      <div className="d-flex flex-column align-items-center text-center">
        <LogoImage src={logoEljamuni} alt="LogoImage Eljamuni" width={150} />

        <div className="text-center mb-1">
          <div className="display-1 mb-1">
            {getCartForPath(location.pathname)}
          </div>

          <div className="fs-3">
            <p className="display-2 txtErrorColor text-uppercase m-0">{title}</p>
            <p>{message}</p>
          </div>
        </div>

        <ButtonMenu
          valueName={"Back to Index Menu"}
          navegationOption={"/indexmenu"}
        />

        <div>
          <p>
            <a
              href="http://www.eljamunisubcriptionwebide.com.ar"
              className="text-black text-decoration-none"
            >
              www.eljamunisubcriptionwebide.com.ar
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CartEmpty;
