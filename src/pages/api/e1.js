import run from "utils/run";

export default async function handler(req, res) {
  // get 42 access token
  const token = await run();

  if (!token) {
    return res.status(400).send("Could not get 42 access token");
  }

  const locations = await fetch(
    "https://api.intra.42.fr/v2/locations?" +
      new URLSearchParams({
        campus_id: 16,
        "filter[host]": Object.keys(e1Posts).join(","),
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

  for (let item in payload) {
    if (Object.keys(e1Posts).includes(payload[item].host)) {
      e1Posts[payload[item].host] = {
        login: payload[item].user.login,
        displayname: payload[item].user.usual_full_name,
      };
    }
  }

  res.status(200).json(e1Posts);
}

const e1Posts = {
  "bocal-dump": null,
  e3r2p14: null,
  e3r2p13: null,
  e3r1p8: null,
  e3r2p12: null,
  e3r2p11: null,
  e3r2p10: null,
  e3r1p1: null,
  e3r5p10: null,
  e3r5p9: null,
  e3r2p15: null,
  e3r6p1: null,
  e3r6p4: null,
  e3r2p4: null,
  e3r2p5: null,
  e3r2p1: null,
  e3r2p3: null,
  e3r1p13: null,
  e3r3p1: null,
  e3r3p5: null,
  e3r3p2: null,
  e3r3p4: null,
  e3r3p3: null,
  e3r4p4: null,
  e3r5p12: null,
  e3r1p15: null,
  e3r4p11: null,
  e3r3p7: null,
  e3r3p6: null,
  e3r3p9: null,
  e3r1p12: null,
  e3r3p10: null,
  e3r3p13: null,
  e3r1p2: null,
  e3r3p8: null,
  e3r1p13: null,
  e3r2p7: null,
  e3r1p12: null,
  e3r1p4: null,
  e3r1p14: null,
  e3r1p5: null,
  e3r1p6: null,
  e3r2p2: null,
  e3r1p7: null,
  e3r3p12: null,
  e3r4p1: null,
  e3r1p9: null,
  e3r3p14: null,
  e3r4p2: null,
  e3r5p14: null,
  e3r5p13: null,
  e3r5p15: null,
  e3r3p15: null,
  e3r4p3: null,
  e3r2p9: null,
  e3r2p8: null,
  e3r2p6: null,
  e3r4p14: null,
  e3r4p5: null,
  e3r5p11: null,
  e3r4p6: null,
  e3r4p10: null,
  e3r4p9: null,
  e3r4p7: null,
  e3r12p2: null,
  e3r12p1: null,
  e3r11p8: null,
  e3r1p10: null,
  e3r4p8: null,
  e3r1p11: null,
  e3r5p4: null,
  e3r5p3: null,
  e3r5p2: null,
  e3r6p3: null,
  e3r5p8: null,
  e3r5p7: null,
  e3r5p6: null,
  e3r5p5: null,
  e2r4p14: null,
  e3r3p11: null,
};
