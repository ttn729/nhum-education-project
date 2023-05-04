import React, { useState } from "react";
import { Parsing } from "@/components/Parsing";
import { Inter } from "next/font/google";
import OfflineMode from "@/components/OfflineMode";
import OnlineMode from "@/components/OnlineMode";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // This state will store the parsed data
  const [data, setData] = useState([]);

  const [onlineMode, setOnlineMode] = React.useState(false);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Parsing setData={setData} setOnlineMode={setOnlineMode} setError={setError} />

      {!onlineMode && <OfflineMode data={data} error={error} />}

      {onlineMode && <OnlineMode data={data} error={error} />}
    </main>
  );
}
