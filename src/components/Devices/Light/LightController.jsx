const LightController = ({ controls }) => {
    const { props, onUpdateItem } = controls;
    const { isOn, brightness = 0, color = "#FFE5B4" } = props; // Set default color

    const handleToggle = () => onUpdateItem({ isOn: !isOn });
    const handleBrightnessChange = (value) => onUpdateItem({ brightness: value });
    const handleColorChange = (newColor) => onUpdateItem({ color: newColor });

    const colors = {
        warm: "#FFE5B4",
        neutral: "#F0F8FF",
        cool: "#87CEEB",
        pink: "#FFB6C1",
    };

    return (
        <div className="w-[448px] h-[230.4px] bg-buttonColor rounded-2xl p-6 border border-buttonBorder transition-all text-textSecondary font-medium text-sm gap-5">
            {/* Power toggle */}
            <div className="flex justify-between items-center mb-4">
                <span>Power</span>
                <button
                    onClick={handleToggle}
                    className={`w-10 h-6 rounded-full p-[2px] transition-colors ${isOn ? "bg-blue-500" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform ${isOn ? "translate-x-4" : "translate-x-0"
                            }`}
                    />
                </button>
            </div>

            {/* Color temperature */}
            <div className={`mb-4 ${!isOn ? "opacity-50 pointer-events-none" : ""}`}>
                <span>Color Temperature</span>
                <div className="flex justify-between mt-2 gap-2">
                    {Object.entries(colors).map(([name, value]) => (
                        <button
                            key={name}
                            onClick={() => handleColorChange(value)}
                            className={`w-[93.5px] h-[48px] rounded-buttonRadius border-2 transition-all ${color === value
                                    ? "border-savePresetColor"
                                    : "border-colorBorderColor"
                                }`}
                            style={{
                                backgroundColor: value,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Brightness */}
            <div className={`${!isOn ? "opacity-50 pointer-events-none" : ""}`}>
                <div className="flex justify-between items-center">
                    <span>Brightness</span>
                    <span>{brightness}%</span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={brightness}
                    onChange={(e) => handleBrightnessChange(parseInt(e.target.value))}
                    className="w-full h-4 cursor-pointer rounded-3xl"
                    style={{
                        background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${brightness - .1}%, #374151 ${brightness - .1}%, #374151 100%)`,
                        '--thumb-border-color': brightness > 0 ? '#3B82F6' : '#3E495B'
                    }}
                />
            </div>
        </div>
    );
}

export default LightController;