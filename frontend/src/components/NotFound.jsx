import styles from "../styles/NotFoundPage.module.css";
import GoHomeButton from "./GoHomeButton.jsx";

export default function NotFound(){

    return<>
        <div className={styles.contentContainer}>
            <h1>404</h1>
            <p className={styles.Caption}>Page Not Found</p>
            <div className={styles.back}>
                <GoHomeButton content={"home"}/>
            </div>
        </div>
    </>
} ;