import ButtonMenu from "../common/ButtonMenu";

import separatorLine from "../../assets/separatorLine.png";
import logoEljamuni from "../../assets/eljamuniLogo.png";
import burgerIcon from "../../assets/burgerIcon.png";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
}

export const LogoImage: React.FC<ImageProps> = ({ src, alt, width }) => (
  <img src={src} alt={alt} width={width} className="img-fluid pb-3" />
);

function PresentationPage() {
  return (
    <section className="d-flex justify-content-center align-items-center presentation w-100">
      <div className="d-flex flex-column align-items-center text-center h-100">
        <LogoImage src={logoEljamuni} alt="LogoImage Eljamuni" width={150} />

        <div className="text-center mb-1">
          <div className="display-1 mb-1">
            <LogoImage src={burgerIcon} alt="Burger Icon" width={50} />
          </div>

          <h1 className="mb-1">
            Red
            <p className="m-0">Tablecloth</p>
            Restaurant
          </h1>
        </div>

        <LogoImage src={separatorLine} alt="Separator" width={250} />

        <ButtonMenu valueName={"Promotions"} navegationOption={"/promotions"} />
        <ButtonMenu valueName={"Menu"} navegationOption={"/indexmenu"} />

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

export default PresentationPage;
