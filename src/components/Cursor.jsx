import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    let rx = 0, ry = 0;

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;

      rx += (e.clientX - 18 - rx) * 0.15;
      ry += (e.clientY - 18 - ry) * 0.15;

      ring.style.transform = `translate(${rx}px, ${ry}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div id="cursor" className="fixed w-3 h-3 bg-purple-300 rounded-full z-[9999] mix-blend-difference"></div>
      <div id="cursor-ring" className="fixed w-9 h-9 border border-purple-300/40 rounded-full z-[9998]"></div>
    </>
  );
}