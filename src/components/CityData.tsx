import { Data } from "../Data.types";

type CityDataProps = {
  weatherData: Data;
};

function CityData({ weatherData }: CityDataProps) {
  return (
    <div className="mt-5">
      <h1 className="text-2xl mb-3">{weatherData.name}</h1>

      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt=""
            height="100px"
            width="100px"
          />
          <span className="text-gray-500">
            {weatherData.weather[0].description}
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-6xl">{weatherData.main.temp}&#8451;</div>
          <span className="text-gray-500">
            {weatherData.main.temp_min}&#8451;/{weatherData.main.temp_max}
            &#8451;
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center text-gray-500">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-wind fa-beat"></i>
            <span>{weatherData.wind.speed}mph</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-droplet fa-beat"></i>
            <span>{weatherData.main.humidity}g/&#13221;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityData;
