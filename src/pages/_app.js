import "styles/globals.scss";
import NProgress from "nprogress";
import Router from "next/router";
import { RecoilRoot } from "recoil";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { darkLogoState } from "atoms/states";
import { useSetRecoilState } from "recoil";

// Setting up NProgress : that really cool progress
// bar at the top of the page!
NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function DarkModeHandler() {
  const setDarkLogo = useSetRecoilState(darkLogoState);

  // when app loads, check if dark mode is in cookies
  useEffect(() => {
    const darkMode = Boolean(Cookies.get("darkMode"));

    if (
      (!darkMode &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      darkMode
    ) {
      document.documentElement.classList.add("dark");
      setDarkLogo(false);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkLogo(true);
    }
  }, []);

  return null;
}

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <DarkModeHandler />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
