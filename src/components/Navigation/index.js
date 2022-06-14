import { useRouter } from "next/router";
import { darkLogoState, searchState } from "atoms/states";
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";

function Navigation() {
  // next.js router
  const router = useRouter();

  // search state
  const [search, setSearch] = useRecoilState(searchState);

  // dark logo
  const [darkLogo, setDarkLogo] = useRecoilState(darkLogoState);

  return (
    <div className="Navigation w-full flex flex-col md:flex-row items-center md:justify-between gap-8 flex-wrap dark:text-sky-700">
      <div className="Navigation-left flex items-center justify-center gap-x-4 w-full md:w-auto dark:text-sky-700">
        <img
          src={darkLogo ? "/1337.svg" : "/1337_light.svg"}
          alt="logo"
          className="h-[36px] w-[120px]"
        />
        <div className="Navigation-wrapper">
          <div className="flex items-center border bg-sky-600 border-sky-600 border-solid rounded-md w-[200px] overflow-hidden dark:bg-sky-700 dark:text-gray-100">
            {["e1", "e2"].map((link, i) => (
              <div
                className={`Navigation-wrapper-item flex items-center justify-center h-[40px] w-[100px] cursor-pointer text-sm font-bold ${
                  router.pathname === `/${link}`
                    ? "bg-sky-500 text-white hover:bg-sky-700 dark:text-sky-100 dark:bg-sky-600 dark:hover:bg-sky-700"
                    : "bg-white dark:bg-gray-600 text-sky-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                key={i}
                onClick={() => router.push(`/${link}`)}
              >
                {link.toUpperCase()} - Labs
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Navigation-right w-full md:w-auto flex items-center gap-x-6">
        <label
          for="default-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="default-toggle"
            class="sr-only peer"
            checked={!darkLogo}
            onChange={() => {
              if (darkLogo) {
                Cookies.set("darkMode", "true");
              } else {
                Cookies.set("darkMode", "false");
              }
              document.querySelector("html").classList.toggle("dark");
              setDarkLogo(!darkLogo);
            }}
          />
          <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Dark Mode
          </span>
        </label>
        <input
          type="text"
          placeholder="Search for posts, users, logins..."
          className="w-full md:w-[300px] bg-gray-100 dark:bg-gray-800 appearance-none border-2 border-gray-200 dark:border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Navigation;
