export default function HeroSection() {
  return (
    <>
     <div className="h-[90vh]">
     <div className="lg:pt-24 pt-10 flex flex-col lg:items-star   justify-center text-center lg:w-1/2   items-center">
        <h1 className="text-6xl md:8xl lg:9xl tracking-wide font-semibold">
          Let us find your <br />
          <span className=" bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-bold">
            favorite food !
          </span>
        </h1>
        <p className="mt-10 text-lg text-center max-w-4xl text-neutral-500 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  items-center justify-center text-center mt-10 gap-10 lg:w-1/2 ">
        <a href="#" className="py-2 w-full px-3 rounded-md  bg-red-800">
          Search Now
        </a>
        <a
          href="#"
          className="py-2 px-3  w-full rounded-md  bg-white text-red-800"
        >
          Know More
        </a>
      </div>
     </div>
    </>
  );
}
