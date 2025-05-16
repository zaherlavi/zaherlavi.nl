import { useTheme } from "./ThemeProvider";
import Image from "next/image";

const ProfileImage = () => {
  const { theme } = useTheme();

  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
       
        {/* Image container */}
        <div
          className={`relative w-full h-full rounded-full overflow-hidden ${
            theme === "dark" ? "border-2 border-purple-500/50" : "border-0"
          }`}
        >
          <Image
            src="/Zaher Lavi.jpg"
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
