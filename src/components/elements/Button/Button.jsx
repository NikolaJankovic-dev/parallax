import style from "./Button.module.css"

const Button = ({textColor, backGround, paddingY, paddingX, children, handler}) => {
  return (
    <div 
      className={style.buttonStyle}
      style={{
        color: textColor,
        backgroundColor: backGround,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX
      }}
      onClick={handler}
    >
      {children}
    </div>
  )
}

export default Button;