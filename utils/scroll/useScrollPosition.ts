import { useEffect, useState } from 'react';

export const NAVBAR_HEIGHT: number = 0;

export const useScrollPosition = () => {
    const [isAtTop, setIsAtTop] = useState<boolean>(true);
    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        const updatePosition = () => {
            const currentPosition = window.scrollY;

            if (currentPosition <= NAVBAR_HEIGHT) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }

            // Mostrar el botón cuando el scroll es mayor a 500px
            setShowButton(currentPosition > 500);
        };

        window.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return {
        isAtTop,
        showButton,
    };
};