import "styles/globals.scss";
import NProgress from "nprogress";
import Router from "next/router";
import { RecoilRoot } from "recoil";

// Setting up NProgress : that really cool progress
// bar at the top of the page!
NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
