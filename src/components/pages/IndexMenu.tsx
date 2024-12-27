import ButtonMenu from "../common/ButtonMenu";

const IndexMenu: React.FC = () => {
  // Definir las rutas asociadas a cada elemento del menú
  const menuRoutes = [
    { label: "Appetizers", route: "/appetizers" },
    { label: "Pasta", route: "/pasta" },
    { label: "Meats", route: "/meats" },
    { label: "Desserts", route: "/desserts" },
    { label: "Drinks", route: "/drinks" },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center mb-3">
      <div className="d-flex flex-column align-content-center text-center rounded-2 w-75">
        <h1 className="text-black text-uppercase display-4 mb-2">Index</h1>
        <ul className="list-unstyled m-0 p-0">
          {menuRoutes.map((item, index) => (
            <li
              key={index}
              className="menu-item-color text-uppercase rounded-4"
            >
              <ButtonMenu
                valueName={item.label}
                navegationOption={item.route}
              />
            </li>
          ))}
          
          <ButtonMenu valueName={"Go to init"} navegationOption={"/"} />
        </ul>
      </div>
    </div>
  );
};

export default IndexMenu;
