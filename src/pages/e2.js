import { Wrapper, Navigation, Post } from "components";
import posts from "data/e2.json";
import Head from "next/head";
import { getHost } from "utils/getHost"

function EtageDeux({ activePosts }) {
  return (
    <Wrapper>
      <Head>
        <title>Labs E2 - Map of 1337 Labs Clusters</title>
      </Head>
      <Navigation />
      <h1 className="title text-sky-500">E2 - Labs</h1>
      <div className="cluster e2">
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

export async function getServerSideProps(context) {
  // get all active posts
  const postsRequest = await fetch(getHost(context.req) + "/api/e2");

  const activePosts = await postsRequest.json();

  return {
    props: {
      activePosts,
    },
  };
}

export default EtageDeux;
