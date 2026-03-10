import styles from "../styles/Button.module.css";

export default function Button({
    children, 
    onClick, 
    className, 
    style
}){
    return(
        <button 
            style={style}
            onClick={onClick}
            className={[styles.Button, className].join("")}
        >
            {children}
        </button>
    )
}