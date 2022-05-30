import Products from "./pages/Products";
import { createGlobalStyle } from 'styled-components';
import { Provider } from "react-redux";
import { store } from "./redux/store";

const GlobalStyle = createGlobalStyle`
* {
font-family:'Montserrat';
}`;



export default function App() {
  return (
    <>
      <Provider store={store}>
          <GlobalStyle />
          <Products></Products>
      </Provider>

    </>

  );
}

