import backGroundTech from "assets/technology/background-technology-tablet.jpg";

export default function Technology() {
  return (
    <div>
      <div className="absolute top-0 z-30">
        <img
          src={backGroundTech}
          alt="space and stars"
          className="h-screen w-screen"
        />
      </div>

      <div className="relative z-40 pt-28 mx-10 lg:mx-20 xl:mx-40">
        <div className="flex items-center justify-center gap-2 mb-16 lg:justify-start lg:pl-40">
          <span className="text-gray-500 text-sm lg:text-lg">03</span>
          <p className="text-white text-xs lg:text-lg">SPACE LAUNCH 101</p>
        </div>

        <div className="flex flex-col items-center text-center gap-10">
          <div className="flex gap-4">
            <button className="bg-transparent text-white rounded-full w-12 h-12 border-gray-300 border-[1px] transition duration-300 easy-in-out hover:border-white">
              1
            </button>
            <button>2</button>
            <button>3</button>
          </div>

          <div>
            <img src="" alt="" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-strongGray text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              The terminology
            </span>
            <span className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              Launch Vehicle
            </span>
            <p className="text-lightBlueText text-sm sm:text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex autem
              officia cupiditate vel tempora praesentium et modi labore quaerat
              ab odio atque sint, iste nam nisi, nobis corporis aspernatur
              repellendus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
