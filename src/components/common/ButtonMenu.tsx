import { Link, useLocation } from "react-router-dom";

interface ButtonMenuProps {
  valueName: string;
  navegationOption: string;
}

function ButtonMenu({ valueName, navegationOption }: ButtonMenuProps) {
  const location = useLocation();

  const getColorForPath = (path: string): string => {
    switch (path) {
      case "/indexmenu":
        return "btn-index-color";
      default:
        return "btn-color";
    }
  };

  const colorClass = getColorForPath(location.pathname);
  return (
    <div className="w-100 mb-3">
      <Link
        to={navegationOption}
        className={`btn text-white w-100 border-0 fs-1 mt-1 ${colorClass}`}
      >
        {valueName}
      </Link>
    </div>
  );
}

export default ButtonMenu;
