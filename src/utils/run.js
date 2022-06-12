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

export async function run() {
  const client = new ClientCredentials(config);

  try {
    // get access token
    const accessToken = await client.getToken();

    // return access token
    return accessToken.token;
  } catch (error) {
    console.log("Access Token error", error.message);
    return null;
  }
}

export function now() {
	return Date.now() / 1000;
}
