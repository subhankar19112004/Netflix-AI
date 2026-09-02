import GptSearchBar from "./GPT/GptSearchBar"
import MovieSuggestions from "./GPT/MovieSuggestions"

const GptSearch = () => {
  return (
    <div className="bg-[#162e31] min-h-screen flex flex-col items-center justify-center gap-4 py-6 px-4">
      <GptSearchBar />
      <MovieSuggestions/>
    </div>
  )
}

export default GptSearch