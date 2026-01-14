import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { throttle } from '../utils/throttle';

const FloatingCallButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = throttle(() => {
            // Show after scrolling past the hero (approx 500px)
            setIsVisible(window.scrollY > 500);
        }, 100);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <a 
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="fixed bottom-6 right-6 md:hidden z-50 bg-idle-salmon text-white p-4 rounded-full shadow-2xl animate-bounce flex items-center justify-center border-4 border-white"
            aria-label="Call Now"
        >
            <Phone className="w-8 h-8 fill-current" />
        </a>
    );
};

export default FloatingCallButton;