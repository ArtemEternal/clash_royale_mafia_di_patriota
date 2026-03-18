import styles from "../styles/Button.module.css";

export default function Button({
    children, 
    onClick, 
    classNamee, 
    style
}){
    return(
        <button 
            style={style}
            onClick={onClick}
            className={[styles.Button, classNamee].join("")}
        >
            {children}
        </button>
    )
}