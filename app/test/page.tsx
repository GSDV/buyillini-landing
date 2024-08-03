'use client';

import { useEffect, useState } from 'react';


export default function Page() {
    const [loading, setLoading] = useState<boolean>(true);
    const [pastImage, setPastImage] = useState<File | null>(null);

    const test = async () => {
        const response = await fetch("https://buyillini.s3.us-east-2.amazonaws.com/post-f-6feca0a1-8faf-4b54-b8a8-cf1f276c9ac1");
        const blob = await response.blob();
        const file = new File([blob], `image`, { type: blob.type });
        setPastImage(file);
        setLoading(false);
    }

    useEffect(() => {
        test();
    }, []);

    return (
        <>
            <h1>Test</h1>
            {loading || !pastImage ?
                <h1>Loading</h1>
            :
                <img src={URL.createObjectURL(pastImage)} />
            }
        </>
    )
}