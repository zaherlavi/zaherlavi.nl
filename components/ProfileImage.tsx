// ProfileImage component
import Image from "next/image";

const ProfileImage = () => {
    return (
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-1">
            <div className="absolute inset-0 rounded-full bg-black"></div>
          </div>
          
          {/* Image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/zaher.png" 
              alt="Zaher Lavi"
              width={5184}  
              height={3456} 
              className="w-full h-full object-cover object-center"
              priority
            />
            </div>
          </div>
  
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
          <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
        </div>
      </div>
    );
  };
  
  export default ProfileImage;