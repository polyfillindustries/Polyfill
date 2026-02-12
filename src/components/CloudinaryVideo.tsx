"use client"; // Required for next-cloudinary
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css'; // Required CSS

export default function VideoSection() {
  return (
    <div style={{ maxWidth: '550px', margin: '0 auto' }}>
      <CldVideoPlayer
        width="550"
        height="800"
        src="https://res.cloudinary.com/db5icb0jd/video/upload/v1770905384/spvideo_dcwrni.mov" // Replace with the Public ID from Step 1
        colors={{
          accent: '#ff0000', // Customize player color
          base: '#000000',
          text: '#ffffff'
        }}
        logo={false} // Hides Cloudinary logo (requires paid plan, otherwise shows)
        autoPlay="always" // Use 'always' for autoplay
        muted // Required for autoplay
        loop
      />
    </div>
  );
}