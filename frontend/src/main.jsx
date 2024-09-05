import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createRoutesFromElements} from "react-router"
import { createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./redux/store.js"

//private toute
import PrivateRoutes from './components/PrivateRoutes.jsx'

//auth
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'

import Profile from './pages/User/Profile.jsx'
import AdminRoutes from './pages/Admin/AdminRoutes.jsx'
import Userlist from './pages/Admin/Userlist.jsx'
import CategoryList from './pages/Admin/CategoryList.jsx'
import ProductList from './pages/Admin/ProductList.jsx'
import ProductUpdate from './pages/Admin/ProductUpdate.jsx'
import AllProducts from './pages/Admin/AllProducts.jsx'
import Home from './pages/Home.jsx'
import Favorites from './pages/Products/Favourites.jsx'
import ProductDetails from './pages/Products/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import Shop from './pages/User/Shop.jsx'
import Shipping from './pages/Orders/Shipping.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/" index={true} element={<Home/>}/>
      <Route path="/favourites" index={true} element={<Favorites/>}/>
      <Route path="/product/:id" index={true} element={<ProductDetails/>}/>
      <Route path="/cart" index={true} element={<Cart/>}/>
      <Route path="/shop" index={true} element={<Shop/>}/>

      <Route path='' element={<PrivateRoutes/>}>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
      </Route>

      <Route path="/admin" element={<AdminRoutes/>}>
        <Route path="userlist" element={<Userlist/>}/>
        <Route path="categorylist" element={<CategoryList/>}/>
        <Route path="productlist" element={<ProductList/>}/>
        <Route path="allproductslist" element={<AllProducts/>}/>
        <Route path="product/update/:_id" element={<ProductUpdate/>}/>
      </Route>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
