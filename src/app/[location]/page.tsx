import HomeButton from "@/components/HomeButton";
import { getForecastWeather } from "@/utils/getForecast";

type Props = {
  params: { location: string };
  searchParams: { name: string };
};

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `${searchParams.name} 날씨 앱`,
    description: `${searchParams.name}의 날씨를 알려드립니다.`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const location = params.location;

  const forecastRes = await getForecastWeather(location);
  return (
    <>
      <h1> {searchParams.name} 일기 예보</h1>
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
