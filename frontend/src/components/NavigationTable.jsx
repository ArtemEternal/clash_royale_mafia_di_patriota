import ButtonModule from "./ButtonModule.jsx";
import styles from "../styles/NavigationTable.module.css";

export default function NavigationTable(){

    return<>
        <div className={styles.tableContainer}>
            <h1 title="La mafia di Patriota">Мафия Патриота</h1>
            <h5>Пишите боссу в telegram и ваша реклама окажется тут</h5>
            <ButtonModule/>
            <h6 title="Russian don raufff gundone">© 2007 yung mafia business</h6>
        </div>
    </>
}   