import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
      style={{
        padding: "1rem",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>Spotify now playing badge</h2>
        <br />
        <p>
          Navigate to <Link href="/api/now-playing">/api/now-playing</Link>
        </p>
      </div>
    </main>
  );
}
