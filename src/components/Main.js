import { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

export default function Main({ movies, tempWatchedData, average }) {
  return (
    <main className="main">
      <ListBox movies={movies} />

      <WatchedBox tempWatchedData={tempWatchedData} average={average} />
    </main>
  );
}
