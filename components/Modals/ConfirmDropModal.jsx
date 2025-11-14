import React from 'react';

const ConfirmDropModal = ({ isOpen, onConfirm, onCancel, elementName }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-auto">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/30"
            />

            {/* Modal */}
            <div className="relative border bg-modalBackgroundColor rounded-canvas border-buttonBorder min-w-[530px] z-10 gap-3 shadow-lg">
                <h2 className="text-lg font-bold p-6">Replace Existing Item?</h2>
                <hr className="border-t border-buttonBorder" />
                <p className='p-6 text-text text-sm'>
                    A device is already on the canvas. Do you want to replace it with <strong>{elementName}</strong>?
                </p>
                <div className="flex justify-end gap-2 p-6 text-sm">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 border rounded-buttonRadius text-clearButtonText hover:bg-buttonHover border-buttonBorder transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-clearButtonText rounded-buttonRadius hover:bg-red-600 transition"
                    >
                        Replace
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDropModal;
