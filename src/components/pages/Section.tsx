import ButtonMenu from "../common/ButtonMenu";
import AddToCartButton from "../common/AddToCartButton";
import { Product } from "../common/AddToCartButton";
import { useCart } from "./context/CartContext";
import { Card, Row, Col } from "react-bootstrap";
import { getAllFoods } from "../../helpers/foods";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";
import CartEmpty from "./cart/CartEmpty";
import Spinner from "../common/Spinner";

interface Food {
  foodID: number;
  foodName: string;
  foodCategory: string;
  image: string;
  price: number;
  available: boolean;
  ingredients?: string[];
}

const Section: React.FC = () => {
  const [foods, setPastas] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { section } = useParams<{ section: string }>();
  const { addToCart } = useCart(); // Usamos el método de addToCart del contexto

  // Función para agregar al carrito
  const handleAddToCart = (product: Product) => {
    addToCart(product); // Usamos el método addToCart del contexto para agregar productos
  };

  const loadFoods = async () => {
    try {
      setLoading(true);

      const response = await getAllFoods();
      const filteredCategory = response.filter(
        (food: Food) => food.foodCategory.toLowerCase() === section
      );
      setPastas(filteredCategory);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getSubtitleCategory = (section: string | undefined): string => {
    switch (section) {
      case "appetizers":
        return "Start with something delicious.";
      case "pasta":
        return "Fresh pastas for every taste.";
      case "meats":
        return "Juicy and flavorful cuts of meat.";
      case "desserts":
        return "Desserts that will sweeten your day.";
      case "drinks":
        return "Refreshing drinks to accompany your meal.";
      default:
        return "Explore our delicious variety.";
    }
  };

  const subtitle = getSubtitleCategory(section);

  useEffect(() => {
    if (section) {
      loadFoods();
    }
  }, [section]);

  if (!section) {
    return <Error404 />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      {foods.length === 0 ? (
        <CartEmpty
          title={"Not Found"}
          message={`No items available for the section: ${section.toUpperCase()}`}
        />
      ) : (
        <>
          <div>
            <h1 className="text-dark text-uppercase display-1">{section}</h1>
            <h3>{subtitle}</h3>
          </div>

          {foods.map((food, index) => (
            <div key={index} className="mb-3">
              <Card className="" bg="transparent">
                <Card.Body className="p-0">
                  <Row>
                    <Col md={8}>
                      <Card.Img
                        src={food.image}
                        alt={food.foodName}
                        className="card-img-size"
                      />
                    </Col>

                    <Col
                      md={4}
                      className="text-center d-flex flex-column justify-content-center"
                    >
                      <div className="price-tag bg-warning text-dark p-2 w-100 mx-auto">
                        <h3 className="m-0 fs-1 fw-bold">${food.price}</h3>
                        <p className="m-0">Price in a single payment</p>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-3 text-center">
                    <Col>
                      <h4 className="fw-bold text-uppercase fs-3 text-dark">
                        {food.foodName}
                      </h4>
                      <ul className="list-unstyled item-text-color">
                        {food.ingredients?.map((ingredient, index) => (
                          <div key={index}>
                            <li>{ingredient}</li>
                          </div>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>

                <Card.Footer>
                  <AddToCartButton
                    product={{
                      id: food.foodID,
                      name: food.foodName,
                      price: food.price,
                      quantity: 1,
                      img: food.image,
                      available: food.available
                    }}
                    handleAddToCart={handleAddToCart} // Pasa la función al botón
                  />
                </Card.Footer>
              </Card>
            </div>
          ))}

          <ButtonMenu
            valueName={"Back to Menu"}
            navegationOption={"/indexmenu"}
          />
        </>
      )}
    </div>
  );
};

export default Section;
