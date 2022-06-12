import { ClientCredentials } from "simple-oauth2";

const config = {
  client: {
    id: process.env.CLIENT_UID,
    secret: process.env.CLIENT_SECRET,
  },
  auth: {
    tokenHost: "https://api.intra.42.fr",
  },
};

global.accessToken = null;

export async function run() {
  const client = new ClientCredentials(config);

  const accessToken = global.accessToken;
  // only ask for access token if expires
  if (accessToken && Date.parse(accessToken.token.expires_at) > Date.now())
  {
    console.log("fromCache####################", )
    return accessToken.token;
  }

  try {
    // get access token
    const accessToken = await client.getToken();
	
	// cache
	global.accessToken = accessToken;
    // return access token
    return accessToken.token;
  } catch (error) {
    console.error("Access Token error", error.message);
    return null;
  }
}

export function now() {
	return Date.now() / 1000;
}
