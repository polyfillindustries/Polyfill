"use client";

export default function GalleryVideoPlayer() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="https://res.cloudinary.com/db5icb0jd/video/upload/q_auto,f_mp4/spvideo_dcwrni.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
