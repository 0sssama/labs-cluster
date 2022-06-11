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
        "filter[host]": Object.keys(e2Posts).join(","),
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
    if (Object.keys(e2Posts).includes(payload[item].host)) {
      e2Posts[payload[item].host] = {
        login: payload[item].user.login,
        displayname: payload[item].user.usual_full_name,
      };
    }
  }

  res.status(200).json(e2Posts);
}

const e2Posts = {
  "hanane-dump": null,
  e3r9p8: null,
  e3r9p9: null,
  e3r9p10: null,
  e3r9p11: null,
  e3r9p3: null,
  e3r9p7: null,
  e3r9p14: null,
  e3r9p15: null,
  e3r9p2: null,
  e3r9p6: null,
  e3r9p13: null,
  e3r10p2: null,
  e3r9p1: null,
  e3r9p5: null,
  e3r9p12: null,
  e3r10p1: null,
  e3r8p15: null,
  e3r9p4: null,
  e3r10p6: null,
  e3r8p10: null,
  e3r8p14: null,
  e3r10p5: null,
  e3r10p7: null,
  e3r8p9: null,
  e3r8p13: null,
  e3r10p4: null,
  e3r10p2: null,
  e3r8p8: null,
  e3r8p12: null,
  e3r10p3: null,
  e3r10p9: null,
  e3r8p7: null,
  e3r8p11: null,
  e3r7p8: null,
  e3r7p12: null,
  e3r7p9: null,
  e3r7p13: null,
  e3r8p3: null,
  e3r8p6: null,
  e3r7p10: null,
  e3r7p14: null,
  e3r8p2: null,
  e3r8p5: null,
  e3r7p11: null,
  e3r8p1: null,
  e3r8p4: null,
  e3r7p2: null,
  e3r7p3: null,
  e3r7p7: null,
  e3r6p12: null,
  e3r10p10: null,
  e3r10p11: null,
  e3r7p1: null,
  e3r7p4: null,
  e3r6p15: null,
  e3r5p1: null,
  e3r7p15: null,
  e3r7p5: null,
  e3r4p12: null,
  e3r1p3: null,
  e3r6p14: null,
  e3r7p6: null,
  e3r11p6: null,
  e3r11p9: null,
  e3r11p12: null,
  e3r11p15: null,
  e3r6p10: null,
  e3r6p11: null,
  e3r6p12: null,
  e3r6p13: null,
  e3r11p5: null,
  e3r11p11: null,
  e3r11p14: null,
  e3r6p6: null,
  e3r6p7: null,
  e3r6p8: null,
  e3r6p9: null,
  e3r11p4: null,
  e3r11p7: null,
  e3r11p10: null,
  e3r11p13: null,
  e3r10p13: null,
  e3r10p14: null,
  e3r10p15: null,
  e3r12p3: null,
  e3r12p6: null,
  e3r12p9: null,
  e3r12p12: null,
  e3r11p1: null,
  e3r11p2: null,
  e3r11p3: null,
  e3r12p5: null,
  e3r12p8: null,
  e3r12p11: null,
  e3r12p4: null,
  e3r12p7: null,
  e3r12p10: null,
  e3r12p13: null,
  e3r12p14: null,
  e3r12p15: null,
  e3r13p1: null,
  e3r13p2: null,
  e3r13p3: null,
  e3r6p2: null,
};
