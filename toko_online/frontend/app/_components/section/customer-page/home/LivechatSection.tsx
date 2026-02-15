const LivechatSection = () => {
  return (
    <section className="relative py-10 text-white">
      {/* Wrapper center */}
      <div className="relative mx-auto w-11/12 overflow-hidden rounded-3xl">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />

        {/* Blur circles */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-10 text-center">
          <img
            src="/icons/chat.svg"
            alt="Live Chat Icon"
            className="mx-auto mb-6 h-8 w-8 bg-blue-400/20 py-1 rounded-lg"
          />
          <h2 className="mb-4 text-4xl font-bold">Not sure about your size?</h2>
          <p className="mb-8 text-lg text-gray-300">
            Our customer support team is here to help you find the perfect fit.
            Chat with us now!
          </p>
          <button className="mx-auto flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Start Live Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default LivechatSection;
