import { e1Posts, e2Posts } from "utils/posts";
import run from "utils/run";

export default async function handler(req, res) {
  // get 42 access token
  const token = await run();
  const {etage} = req.query;
  let posts;

  if (etage == "e1")
	posts = e1Posts;
  else if (etage == "e2")
	posts = e2Posts;
  else
	return res.status(404).json({error: "Resource not found"})

  if (!token) {
    return res.status(400).send("Could not get 42 access token");
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
    return res.status(400).send("Could not get 42 locations");
  }

  const payload = await locations.json();

  payload.forEach(item => {
  	if (posts[item.host] == null)
  	{
  	  posts[item.host] = {
  	  	login: item.user.login,
  	  	displayname: item.user.usual_full_name,
  	  	image_url: item.user.image_url,
  	  }
  	}
  });

  res.status(200).json(posts);
}
