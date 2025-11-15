import { useEffect, useState } from "react";
import SuccessSVG from "./Icons/Success";
import ErrorSVG from "./Icons/Error";

const Toast = ({ message, type = "success", className = "", onClose }) => {
    const [closing, setClosing] = useState(false);

    const colors = {
        success: { solid: "#242C32", gradient: "#00ED51" },
        error: { solid: "#242C32", gradient: "#b91c1c" },
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
            {/* Solid background */}
            <div
                className="rounded-topButtonRadius shadow-2xl px-6 py-4 flex items-center justify-center gap-3 min-w-[261px] min-h-[56px] relative overflow-hidden"
                style={{ backgroundColor: colors[type].solid }}
            >
                {/* Radial gradient layer */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at left center, ${colors[type].gradient}20, transparent 60%)`,
                    }}
                />

                {/* Content */}
                <div className="flex items-center justify-center gap-3 relative z-10">
                    <div className="flex-shrink-0">{icons[type]}</div>
                    <span className="text-white text-base font-bold">{message}</span>
                </div>
            </div>
        </div>
    );
};

export default Toast;
