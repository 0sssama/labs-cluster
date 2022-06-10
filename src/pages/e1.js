import { Navigation, Wrapper, Post } from "components";
import posts from "data/e1.json";
import Head from "next/head";

function EtageUn({ activePosts }) {
  return (
    <Wrapper>
      <Head>
        <title>Labs E1 - Map of 1337 Labs Clusters</title>
      </Head>
      <Navigation />
      <h1 className="title text-sky-500">E1 - Labs</h1>
      <div className="cluster e1">
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
