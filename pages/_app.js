import { ThemeProvider } from "styled-components";
import { theme } from "../shared/utils/constants";
import "../styles/index.scss";
import Script from "next/dist/client/script";
import "../helpers/onKeyBoardOnOff";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.11.0.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"
      ></Script>
    </>
  );
}

export default MyApp;
