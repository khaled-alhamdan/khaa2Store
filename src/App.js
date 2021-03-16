// Importing useState
import { useState } from "react";
// Importing Route and Switch
import { Route, Switch, Redirect } from "react-router";
// Importing Link
// import { Link } from "react-router-dom";
// Importing Global stayle for theme
import { GlobalStyle, ThemeButton, ThemeButtonDiv } from "./styles";
// Importing Themeprovide
import { ThemeProvider } from "styled-components";
// Importing Header Component
import HeaderNavbar from "./components/HeaderNavbar";
// Import Products page
import ProductsPage from "./components/ProductsPage";
// Import Home page
import HomePage from "./components/HomePage";
// Importing product detail component
import ProductDetail from "./components/ProductDetail";

// Theme
const theme = {
  lightTheme: {
    backgroundColor: "#a6a3a1", // main background color
    moreInfoText: "white",
    moreInfoBorder: "white",
    deleteButton: "#c92f1e",
    boxColor: "black",
    headerBGC: "black",
    fontColor: "black",
    buttonTextColor: "white",
    buttonBGColor: "black",
  },
  darkTheme: {
    backgroundColor: "black", // main background color
    moreInfoText: "black",
    moreInfoBorder: "grey",
    deleteButton: "#c92f1e",
    boxColor: "white",
    headerBGC: "black",
    fontColor: "white",
    buttonTextColor: "black",
    buttonBGColor: "white",
  },
};

// App
const App = () => {
  const [currentTheme, setCurrentTheme] = useState("lightTheme");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  // For product Detail
  const [product, setProduct] = useState(null);

  const setView = () => {
    if (product) {
      return <ProductDetail product={product} />;
    } else {
      return <ProductsPage setProduct={setProduct} />;
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <HeaderNavbar />
        <GlobalStyle />
        <Switch>
          <Route path="/products" exact>
            {setView()}
          </Route>
          {/* <Route path="/products/:productId" exact>
            <ProductDetail product={product} />
          </Route>
          <Route path="/products" exact>
            <ProductsPage setProduct={setProduct} />
          </Route> */}
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/Home" exact>
            <Redirect to="/" />
          </Route>
          <Route path="/About" exact>
            <Redirect to="/" />
          </Route>
        </Switch>
        {/* <ProductsPage setProduct={setProduct} />
        <ProductDetail product={product} /> */}
        <ThemeButtonDiv>
          <ThemeButton onClick={toggleTheme}>
            {currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </ThemeButtonDiv>
      </ThemeProvider>
    </div>
  );
};

export default App;
