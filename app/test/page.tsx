'use client';

import { useEffect, useState } from 'react';


export default function Page() {
    const [loading, setLoading] = useState<boolean>(true);
    const [pastImage, setPastImage] = useState<File | null>(null);
    // const [blobb, setBlob] = useState<Blob | null>(null);

    const test = async () => {
        const response = await fetch("https://buyillini.s3.us-east-2.amazonaws.com/post-f-38fd96f0-d314-44cc-a5a2-d67f48520c57");
        const blob = await response.blob();
        const file = new File([blob], `image`, { type: blob.type });
        setPastImage(file);
        setLoading(false);
        // setBlob(blob)
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