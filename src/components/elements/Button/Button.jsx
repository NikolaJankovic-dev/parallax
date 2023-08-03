// import style from "./Button.module.css"

// const Button = ({textColor, backGround, paddingY, paddingX, children, handler}) => {
//   return (
//     <div 
//       className={style.buttonStyle}
//       style={{
//         color: textColor,
//         backgroundColor: backGround,
//         paddingTop: paddingY,
//         paddingBottom: paddingY,
//         paddingLeft: paddingX,
//         paddingRight: paddingX
//       }}
//       onClick={handler}
//     >
//       {children}
//     </div>
//   )
// }

// export default Button;

import React from "react";
import style from "./Button.module.css";

const Button = ({ textColor, backGround, paddingY, paddingX, children, handler, customStyle }) => {
  const buttonStyle = {
    color: textColor,
    backgroundColor: backGround,
    paddingTop: paddingY,
    paddingBottom: paddingY,
    paddingLeft: paddingX,
    paddingRight: paddingX,
    ...customStyle, // Spajamo custom stilove sa osnovnim stilom
  };

  return (
    <div className={style.buttonStyle} style={buttonStyle} onClick={handler}>
      {children}
    </div>
  );
};

export default Button;
