export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  return NextResponse.json(
    {
      error: "Not available",
      slug: params.slug,
    },
    { status: 404 }
  );
}
