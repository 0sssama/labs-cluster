import { AiOutlineArrowUp } from "react-icons/ai";
import { searchState } from "atoms/states";
import { useRecoilValue } from "recoil";

function Post({ x, y, vOffset, hOffset, host, user }) {
  // default styles
  const styles = {
    gridArea: `${y} / ${x}`,
    marginTop: `${vOffset}px`,
    marginLeft: `${hOffset}px`,
  };

  // entrance stlyes
  const entranceStyles = {
    ...styles,
    gridColumn: `${x - 1} / span 3`,
    gridRow: `${y} / span 2`,
  };

  // search state
  const search = useRecoilValue(searchState);

  // query regex
  const regex = new RegExp(search, "i");

  return (
    <div
      className={`poste group relative flex items-center justify-center ${
        host === "ENTRANCE"
          ? "entrance bg-sky-500 !border-transparent text-white shadow-sky-200	shadow-xl cursor-pointer hover:bg-sky-400"
          : user
          ? "taken"
          : ""
      }
      ${
        search.length > 0
          ? regex.test(host) ||
            regex.test(user?.displayname) ||
            regex.test(user?.login)
            ? "valid"
            : "opacity-30"
          : ""
      }
      `}
      style={host === "ENTRANCE" ? entranceStyles : styles}
      onClick={() => {
        console.log(host);
        if (user) {
          window.open(`https://profile.intra.42.fr/users/${user.login}`);
        }
      }}
    >
      {host !== "ENTRANCE" && (
        <p className="absolute bottom-[105%] origin-bottom-left left-0 text-xs z-[1337] scale-0 opacity-0 rounded-md group-hover:scale-100 group-hover:opacity-100 bg-sky-500 p-2 text-white">
          {user && (
            <span className="whitespace-nowrap font-bold">
              {user.displayname}
            </span>
          )}
          {user && <br />}
          <span className="whitespace-nowrap">
            {host === "X" ? "Post not working" : host}
          </span>
        </p>
      )}
      {host === "ENTRANCE" ? (
        <h1 className="font-bold flex flex-col items-center gap-y-2 top-gap-snagat">
          <AiOutlineArrowUp />
          الباب
        </h1>
      ) : host === "X" ? (
        <h1 className="font-bold">X</h1>
      ) : user ? (
        <img src={`https://cdn.intra.42.fr/users/small_${user.login}.jpg`} alt={user.login} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Post;
