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
import AddProduct from './modules/admin/pages/product/AddProduct';
import { OrderList } from './modules/admin/pages/product/OrderList';
import { AddCategory } from './modules/admin/pages/product/AddCategory';
import { AddCompany } from './modules/admin/pages/product/AddCompany';
import { ProductList } from './modules/admin/pages/product/ProductList';
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











function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />} >
          {/* <Route path="/" element={<MainHeader />} /> */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/source" element={<Source />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/diagnostic/productdetails" element={<ProductDetails />} />
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
          <Route path="/addcompany" element={<AddCompany />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/admin/distributor/add" element={<AddDistributor />} />
          <Route path="/admin/distributor/show" element={<ShowDistributor />} />
          <Route path="/admin/event/add" element={<AddEvent />} />
          <Route path="/admin/event/show" element={<ShowEvent />} />
          <Route path="/admin/news/add" element={<AddNews />} />
          <Route path="/admin/news/show" element={<ShowNews />} />
          <Route path="/errorpageprivate/:errors" element={<ErrorPagePrivate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
