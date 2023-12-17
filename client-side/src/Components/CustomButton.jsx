/* eslint-disable react/prop-types */
import { useSnapshot } from "valtio"
import state from "../Store"
import { getContrastingColor } from "../config/helpers";
const CustomButton = ({ title, type, customStyles, handleClick }) => {
    
    const snap = useSnapshot(state)   
     const generateStyle = (type) => {
       if (type === "filled") {
         return {
           backgroundColor: snap.color,
           color: getContrastingColor(snap.color),
         };
       } else if (type === "outline") {
         return {
           borderWidth: "1px",
           borderColor: snap.color,
           color: snap.color,
         };
       }
     };

  return (
    <button
      className={`px-1 py-1.5 flex-1 rounded-md ${customStyles} `}
          style={generateStyle(type)}
          onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton