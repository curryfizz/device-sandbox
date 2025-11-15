import React, { useEffect, useState } from "react";
import SuccessSVG from "./Icons/Success";
import ErrorSVG from "./Icons/Error";

const Toast = ({ message, type = "success", className = "", onClose }) => {
    const [closing, setClosing] = useState(false);

    const gradientHexes = {
        success: ["#059669", "#0f172a"],
        error: ["#b91c1c", "#0f172a"],
    };

    const icons = {
        success: <SuccessSVG />,
        error: <ErrorSVG />,
    };

    // Auto-close with animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setClosing(true); // trigger exit animation
            setTimeout(onClose, 300); // remove after animation duration
        }, 2000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`absolute z-100 left-1/2 -translate-x-1/2 transition-all duration-300 ${closing ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                } ${className}`}
        >
            <div
                style={{
                    background: `radial-gradient(circle at left center, ${gradientHexes[type][0]}, ${gradientHexes[type][1]} 70%)`
                }}
                className="rounded-topButtonRadius shadow-2xl px-3 py-4 flex items-center gap-4 min-w-[261px] min-h-[56px]"
            >
                <div className="flex-shrink-0">{icons[type]}</div>
                <span className="text-white text-lg font-bold flex-grow">{message}</span>
            </div>
        </div>
    );
};

export default Toast;
