import { e1Posts, e2Posts } from "utils/posts";
import { run, now } from "utils/run";

// predefine object to improve performance
global.ft_posts = {
  e1: {
  	last_fetch: 0,
  	posts : e1Posts,
  },
  e2: {
  	last_fetch: 0,
  	posts : e2Posts,
  },
}

function reset_posts(posts) {
	for (const key in posts)
	{
		posts[key] = null;
	}
	return posts;
}


async function getPosts(posts) {
  // get 42 access token
  const token = await run();

  if (!token) {
    throw new Error("Could not get 42 access token");
  }
  
  const locations = await fetch(
    "https://api.intra.42.fr/v2/locations?" +
      new URLSearchParams({
        campus_id: 16,
        "filter[host]": Object.keys(posts).join(","),
        "filter[active]": "true",
        "page[size]": 100,
        "page[number]": 1,
      }),
    {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  );
  if (locations.status !== 200) {
    throw new Error("Could not get 42 locations");
  }
  const _posts = await locations.json();
  return _posts;
}

async function getPostsFromCache(etage)
{
  const posts = global.ft_posts[etage];
  console.log(posts.last_fetch, now());
  if (posts.last_fetch + 60 < now())
  {
	console.log( "from api");
	posts.posts = reset_posts(posts.posts);
  	posts.posts = await getPosts(posts.posts);
  	posts.last_fetch = now();
  }
  else
	console.log("from cache");
  return posts.posts; 
}



export default async function handler(req, res) {

  const {etage} = req.query;
  let posts;

  if (etage == "e1")
	posts = e1Posts;
  else if (etage == "e2")
	posts = e2Posts;
  else
	return res.status(404).json({error: "Resource not found"})

  try{
    const payload = await getPostsFromCache(etage);
    payload.forEach(item => {
        posts[item.host] = {
          login: item.user.login,
          displayname: item.user.usual_full_name,
        }
    });
	return res.status(200).json(posts);
  }catch(error)
  {
	console.log(error);
  	return res.status(400).json({error: "Could not get 42 locations"});
  }
}
