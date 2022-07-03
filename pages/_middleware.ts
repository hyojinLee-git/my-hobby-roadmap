import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(request);
  if (request.url === '/') {
    const url = request.nextUrl.clone();
    console.log(url);

    url.pathname = '/roadmap';
    return NextResponse.rewrite(url);
  }
}
