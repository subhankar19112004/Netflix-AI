import lang from "../../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="flex w-full flex-col items-center px-4 py-6">
      {/* Search Bar */}
      <div
        className="
          mt-35
          flex
          w-full
          max-w-3xl
          items-center
          gap-2
          rounded-2xl
          border
          border-white/10
          bg-[#212121]
          p-2
          shadow-2xl
          transition-all
          duration-300
          focus-within:border-white/20
          focus-within:shadow-[0_0_30px_rgba(255,255,255,0.05)]
        "
      >
        {/* Search Input */}
        <input
          type="text"
          placeholder={lang.or.gptSearchPlaceholder}
          className="
            min-w-0
            flex-1
            bg-transparent
            px-4
            py-3
            font-sans
            text-sm
            font-extralight
            text-white
            outline-none
            placeholder:text-gray-500
            sm:text-base
          "
        />

        {/* Search Button */}
        <button
          type="button"
          className="
            flex
            h-11
            w-20
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-gray-600
            text-gray-300
            transition-all
            duration-200
            hover:scale-105
            hover:bg-gray-500
            active:scale-95
          "
          aria-label="Search movies"
        >
                  {/* <Search className="h-5 w-5" strokeWidth={2.5} /> */}
                  {lang.or.search}
        </button>
      </div>

      {/* Usage Instructions */}
      <div
        className="
          mt-4
          max-w-2xl
          px-4
          text-center
          font-sans
          text-xs
          font-light
          leading-5
          tracking-wide
          text-gray-500
          sm:text-sm
        "
      >
        <p className="text-amber-100">
          Please use the AI search responsibly. Avoid unnecessary or repeated
          requests to help conserve API resources.
        </p>

        <p className="mt-1 text-gray-200">
          Try prompts like{" "}
          <span className="text-green-300">
            "Suggest a mind-bending thriller"
          </span>
          , <span className="text-green-400">"Best comedy movies"</span>, or{" "}
          <span className="text-green-500">"Movies similar to Inception"</span>.
        </p>
      </div>
    </div>
  );
};

export default GptSearchBar;