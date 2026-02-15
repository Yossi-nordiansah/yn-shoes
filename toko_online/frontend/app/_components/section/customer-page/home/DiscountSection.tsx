const DiscountSection = () => {
  return (
    <section className="py-8 px-6">
      <div className="bg-blue-600 shadow-lg py-8 flex container mx-auto justify-between items-center px-4 text-center md:px-8 rounded-xl flex-col md:flex-row gap-6">
        <div>
          <h2 className="text-left text-3xl font-bold text-white">
            Summer Ready Discounts!
          </h2>
          <p className="text-base text-blue-100">
            Get exclusive discounts on your favorite brands. Limited time offer!
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="py-1 px-4 rounded-xl flex-1 bg-green-300/20 border border-green-300">
            <p className="text-left text-[11px] font-semibold text-white mt-1">
              COUPON CODE
            </p>
            <h1 className="text-xl font-bold text-white">SMMRDISC26</h1>
          </div>
          <button className="w-full cursor-pointer rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 transition-all hover:bg-gray-100 sm:w-auto">
            Copy Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
