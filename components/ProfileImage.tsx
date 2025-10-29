import Image from "next/image";
import ProfileImageSource from "@/public/profile-image.jpg"

const ProfileImage = () => {

  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
       
        {/* Image container */}
        <div
          className={"relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/50"}
        >
          <Image
            src={ProfileImageSource}
            alt="Zaher Lavi"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 448px"
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
