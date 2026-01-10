import { NextResponse } from "next/server";

// TEMP: Products are not in the current Prisma schema yet.
// This endpoint is disabled so the build can pass.
// We'll re-enable it after we add Product model + migrations.

export async function GET() {
  return NextResponse.json(
    { error: "Products API temporarily disabled (schema not ready yet)." },
    { status: 503 }
  );
}

export async function POST() {
  return NextResponse.json(
    { error: "Products API temporarily disabled (schema not ready yet)." },
    { status: 503 }
  );
}
