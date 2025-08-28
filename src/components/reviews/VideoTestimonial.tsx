"use client";

import VideoPlayer from "../ui/VideoPlayer";
import { ReactNode } from "react";

interface VideoTestimonialProps {
  videoUrl: string;
  children?: ReactNode;
  className?: string;
}

export default function VideoTestimonial({
  videoUrl,
  children,
  className = "",
}: VideoTestimonialProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Video Player - Left Column */}
        <div className="relative group">
          <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden">
            <VideoPlayer src={videoUrl} />
          </div>
        </div>

        {/* Testimonial Content - Right Column */}
        <div className="flex flex-col h-full justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}
