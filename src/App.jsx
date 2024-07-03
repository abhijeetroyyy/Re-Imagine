import React from 'react';
import { Box, ChakraProvider, Container, Grid, VStack } from '@chakra-ui/react';
import Headr from './components/Headr';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
import CenteredButton from './components/CenteredButton';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './components/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecentlyViewed from './components/RecentlyViewed';
import Categories from './components/Categories';
import LocalMakers from './components/LocalMakers';
import SubscriptionBox from './components/SubscriptionBox';


const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <ProductProvider>
          <Router>
            <Headr />
            <Menu />
            <Categories/>
            <LocalMakers/>
            <RecentlyViewed/>
            <About/>
            <CenteredButton />
            <SubscriptionBox/>
            <Footer />
          </Router>
        </ProductProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
