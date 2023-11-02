import HomeButton from "@/components/HomeButton";
import { getForecastWeather } from "@/utils/getForecast";

type Props = {
  params: { location: string };
};
export default async function Detail({ params }: Props) {
  const location = params.location;
  const name = location === "seoul" ? "서울" : location === "newyork" ? "뉴욕" : "런던";

  const forecastRes = await getForecastWeather(location);
  return (
    <>
      <h1> {name} 일기 예보</h1>
      <ul>
        {forecastRes.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date}/{day.day.condition.text}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
