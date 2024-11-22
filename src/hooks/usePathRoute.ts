"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const usePathRoute = () => {
    const router = useRouter();

    useEffect(() => {
        const handlePathChange = () => {
            const path = window.location.pathname.substring(1);
            router.push(`/${path}`);
        };

        // Call the handler once on mount to handle the initial path
        handlePathChange();

        // Optionally, listen for popstate events if you want to handle back/forward navigation
        window.addEventListener('popstate', handlePathChange);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('popstate', handlePathChange);
        };
    }, [router]);
};