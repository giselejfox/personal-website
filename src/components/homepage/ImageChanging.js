'use client'

import React, { useState, useEffect } from 'react';

export default function ImageChanging() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % 7); // 8 is how many images I have in the folder!
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return <img className="homepage-image" src={"img/2min_sketches/" + currentImageIndex + ".jpeg"} alt="line drawing of me"/>
}