import { Link } from "react-router-dom";
import styles from "../styles/ButtonModule.module.css";
import styles_as_button from "../styles/Button.module.css";

export default function ButtonModule(){

    return<>
        <div className={styles.contentContainer}>
            <Link title="la famiglia" className={styles_as_button.Button} to="/famiglia">Семья</Link>
            <Link title="capi" className={styles_as_button.Button} to="/head">Шишки команды</Link>
            <Link title="don" className={styles_as_button.Button} to="/owner">Босс</Link>
            <Link title="codice di onore" className={styles_as_button.Button} to="/rules">Кодекс чести</Link>
            <Link title="proprietà" className={styles_as_button.Button} to="/domain">Владения</Link>
        </div>
    </>
}