import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

// Define the product type
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
  available: boolean;
}

// Props that the component will receive
interface AddToCartButtonProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  handleAddToCart,
}) => {
  const handleClick = () => {
    handleAddToCart(product); // Ensure this line executes
    Swal.fire({
      title: "Product Added!",
      text: `${product.name} has been added to the cart.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <Button
      className={`text-white w-100 border-0 ${
        product.available ? "btn-color" : "btn-primary"
      }`}
      onClick={handleClick}
      disabled={!product.available}
    >
      {product.available ? "Add to Cart" : "Unavailable"}
    </Button>
  );
};

export default AddToCartButton;
