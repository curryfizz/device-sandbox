import React, { useState } from "react";

const LightController = ({ controls }) => {
    const { props, onUpdateItem } = controls;
    const { isOn, brightness=0, color } = props; // only pick what you need
    const handleToggle = () => onUpdateItem({ isOn: !isOn });
    const handleBrightnessChange = (value) => onUpdateItem({ brightness: value });
    const handleColorChange = (newColor) => onUpdateItem({ color: newColor });


    const colors = {
        warm: "#EED9A5",
        neutral: "#EAF1F6",
        cool: "#A3D4E3",
        pink: "#F6C0C4",
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
                            className={`w-[93.5px] h-[48px] rounded-buttonRadius border-2 transition-all ${color === name && isOn ? "border-savePresetColor" : "border-colorBorderColor"
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
                    min="0"
                    max="100"
                    step="1"
                    value={brightness}
                    onChange={(e) => handleBrightnessChange(parseInt(e.target.value))}
                    className="w-full mt-2 accent-blue-500"
                />
            </div>
        </div>
    );
}


export default LightController;