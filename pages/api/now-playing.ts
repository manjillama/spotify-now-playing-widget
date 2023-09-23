import type { NextApiRequest, NextApiResponse } from "next";
import Player from "../../components/player";
import { nowPlaying } from "../../utils";
import { renderToString } from "react-dom/server";

type SpotifyAPI = {
  item: {
    name?: string;
    duration_ms?: number;
    duration?: number;
    album?: {
      images?: { url: string }[];
    };
    artists?: { name: string }[];
  };
  is_playing: boolean;
  progress_ms: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    item = {},
    is_playing: isPlaying = false,
    progress_ms: progress = 0,
  }: SpotifyAPI = await nowPlaying();

  const { duration_ms: duration, name: track } = item;
  const { images = [] } = item.album || {};

  const cover =
    images[images.length - 1]?.url ||
    `${req.headers.host}/assets/default-artwork.jpg`;

  console.log("Cover", `${req.headers.host}/assets/default-artwork.jpg`);

  let coverImg;

  try {
    const buff = await (await fetch(cover)).arrayBuffer();
    coverImg = `data:image/jpeg;base64,${Buffer.from(buff).toString("base64")}`;
  } catch (ex) {
    coverImg = `/assets/default-artwork.jpg`;
  }

  const artist = (item.artists || []).map(({ name }) => name).join(", ");

  const text = renderToString(
    Player({ cover: coverImg, artist, track, isPlaying, progress, duration })
  );

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  return res.status(200).send(text);
}
