
import { useState, useEffect } from 'react';

const Arrowup = () => {
    const [showArrow, setShowArrow] = useState(false);

    // Maneja el evento de desplazamiento
    const handleScroll = () => {
        // Si el desplazamiento vertical es mayor a 100vh, muestra la flecha
        if (window.scrollY > window.innerHeight) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }
    };

    // Usa useEffect para agregar y limpiar el evento de desplazamiento
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showArrow && (
                <div className="arrow">
                    <a href="#hero">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            fill="#fff"
                            className="bi bi-arrow-up-circle"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
                            />
                        </svg>
                    </a>
                </div>
            )}
        </>
    );
};

export default Arrowup;