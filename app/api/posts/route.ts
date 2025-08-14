import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  // const url = new URL(req.url);
  // console.log('url =>', url);
  // console.log('req =>', req);
  const name = searchParams.get('name');
  if (!name) {
    return NextResponse.json({error: 'Name is required'}, {status: 400})
  }
  return NextResponse.json({message: `Hello ${name}`}, {status: 200})
}

export async function POST(req: Request) {
  const contentType = req.headers.get('content-type');
  if (contentType !== 'application/json') {
    return NextResponse.json({error: 'Content-Type must be application/json'}, {status: 400})
  }
  const body = await req.json();
  return NextResponse.json({payload: body}, {status: 200})
}


export async function PUT(req: Request) {
  const contentType = req.headers.get('content-type');
  if (contentType !== 'application/json') {
    return NextResponse.json({error: 'Content-Type must be application/json'}, {status: 400})
  }
  const body = await req.json();
  return NextResponse.json({payload: body}, {status: 200})
}


export async function DELETE(req: Request) {
  const {searchParams} = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({error: 'ID is required'}, {status: 400})
  }
  return NextResponse.json({message: `Deleted ${id}`}, {status: 200})
}





