const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const basic = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString("base64");
const Authorization = `Basic ${basic}`;

export async function nowPlaying() {
  console.log(SPOTIFY_REFRESH_TOKEN, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);

  const Authorization = await getAuthorizationToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization,
    },
  });

  const { status } = response;

  if (status === 200) {
    const data = await response.json();
    return data;
  } else return {};
}

async function getAuthorizationToken() {
  const url = new URL("https://accounts.spotify.com/api/token");
  const body = {
    grant_type: "refresh_token",
    refresh_token: SPOTIFY_REFRESH_TOKEN as string,
  };

  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      Authorization,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body),
  }).then((r) => r.json());

  return `Bearer ${response.access_token}`;
}
