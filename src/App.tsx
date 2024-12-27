import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import { CartContextProvider } from "./components/pages/context/CartContext";
import { CartContainer } from "./components/pages/cart/CartPage";
import { Checkout } from "./components/pages/cart/Checkout";

import PromotionSection from "./components/pages/PromotionSection";
import PresentationPage from "./components/pages/PresentationPage";
import IndexMenu from "./components/pages/IndexMenu";
import Error404 from "./components/pages/Error404";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SectionFood from "./components/pages/Section";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div id="mainRoot">
          <Header />
          <main className="mainPage">
            <Container>
              <Routes>
                <Route path="/" element={<PresentationPage />} />
                <Route path="/promotions" element={<PromotionSection />} />
                <Route path="/indexmenu" element={<IndexMenu />} />
                <Route path="/cartpage" element={<CartContainer />} />
                <Route path="/:section" element={<SectionFood />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
