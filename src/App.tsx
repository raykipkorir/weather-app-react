import { useEffect, useState } from "react";
import "./App.css";
import CityData from "./components/CityData";
import { LoadingSpinner } from "./components/LoadingSpinner";
import SearchBar from "./components/SearchBar";
import { Data } from "./Data.types";

function App() {
  const [weatherData, setWeatherData] = useState<Data | null>(null);
  const [query, setQuery] = useState("Nairobi");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) {
          setWeatherData(data);
        } else {
          setWeatherData(null);
        }
        setIsLoading(false);
      });
  }, [query]);

  const getSearchData = (searchData: string) => {
    setQuery(searchData);
  };

  return (
    <div className="flex flex-col items-center min-h-screen gap-5 mt-20">
      <SearchBar getSearchData={getSearchData} />
      {isLoading ? (
        <LoadingSpinner />
      ) : weatherData ? (
        <CityData weatherData={weatherData} />
      ) : (
        <h1>Country or City Not found</h1>
      )}
    </div>
  );
}

export default App;
