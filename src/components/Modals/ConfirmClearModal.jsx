import GenericButton from "../Buttons/GenericButton";

const ConfirmClearModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-auto">
      {/* Semi-transparent overlay */}
      <div
        className="absolute inset-0 bg-black/30"
      />

      {/* Modal box */}
      <div className="relative border bg-modalBackgroundColor rounded-canvas border-buttonBorder min-w-[530px] z-10 gap-3 shadow-lg">


        <div className="flex justify-between items-center p-6  h-[64px] text-textSecondary">

          <h2 className="text-lg font-bold">Clear Canvas?</h2>

          <button
            onClick={onCancel}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" >
              <g clip-path="url(#clip0_16_270)">
                <path d="M12.5 3.5L3.5 12.5" stroke="#E5E7EB" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 12.5L3.5 3.5" stroke="#E5E7EB" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_16_270">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <hr className="border-t border-buttonBorder" />
        <p className="p-6 text-sm">
          Are you sure you want to clear the canvas? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-2 p-6 text-sm">
          <GenericButton onClick={onCancel} text="Cancel" className={"px-4"}/>
          <GenericButton onClick={onConfirm} text="Clear Canvas" className={"px-4 bg-red-500"}/>

        </div>
      </div>
    </div>
  );
};

export default ConfirmClearModal;
