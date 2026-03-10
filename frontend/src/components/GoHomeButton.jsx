import { Link } from "react-router-dom";
import styles from "../styles/GoHomeButton.module.css";

export default function GoHomeButton({ content }){

    return<>
        <Link to="/" className={styles.Button}>{content}</Link>
    </>
}