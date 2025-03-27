
import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase/firestore';
import { doc, increment, setDoc, serverTimestamp, collection, addDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const { uid, message } = await req.json();

    if (!uid || !message) {
      return NextResponse.json({ error: 'Missing uid or message' }, { status: 400 });
    }

    await addDoc(collection(db, 'messages'), {
      uid,
      message,
      timestamp: serverTimestamp()
    });

    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, { points: increment(1) }, { merge: true });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
