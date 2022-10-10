// import "../styles/globals.css";
import '../styles/global-styles'
import Divider from "@mui/material/Divider";
// import Top from '../src/component/Top'
import Top from '../component/Top'

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