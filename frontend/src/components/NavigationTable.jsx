import ButtonModule from "./ButtonModule.jsx";
import styles from "../styles/NavigationTable.module.css";

export default function NavigationTable(){

    return<>
        <div className={styles.tableContainer}>
            <h1 title="La mafia di Patriota">Мафия Патриота</h1>
            <h5>Вы могли стать кодером как и я, но вы выбрали Clash Royale..</h5>
            <ButtonModule/>
            <h6 title="Russian don raufff gundone">© 2007 patriot dev cr</h6>
        </div>
    </>
}   