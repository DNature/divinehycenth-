import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const isProd = process.env.NODE_ENV === "production";
const domain = process.env.DOMAIN

export default (): number => {
    const router = useRouter();
    const [counter, setCounter] = useState( 5 );

    // Third Attempts
    useEffect( () => {
        const timer = counter > 0 && setInterval( () => setCounter( counter - 1 ), 1000 );

        if ( counter <= 0 ) {
            isProd ?window.location.href = `${domain}` :  router.push("/");
        }
        return (): void => clearInterval( timer as any );
    }, [counter] );

    return counter;
};

