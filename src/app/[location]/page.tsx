type Props = {
  params: { location: string };
};
export default function Detail({ params }: Props) {
  return (
    <>
      <h1> {params.location} 일기 예보</h1>
    </>
  );
}
