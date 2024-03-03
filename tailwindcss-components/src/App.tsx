import './App.css'

import SlideOver from './components/Ecommerce/ShoppingCarts/SlideOver'
import StoreNavigation from './components/Ecommerce/StoreNavigation'
import Footer from './components/Footer/Footer'
import ProductList from './components/Ecommerce/ProductList'
import ProducOverviews from './components/Ecommerce/ProductOverviews'
import PromoSection from './components/Ecommerce/PromoSection'
import Search from './components/Utils/Search/Search'






function App() {
  // return (
  //   ProductList()
  // )
  return (
    <>
      {/* usa cartOpen, setCartOpen */}
      <StoreNavigation />
      {/* usa cartOpen, setCartOpen */}
      <SlideOver />
      <PromoSection />
      <ProductList />
      <ProducOverviews />
      <Search isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.')
      } } />
      <Footer />
    </>
  )
}

export default App
