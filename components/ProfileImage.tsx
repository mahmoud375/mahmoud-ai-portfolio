import Image from "next/image";
import { profile } from "@/lib/data";

export default function ProfileImage() {
  if (!profile.imagePath) {
    return null;
  }

  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gray-800 dark:border-gray-100 shadow-lg">
      <Image
        src={profile.imagePath}
        alt={`${profile.name} - Profile Picture`}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 640px) 192px, 224px"
      />
    </div>
  );
}
