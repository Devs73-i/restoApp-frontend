import ButtonMenu from "../common/ButtonMenu";
import { LogoImage } from "./PresentationPage";

import logoEljamuni from "../../assets/eljamuniLogo.png";

function Error404() {
  return (
    <section className="d-flex justify-content-center align-items-center presentation w-100">
      <div className="d-flex flex-column align-items-center text-center h-100 d-grid">
        <LogoImage src={logoEljamuni} alt="LogoImage Eljamuni" width={150} />

        <div className="text-center mb-1">
          <h1 className="display-1 fw-bold sizeError txtErrorColor">404</h1>
          <p className="display-3 txtErrorColor">Page Not Found</p>
        </div>

        <ButtonMenu navegationOption="/indexmenu" valueName="Back" />

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

export default Error404;
