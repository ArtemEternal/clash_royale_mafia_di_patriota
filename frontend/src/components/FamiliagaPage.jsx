import styles from "../styles/FamiliagaPage.module.css";
import ClansList from "./ClansList.jsx";
import {FAMILIAGA_DESCRIPTION} from "./pisanina/textAboutFamiliaga.jsx";
import GoHomeButton from "./GoHomeButton.jsx";

export default function FamiliagaPage(){

    return<>
        <div className={styles.contentContainer}>
            <h1 className={styles.pageDesc}>Наша семья, история, описание:</h1>
            <ClansList/>
            <div className={styles.familiagaDesc}>
                {FAMILIAGA_DESCRIPTION}
            </div>
            <GoHomeButton content={"На главную"}/>
        </div>
    </>
};