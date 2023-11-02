//revalidateTag 함수는 서버에서만 동작할 수 있음
//revalidate 후 첫 요청에서 새로운 데이터를 받을 수 있음

import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tag");
  if (!tag) throw new Error("태그는 필수입니다.");

  revalidateTag(tag); //해당 tag가 달려있는 fetch 요청을 재검증

  return NextResponse.json({ message: "재검증에 성공했습니다.", tag });
}
