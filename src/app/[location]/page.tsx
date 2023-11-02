import HomeButton from "@/components/HomeButton";

type Props = {
  params: { location: string };
};
export default function Detail({ params }: Props) {
  const location = params.location;
  const name = location === "seoul" ? "서울" : location === "newyork" ? "뉴욕" : "런던";

  return (
    <>
      <h1> {name} 일기 예보</h1>
      <HomeButton />
    </>
  );
}
