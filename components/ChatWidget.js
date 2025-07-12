"use client"; // required for Next.js App Router (safe to keep even in Pages Router)
import { useEffect, useRef } from "react";

export default function ChatWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const iframe = document.createElement("iframe");
    iframe.src =
      "https://www.chatbase.co/chatbot-iframe/YOUR_BOT_ID?ts=" + Date.now(); // <-- replace this ID
    iframe.width = "100%";
    iframe.height = "500";
    iframe.style.border = "none";

    containerRef.current.appendChild(iframe);

    // Optional cleanup
    return () => containerRef.current.removeChild(iframe);
  }, []);

  return <div ref={containerRef} />;
}
