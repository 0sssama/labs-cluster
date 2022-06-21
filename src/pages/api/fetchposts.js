import { run } from 'utils/run';
import { e1Posts, e2Posts } from 'utils/posts';

global.posts = {
  e1: e1Posts,
  e2: e2Posts
};

async function getPosts(posts) {
  // get 42 access token
  const token = await run();

  if (!token) {
    throw new Error('Could not get 42 access token');
  }

  const locations = await fetch(
    'https://api.intra.42.fr/v2/locations?' +
      new URLSearchParams({
        campus_id: 16,
        'filter[host]': Object.keys(posts).join(','),
        'filter[active]': 'true',
        'page[size]': 100,
        'page[number]': 1
      }),
    {
      headers: {
        Authorization: `Bearer ${token.access_token}`
      }
    }
  );
  if (locations.status !== 200) {
    throw new Error('Could not get 42 locations');
  }
  const _posts = await locations.json();
  return _posts;
}

function setPosts(payload, etage) {
  payload?.forEach((item) => {
    global.posts[etage][item.host] = {
      login: item.user.login,
      displayname: item.user.usual_full_name
    };
  });
}

export default async function handler(req, res) {
  try {
    console.log('from api');
    setPosts(await getPosts(global.posts['e1']), 'e1');
    setPosts(await getPosts(global.posts['e2']), 'e2');
    return res.status(200).json({
      message: 'posts fetched successfully'
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Could not get 42 locations' });
  }
}
