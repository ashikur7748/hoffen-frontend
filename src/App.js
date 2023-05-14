import { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Distributor from './modules/frontend/pages/Distributor';
import Support from './modules/frontend/pages/Support';
import Contact from './modules/frontend/pages/Contact';
import MainHeader from './modules/frontend/Layout/MainHeader';
import Home from './modules/frontend/pages/Home';
import About from './modules/frontend/pages/About';
import Source from './modules/frontend/pages/Source';
import Diagnostic from './modules/frontend/pages/Diagnostic';
import Surgical from './modules/frontend/pages/Surgical';
import Others from './modules/frontend/pages/Others';
import News from './modules/frontend/pages/News';
import Event from './modules/frontend/pages/Event';
import { ProductDetails } from './modules/frontend/pages/ProductDetails';
import { ErrorPage } from './modules/frontend/pages/ErrorPage';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Dashboard from './modules/admin/pages/Dashboard';
import Login from './modules/admin/pages/login/Login';
import Register from './modules/admin/pages/register/Register';
import { OrderList } from './modules/admin/pages/product/OrderList';
import ProductBuy from './modules/frontend/pages/ProductBuy';
import { ErrorShow } from './modules/frontend/pages/ErrorShow';
import { ErrorPagePrivate } from './modules/admin/pages/ErrorPagePrivate';
import { AddDistributor } from './modules/admin/pages/distributor/AddDistributor';
import { ShowDistributor } from './modules/admin/pages/distributor/ShowDistributor';
import { AddEvent } from './modules/admin/pages/event/AddEvent';
import { ShowEvent } from './modules/admin/pages/event/ShowEvent';
import { AddNews } from './modules/admin/pages/news/AddNews';
import { ShowNews } from './modules/admin/pages/news/ShowNews';
import { NewsDetails } from './modules/frontend/pages/NewsDetails';
import { EventDetails } from './modules/frontend/pages/EventDetails';
import { EditDistributor } from './modules/admin/pages/distributor/EditDistributor';
import { ShowContactInfo } from './modules/admin/pages/contact/ShowContactInfo';
import { EditEvent } from './modules/admin/pages/event/EditEvent';
import { EditNews } from './modules/admin/pages/news/EditNews';
import { AddCategory } from './modules/admin/pages/category/AddCategory';
import { ShowCategory } from './modules/admin/pages/category/ShowCategory';
import { EditCategory } from './modules/admin/pages/category/EditCategory';
import { AddSubCategory } from './modules/admin/pages/category/AddSubCategory';
import { ShowSubCategory } from './modules/admin/pages/category/ShowSubCategory';
import { EditSubCategory } from './modules/admin/pages/category/EditSubCategory';
import { ShowProduct } from './modules/admin/pages/product/ShowProduct';
import AddProduct from './modules/admin/pages/product/AddProduct';
import { EditProduct } from './modules/admin/pages/product/EditProduct';
import { Products } from './modules/frontend/pages/Products';
import { ProductVideo } from './modules/frontend/pages/ProductVideo';
import { ProductCategoryWiseView } from './modules/frontend/pages/ProductCategoryWiseView';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />} >
          {/* <Route path="/" element={<MainHeader />} /> */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/source" element={<Source />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/cat_id/:id" element={<ProductCategoryWiseView />} />


          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/products/productdetails" element={<ProductDetails />} />
          <Route path="/products/productdetails/videoview" element={<ProductVideo />} />

          <Route path="/surgical" element={<Surgical />} />
          <Route path="/others" element={<Others />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/details" element={<NewsDetails />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/details" element={<EventDetails />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/productbuy" element={<ProductBuy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/errors/:errors" element={<ErrorShow />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/admin/distributor/add" element={<AddDistributor />} />
          <Route path="/admin/distributor/show" element={<ShowDistributor />} />
          <Route path="/admin/distributor/edit" element={<EditDistributor />} />

          <Route path="/admin/event/add" element={<AddEvent />} />
          <Route path="/admin/event/show" element={<ShowEvent />} />
          <Route path="/admin/event/edit" element={<EditEvent />} />

          <Route path="/admin/news/add" element={<AddNews />} />
          <Route path="/admin/news/show" element={<ShowNews />} />
          <Route path="/admin/news/edit" element={<EditNews />} />

          <Route path="/admin/category/add" element={<AddCategory />} />
          <Route path="/admin/category/show" element={<ShowCategory />} />
          <Route path="/admin/category/edit" element={<EditCategory />} />

          <Route path="/admin/subcategory/add" element={<AddSubCategory />} />
          <Route path="/admin/subcategory/show" element={<ShowSubCategory />} />
          <Route path="/admin/subcategory/edit" element={<EditSubCategory />} />

          <Route path="/admin/product/add" element={<AddProduct />} />
          <Route path="/admin/product/show" element={<ShowProduct />} />
          <Route path="/admin/product/edit" element={<EditProduct />} />

          <Route path="/orderlist" element={<OrderList />} />

          <Route path="admin/contactinfo/show" element={<ShowContactInfo />} />
          <Route path="/errorpageprivate/:errors" element={<ErrorPagePrivate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
