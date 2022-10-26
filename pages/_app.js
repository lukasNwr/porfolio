import "@fontsource/alice";
import "@fontsource/inter";
import "../styles/globals.css";
import ScrollOberver from "../utils/scroll-observer";

function MyApp({ Component, pageProps }) {
  return (
    <ScrollOberver>
      <Component {...pageProps} />
    </ScrollOberver>
  );
}

export default MyApp;
