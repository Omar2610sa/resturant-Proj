'use client';
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from 'next/link';
import Error500Page from '@/components/shared/errors/500ErrorPage';

export default function Error() {

    return (
        <>
            <Error500Page />
        </>
    );
}
