import Image from "next/image";
import { FaWarehouse } from "react-icons/fa6";
import { FaCheckCircle, FaRegCheckSquare } from "react-icons/fa";

const SizeInformation = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          {/* Text Content */}
          <div className="flex-1">
            <div className="flex gap-2 items-center mb-4">
              <FaWarehouse className="text-1xl text-blue-600" />
              <span className="text-sm font-semibold uppercase text-blue-600">
                Perfect Fit Tech
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Your size, every time.
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Find your perfect fit with our comprehensive size guide. We ensure
              you get the right size for maximum comfort and style.
            </p>
            <button className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700 cursor-pointer">
              Find My Size
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div
              className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg h-80"
              style={{
                backgroundImage: `url("/images/size.svg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 flex flex-col justify-center gap-4">
                    <div className="flex gap-4">
                      <div className="flex-1 justify-center h-20 w-20 items-center rounded-lg shadow-md bg-white">
                        <h1 className="text-3xl font-bold text-slate-700 mt-4">
                          8
                        </h1>
                        <p className="text-[11px] text-slate-500">US Men</p>
                      </div>
                      <div className="flex-1 h-20 w-20 items-center justify-center rounded-lg shadow-md bg-white">
                        <h1 className="text-3xl font-bold text-slate-700 mt-4">
                          9
                        </h1>
                        <p className="text-[11px] text-slate-500">
                          EU Standard
                        </p>
                      </div>
                    </div>
                    <div className="w-fit px-2 bg-blue-600 rounded-md flex items-center justify-center gap-2 shadow-lg">
                      <FaCheckCircle size={40} className="text-white m-2" />
                      <div className="text-white">
                        <p className="font-semibold">Verified Accuracy</p>
                        <p className="text-[12px]">99.8 % PERFECT FIT RATE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeInformation;
