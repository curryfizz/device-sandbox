import { DRAG_INDICATOR_MESSAGE } from "../../configs/devicesProps";

const DragIndicator = () => {
    return (
        // Floating tooltip for drag hint
        <div className="absolute bg-blue-500 text-white px-5 py-3 rounded-lg text-base font-normal shadow-l -ml-6 top-20 z-50">
            {DRAG_INDICATOR_MESSAGE}

            {/* Triangle arrow pointing to draggable items */}
            <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 
                            border-t-[8px] border-t-transparent 
                            border-b-[8px] border-b-transparent 
                            border-r-[8px] border-r-blue-500" />
        </div>
    );
};

export default DragIndicator;
