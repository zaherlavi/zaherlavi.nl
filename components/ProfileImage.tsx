const ProfileImage = () => {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-1">
          <div className="absolute inset-0 rounded-full bg-black"></div>
        </div>

        {/* Image container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/50">
          <img
            src="https://c0yzrwzfg3.ufs.sh/f/HJYp9qKaAcIEiPMLzuhS13gKhXWtaQ9uZkF7MxOe8cNA6nb0"
            alt="Zaher Lavi"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
        <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default ProfileImage;
