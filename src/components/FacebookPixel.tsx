import { useEffect } from 'react';

const FacebookPixel = () => {
    useEffect(() => {
        // Initialize Facebook Pixel
        const initPixel = () => {
            // Check if already initialized
            if ((window as any).fbq) return;

            // Define fbq function
            const n = (window as any).fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };

            // Initialize properties
            if (!(window as any)._fbq) (window as any)._fbq = n;
            n.push = n;
            n.loaded = true;
            n.version = '2.0';
            n.queue = [];

            // Insert script
            const t = document.createElement('script');
            t.async = true;
            t.src = 'https://connect.facebook.net/en_US/fbevents.js';

            const s = document.getElementsByTagName('script')[0];
            if (s.parentNode) {
                s.parentNode.insertBefore(t, s);
            }

            // Track events
            n('init', '812619754954290');
            n('track', 'PageView');
        };

        initPixel();
    }, []);

    return null;
};

export default FacebookPixel;
