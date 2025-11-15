import React from 'react';
import ClearButton from '../Buttons/GenericButton';
import SaveButton from '../Buttons/SaveButton';

const ConfirmSaveModal = ({ isOpen, item, onCancel }) => {
    if (!isOpen) return null;
    console.log(item)
    return (
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-auto">
            {/* Semi-transparent overlay */}
            <div
                className="absolute inset-0 bg-black/30"
            />

            {/* Modal box */}
            <div className="relative border bg-modalBackgroundColor rounded-canvas border-buttonBorder min-w-[530px] z-10 gap-3 shadow-lg">
                <h2 className="text-lg font-bold p-6 h-[64px]">Give me a name</h2>
                <hr className="border-t border-buttonBorder" />
                <div className="p-6 text-sm space-y-3 h-[124px]">
                    <input
                        type='text'
                        className='min-h-[42px] min-w-[482px] p-3 bg-buttonBorder border border-buttonBorder outline-none rounded-topButtonRadius hover:border-buttonHover hover:border focus:border focus:border-buttonHover !focus:text-iconColor text-textSecondary' 
                        placeholder='Name it'
                    />
                    <p className='text-iconColor'>
                        By adding this effect as a present you can reuse this anytime.
                    </p>
                </div>
                <div className="flex justify-end gap-2 p-6 text-sm h-[86px]">
                    <ClearButton text={"Cancel"} onClick={onCancel} className='min-w-[77px]'/>
                    <SaveButton onClick={()=>console.log(item)}/>
                </div>
            </div>
        </div>
    );
};

export default ConfirmSaveModal;
