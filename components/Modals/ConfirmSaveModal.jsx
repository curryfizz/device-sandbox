import { useState } from "react";
import GenericButton from "../Buttons/GenericButton";
import SaveButton from "../Buttons/SaveButton";
import { closeSaveModal } from "../../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import {showToast } from "../../store/toastSlice";
import { savePreset } from "../../store/presetsSlice";

const ConfirmSaveModal = ({ isOpen }) => {
    const dispatch = useDispatch();
    const canvasItem = useSelector(state => state.devices.canvasItem);
    const [presetName, setPresetName] = useState("");
    const [showErrorText, setShowErrorText] = useState(false);

    if (!isOpen) return null;

    const handleSave = async () => {
        if (!presetName) {
            setShowErrorText(true);
            return;
        };

        try {
            if (!canvasItem) {
                throw new Error("Could not store preset");
            }
            const payload = {
                name: presetName,
                devices: [
                    {
                        ...canvasItem
                    },
                ],
            };

            const result = await dispatch(savePreset(payload));
            if(result.error){
                throw new Error("Could not save preset due to backend");
            }
            dispatch(closeSaveModal());
            dispatch(showToast({ message: 'Preset saved!', type: 'success' }));


        } catch (err) {
            console.error(err);
            dispatch(closeSaveModal());
            dispatch(showToast({ message: 'Failed to save preset', type: 'error' }));
        } finally {
            setPresetName("");
            setShowErrorText(false)
        }
    };

    const handleCancel = () => {
        setPresetName("");               // reset input
        setShowErrorText(false)
        dispatch(closeSaveModal());      // close the modal
    };

    return (

        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-auto">
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative border bg-modalBackgroundColor rounded-canvas border-buttonBorder min-w-[530px] z-10 gap-3 shadow-lg">
                <h2 className="text-lg font-bold p-6 h-[64px]">Give it a name</h2>
                <hr className="border-t border-buttonBorder" />
                <div className="p-6 text-sm space-y-3 h-[124px]">
                    <input
                        type="text"
                        value={presetName}
                        onChange={(e) => { setPresetName(e.target.value); setShowErrorText(false) }}
                        placeholder="Name it"
                        className="min-h-[42px] min-w-[482px] p-3 bg-buttonBorder border border-buttonBorder outline-none rounded-topButtonRadius hover:border-buttonHover focus:border focus:border-buttonHover text-textSecondary"
                    />
                    {showErrorText && (
                        <p className="text-xs p-0 font-normal text-red-500">
                            Please enter a preset name!
                        </p>
                    )}
                    <p className="p-b-2 text-sm font-normal text-iconColor">
                        By adding this effect as a present you can reuse this anytime.
                    </p>
                </div>
                <div className="flex justify-end gap-2 p-6 text-sm h-[86px]">
                    <GenericButton text="Cancel" onClick={handleCancel} />
                    <SaveButton onClick={handleSave} />
                </div>
            </div>
        </div>
    );
};

export default ConfirmSaveModal;