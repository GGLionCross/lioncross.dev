"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Plyr to avoid SSR issues
const Plyr = dynamic(() => import("plyr-react"), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">Loading video player...</div>
});

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import Plyr CSS only on client side
    const loadCSS = async () => {
      try {
        await import("plyr-react/plyr.css" as any);
      } catch (error) {
        console.warn("Failed to load Plyr CSS:", error);
      }
    };
    loadCSS();
  }, []);

  const plyrProps = {
    source: {
      type: "video" as const,
      sources: [
        {
          src: src,
          type: "video/mp4",
        },
      ],
    },
    options: {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "airplay",
        "fullscreen",
      ],
      settings: ["captions", "quality", "speed"],
      speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
    },
  };

  // Only render Plyr on the client side
  if (!isClient) {
    return (
      <div className={`w-full h-64 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center ${className}`}>
        Loading video player...
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <Plyr {...plyrProps} />
    </div>
  );
}
