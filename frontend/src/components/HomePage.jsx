import styles from "../styles/HomePage.module.css";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import NavigationTable from "./NavigationTable.jsx";

export default function HomePage(){

    return<>
        <div className={styles.contentContainer}>
            <ThemeSwitcher/>
            <NavigationTable/>
        </div>
    </>
} ;