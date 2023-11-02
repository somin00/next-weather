//에러 페이지는 항상 클라이언트 컴포넌트로 작성
"use client";

type Props = {
  error: Error;
  reset: () => void;
};
export default function Error({ error, reset }: Props) {
  return (
    <>
      <h1>{error.message}</h1>
      <button
        onClick={() => {
          reset();
        }}
      >
        새로고침
      </button>
    </>
  );
}
