import Link from "next/link";
import style from "./style.module.css";
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { getTime } from "@/utils/getTime";
import RevalidateButton from "@/components/RevalidateButton";

export default async function Home() {
  const currentRes = await getCurrentWeather();
  const time = await getTime(currentRes.location.tz_id);

  return (
    <>
      <h1>날씨 앱</h1>
      <h3>{time.dateTime}</h3>
      <ul className={style.list}>
        <li>
          <Link href="/seoul">서울</Link>
          {currentRes.current.condition.text}
        </li>
        <li>
          <Link href="/newyork">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={"time"} />
    </>
  );
}
