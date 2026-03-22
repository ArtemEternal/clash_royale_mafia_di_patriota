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
            className={`${styles.Button} ${styles[classNamee]}`}
        >
            {children}
        </button>
    )
};


            {/*className={[styles.Button, classNamee].join("")}*/}
