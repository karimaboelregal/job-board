import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.js";
import Details from "./Details.js";
import { useState } from 'react';
import { ThemeContext } from './theme.js';

function App() {

  const [theme, setTheme] = useState("lightTheme");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
