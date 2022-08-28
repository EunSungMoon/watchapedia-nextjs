import "../styles/globals.css";
import Divider from "@mui/material/Divider";
import Top from '../src/component/Top'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Top />
      <Divider />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;