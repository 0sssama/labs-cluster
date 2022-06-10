import { useRouter } from "next/router";
import { searchState } from "atoms/states";
import { useRecoilState } from "recoil";

function Navigation() {
  // next.js router
  const router = useRouter();

  // search state
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <div className="Navigation w-full flex flex-col md:flex-row items-center md:justify-between gap-8 flex-wrap ">
      <div className="Navigation-left flex items-center justify-center gap-x-4 w-full md:w-auto">
        <img src="/1337.svg" alt="logo" className="h-[36px] w-[120px]" />
        <div className="Navigation-wrapper">
          <div className="flex items-center border bg-sky-600 border-sky-600 border-solid rounded-md w-[200px] overflow-hidden">
            {["e1", "e2"].map((link, i) => (
              <div
                className={`Navigation-wrapper-item flex items-center justify-center h-[40px] w-[100px] cursor-pointer text-sm font-bold ${
                  router.pathname === `/${link}`
                    ? "bg-sky-600 text-white hover:bg-sky-800"
                    : "bg-white text-sky-600 hover:bg-sky-200"
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
      <div className="Navigation-right w-full md:w-auto">
        <input
          type="text"
          placeholder="Search for posts, users, logins..."
          className="w-full md:w-[300px] bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Navigation;
