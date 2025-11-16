// Fan Icon svg
const Fan = ({ size = 20, hovered = false, selected = false, className = '' }) => {
    const strokeClass = hovered || selected ? 'text-white'
        : 'text-iconColor';
    return (
        <div
            className={`flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                className={`transition-colors duration-200 ${strokeClass}`}
            >
                <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
                <path d="M12 12v.01" />
            </svg>
        </div>
    );
};

export default Fan;