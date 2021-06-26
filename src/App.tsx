import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { GlobalsProvider } from './providers/GlobalsProvider';
import { Routes } from './Routes';
import GlobalStyle from './styles/Globals';
function App() {

  const [isScroll, setIsScroll] = useState(false)
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, [])


  return (
    <GlobalsProvider>
      <BrowserRouter >
        <GlobalStyle />
        <Header isScrolled={isScroll} />
        <Routes />
      </BrowserRouter>
    </GlobalsProvider>
  );
}

export default App;
