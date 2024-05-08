import "./App.css";

import Footer from "./components/Footer/Footer";
import Search from "./components/Utils/Search/Search";

// Blog
import Blog from "./components/Blog/Blog";
import ThreeCoumn from "./components/Blog/ThreeColumn";
import ThreecolumnmBGImg from "./components/Blog/ThreecolumnmBGImg";
import SingleColmn from "./components/Blog/SingleColmn";
import SingleColumnImg from "./components/Blog/SingleColumnImg";
//Contact
import Contact from "./components/Contact/Contact";
import ContactCard from "./components/Contact/ContactCard";
// ecommerce
import ProductCard from "./components/Ecommerce/ProductCard";
import ProductList from "./components/Ecommerce/ProductList";
import ProducOverviews from "./components/Ecommerce/ProductOverviews";
import PromoSection from "./components/Ecommerce/PromoSection";
import SlideOver from "./components/Ecommerce/ShoppingCarts/SlideOver";
import StoreNavigation from "./components/Ecommerce/StoreNavigation";
//Product
import ZipTote from "./components/Product/ZipTote";
import Tabs from "./components/practicas/headlessui/Tabs";
import TabsMap from "./components/practicas/headlessui/TabsMap";
// Practica
import Radio from "./components/practicas/headlessui/Radio";

function App() {
  // return (
  //   ProductList()
  // )
  return (
    <>
      {/* usa cartOpen, setCartOpen */}
      {/* <StoreNavigation /> */}
      {/* usa cartOpen, setCartOpen */}
      {/*<SlideOver />
      <PromoSection />
      <ProductList />
      <ProducOverviews />
      <Search isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.')
      } } />
    <Footer />*/}
      {/* <Blog /> */}
      {/* <ThreeCoumn /> */}
      {/* <ThreecolumnmBGImg /> */}
      {/* <SingleColmn /> */}
      {/* <SingleColumnImg /> */}
      {/* <Contact /> */}
      {/* <ContactCard /> */}
      <ZipTote />
      {/* <Tabs /> */}
      {/* <TabsMap /> */}
      {/* <Radio /> */}
    </>
  );
}

export default App;
