import prisma from '@util/prisma';

import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
    try {
        const { userName, userEmail } = await req.json();

        if (!userName) return NextResponse.json({ cStatus: 400, msg: `Missing name.` }, { status: 400 });
        if (!userEmail) return NextResponse.json({ cStatus: 400, msg: `Missing email.` }, { status: 400 });
        
        const pattern = /^[a-zA-Z0-9]+@illinois\.edu$/;
        if (!pattern.test(userEmail)) return NextResponse.json({ cStatus: 400, msg: `Must use your student "@illinois.edu" email.` }, { status: 400 });

        const userPrisma = await prisma.interestedUser.findFirst({
            where: {email: userEmail}
        });

        if (userPrisma != null) return NextResponse.json({ cStatus: 400, msg: `This email has already been added to the list.` }, { status: 400 });

        await prisma.interestedUser.create({
            data: {
                email: userEmail,
                name: userName
            }
        });

        return NextResponse.json({ cStatus: 200, msg: `Success, added your email to the list.` }, { status: 200 });
    }  catch (err) {
        return NextResponse.json({ cStatus: 900, msg: `Server error: ${err}.` }, { status: 400 });
    }
}