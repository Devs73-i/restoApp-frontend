import { Carousel, Button } from "react-bootstrap";
import ButtonMenu from "../common/ButtonMenu";

function PromotionSection() {
  const promotionItems = [
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      altFood: "Salad Food",
      typeDiscount: "20% OFF",
      descriptionFood: "On All Products",
    },
    {
      image:
        "https://images.pexels.com/photos/7594969/pexels-photo-7594969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      altFood: "Meat with Fries",
      typeDiscount: "30% OFF",
      descriptionFood: "On All Products",
    },
    {
      image:
        "https://images.pexels.com/photos/116738/pexels-photo-116738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      altFood: "Pasta",
      typeDiscount: "15% OFF",
      descriptionFood: "On All Products",
    },
  ];
  return (
    <section className="d-flex justify-content-center align-items-center presentation w-100">
      <div className="align-items-center text-center h-100">
        <div className="text-center">
          <h1 className="fs-1 fw-bold">Promotions and Payment Methods</h1>
        </div>

        <div className="my-5">
          <Carousel indicators={false} slide={false}>
            <Carousel.Item>
              <Button variant="warning" className="fw-bold w-50">
                20% Off
              </Button>
            </Carousel.Item>
          </Carousel>

          <p className="pt-2 cashSize">Cash or bank transfer</p>
        </div>

        <hr className="w-50 centered-hr my-2" />

        <div className="food-carousel-container">
          <Carousel interval={3000} indicators={false}>
            {promotionItems.map((promotion, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-caption-line"></div>
                <div className="carousel-image-overlay">
                  <img
                    className="d-block w-100"
                    src={promotion.image}
                    alt={promotion.altFood}
                  />
                </div>
                <Carousel.Caption>
                  <h3 className="display-1 text-danger">{promotion.typeDiscount}</h3>
                  <p className="fs-3 text-uppercase">{promotion.descriptionFood}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <hr className="w-50 centered-hr mt-2" />

        <div className="my-2">
          <p className="small-text">*Promotions subject to availability</p>
        </div>

        <div className="mt-5">
          <ButtonMenu
            valueName={"Go to Menu"}
            navegationOption={"/indexmenu"}
          />
        </div>
      </div>
    </section>
  );
}

export default PromotionSection;
