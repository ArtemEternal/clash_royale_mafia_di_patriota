import styles from "../styles/AdminsPage.module.css";
import GoBackButton from "./GoHomeButton.jsx";

const members = [
    {nickname: "Михал Палыч", role: "Дон Vertical ll", tg: "Секретно", photo: "../../public/fotki/mihalpalich.png"},
    {nickname: "Пихал Малыч", role: "Дон моржка", tg: "Секретно", photo: "../../public/fotki/pihalmalich.png"},
    {nickname: "Патриот", role: "Синий король", tg: "Секретно", photo: "../../public/fotki/patriot.jpg"}, 
    {nickname: "m3", role: "Подручный", tg: "Секретно", photo: "../../public/fotki/m3.jpg"}, 
    {nickname: "Aleksandr Morzhokko", role: "Основатель моржка", tg: "", photo: "../../public/fotki/royal_giant.jpg"}, 
    {nickname: "Amir Sosini", role: "Сооснователь моржка", tg: "", photo: "../../public/fotki/giant.jpg"},
    {nickname: "SK-13 | STALIN", role: "Консильери", tg: "Секретно", photo: "../../public/fotki/stalin.jpg"},
    {nickname: "Nesquii", role: "Капо", tg: "Секретно", photo: "../../public/fotki/robber.jpg"}, 
    {nickname: "Бродяга", role: "Капо", tg: "Секретно", photo: "../../public/fotki/goldengiantskeleton.jpg"},  
    {nickname: "Ff", role: "Капо", tg: "", photo: "../../public/fotki/wallpaper.jpg"},
    {nickname: "Qrime", role: "Легенда", tg: "", photo: "../../public/fotki/maga.jpg"}, 
    {nickname: "Podsosensky", role: "Легенда", tg: "", photo: "../../public/fotki/hog.jpg"},
    {nickname: "Стумадеутумадей", role: "Легенда", tg: "", photo: "../../public/fotki/lumberjack.jpg"},
    {nickname: "Jug Toxic", role: "Герой моржка", tg: "", photo: "../../public/fotki/bowler.jpg"},
    {nickname: "MaKsOn", role: "Геморой моржка", tg: "", photo: "../../public/fotki/miner.jpg"},  
    {nickname: "JUGGER", role: "Солдат", tg: "Секретно", photo: "../../public/fotki/jugger.jpg"}, 
    {nickname: "JUG ALFA MASTURBIST", role: "Солдат", tg: "", photo: "../../public/fotki/monk.jpg"},
    {nickname: "FL Artik-Ais", role: "Солдат", tg: "", photo: "../../public/fotki/goblin.jpg"}, 
    {nickname: "Jug People", role: "Солдат второй категории", tg: "", photo: "../../public/fotki/people.jpg"}, 
    {nickname: "Jug Kasta", role: "Jug (samaya nizshaya) Kasta", tg: "", photo: "../../public/fotki/chicken.jpg"},
];

export default function AdminsPage(){

    return<div className={styles.mainContainer}>
        <div className={styles.pageDesc}>
            <h1>
                Уважаемые люди нашей семьи:
            </h1>
        </div>
        <div className={styles.contentContainer}>
            {members.map(member => (
                <div className={styles.memberCard} key={member.nickname}>
                    <div className={styles.memberPhotoContainer}>
                        <img src={member.photo}/>
                    </div>
                    <div className={styles.memberAboutContainer}>
                        <h4>{member.nickname}</h4>
                        <h5>Роль: {member.role}</h5>
                    </div>
                </div>
            ))}
            <GoBackButton className={styles.goHomeButton} content={"На главную"}/>
        </div>
    </div>
};