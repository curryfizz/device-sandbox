const FanController = ({ controls }) => {
    const { props, onUpdateItem } = controls;
    const { isOn, speed = 1 } = props;

    // Toggle fan power
    const handleToggle = () => onUpdateItem({ isOn: !isOn });

    // Update fan speed
    const handleSpeedChange = (value) => onUpdateItem({ speed: value });

    return (
        <div className="w-[448px] h-[138.4px] bg-buttonColor rounded-canvas p-6 border border-buttonBorder transition-all text-textSecondary font-medium text-sm gap-5">

            {/* Power toggle */}
            <div className="flex justify-between items-center mb-4">
                <span>Power</span>
                <button
                    onClick={handleToggle}
                    className={`w-10 h-6 rounded-full p-[2px] transition-colors ${isOn ? "bg-blue-500" : "bg-gray-300"}`}
                >
                    <div
                        className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform ${isOn ? "translate-x-4" : "translate-x-0"}`}
                    />
                </button>
            </div>

            {/* Speed control */}
            <div className={`${!isOn ? "opacity-50 pointer-events-none" : ""}`}>
                <div className="flex justify-between items-center mb-2">
                    <span>Speed</span>
                    <span>{speed}%</span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={speed}
                    onChange={(e) => handleSpeedChange(parseInt(e.target.value))}
                    className="w-full h-4 cursor-pointer"
                    style={{
                        background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${speed - 0.1}%, #374151 ${speed - 0.1}%, #374151 100%)`,
                        '--thumb-border-color': speed > 0 ? '#3B82F6' : '#3E495B'
                    }}
                />
            </div>
        </div>
    );
};

export default FanController;
