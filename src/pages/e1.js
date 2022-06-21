import { Navigation, Wrapper, Post } from "components";
import { FiRotateCw } from "react-icons/fi";
import posts from "data/e1.json";
import Head from "next/head";
import { useEffect, useState } from "react";

function EtageUn({ activePosts }) {
  const rot = ["rotate-0", "rotate-90", "rotate-180", "-rotate-90"];
  const [ind, setInd] = useState(0);
  useEffect(() => {}, [ind]);

  return (
    <Wrapper>
      <Head>
        <title>Labs E1 - Map of 1337 Labs Clusters</title>
      </Head>
      <Navigation />
      <h1 className="title text-sky-500 dark:text-sky-600">E1 - Labs</h1>
      <FiRotateCw
        onClick={() => {
          if (ind == 3) setInd(0);
          else setInd(ind + 1);
          console.log(ind);
        }}
        className="btn"
      ></FiRotateCw>
      <div className={`cluster e1 ${rot[ind]}`}>
        {posts.map((post, i) => (
          <Post
            key={i}
            x={post.x}
            y={post.y}
            vOffset={post.vOffset}
            hOffset={post.hOffset}
            host={post.host}
            user={activePosts[post.host]}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export async function getServerSideProps() {
  // get all active posts
  const postsRequest = await fetch(process.env.NEXT_PUBLIC_URL + "/api/e1");
  const activePosts = await postsRequest.json();

  return {
    props: {
      activePosts,
    },
  };
}

export default EtageUn;
