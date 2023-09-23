This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**Now Playing on Spotify**

<a href="https://github.com/manjillama/spotify-playing-badge">
    <img src="https://spotify-playing-badge.vercel.app/api/now-playing" width="256" height="64" alt="Now Playing">
</a>

<hr/>

## Spotify Setup

Read [setup-guide](./setup-guide.md) to get started with Spotify API

## Project Setup

1. **Clone the repository**

   ```bash
   # Clone with SSH
   $ git clone git@github.com:manjillama/spotify-playing-badge.git

   # Or with HTTPS
   $ git clone https://github.com/manjillama/spotify-playing-badge.git
   ```

2. **Install dependencies**
   Navigate into newly cloned folder and install dependencies.

   ```shell
   cd spotify-playing-badge/
   npm install
   ```

3. **Configuration**
   In the root project folder, copy the `.env.local.example` and save as `.env.local`. Update the variables.

4. **Start developing.**
   Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

   You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

   [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/now-playing](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/now-playing.ts`.

   The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Third-Party Credits

This project includes code snippets from the following open-source projects:

- **natemoo-re**

  - Author: [Nate Moore
    ](https://github.com/natemoo-re)
  - Original Source: [natemoo-re](https://github.com/natemoo-re/natemoo-re)

- **JoshLmao now-playing-profile**
  - Author: [Josh Shepherd
    ](https://github.com/JoshLmao)
  - Original Source: [now-playing-profile](https://github.com/JoshLmao/now-playing-profile)
