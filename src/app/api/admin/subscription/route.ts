import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      ok: false,
      message:
        'Admin endpoints are disabled in this demo build. Enable Phase 2 (subscriptions/leads) to activate them.',
    },
    { status: 501 }
  );
}

export async function POST() {
  return GET();
}
