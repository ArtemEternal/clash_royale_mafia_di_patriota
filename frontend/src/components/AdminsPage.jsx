import styles from "../styles/AdminsPage.module.css";
import GoBackButton from "./GoHomeButton.jsx";
import hui from "@/assets/miner.jpg";
//import hui from "../../public/test_bg.jpg";

const members = [
    {nickname: "Михал Палыч", role: "Дон Vertical ll", tg: "Секретно", photo: "../../public/mihalpalich.png"},
    {nickname: "Пихал Малыч", role: "Дон моржка", tg: "Секретно", photo: "../../public/pihalmalich.png"},
    {nickname: "Патриот", role: "Синий король", tg: "Секретно", photo: "../../public/patriot.jpg"}, 
    {nickname: "m3", role: "Подручный", tg: "Секретно", photo: "../../public/m3.jpg"}, 
    {nickname: "Aleksandr Morzhokko", role: "Основатель моржка", tg: "", photo: "../../public/royal_giant.jpg"}, 
    {nickname: "Amir Sosini", role: "Сооснователь моржка", tg: "", photo: "../../public/giant.jpg"},
    {nickname: "SK-13 | STALIN", role: "Консильери", tg: "Секретно", photo: "../../public/stalin.jpg"},
    {nickname: "Nesquii", role: "Капо", tg: "Секретно", photo: "../../public/robber.jpg"}, 
    {nickname: "Бродяга", role: "Капо", tg: "Секретно", photo: "../../public/goldengiantskeleton.jpg"},  
    {nickname: "Ff", role: "Капо", tg: "", photo: "../../public/wallpaper.jpg"},
    {nickname: "Qrime", role: "Легенда", tg: "", photo: "../../public/maga.jpg"}, 
    {nickname: "Podsosensky", role: "Легенда", tg: "", photo: "../../public/hog.jpg"},
    {nickname: "Стумадеутумадей", role: "Легенда", tg: "", photo: "../../public/lumberjack.jpg"},
    {nickname: "Jug Toxic", role: "Герой моржка", tg: "", photo: "../../public/bowler.jpg"},
    {nickname: "MaKsOn", role: "Геморой моржка", tg: "", photo: "/assets/miner.jpg"},  
    {nickname: "JUGGER", role: "Солдат", tg: "Секретно", photo: "../../public/jugger.jpg"}, 
    {nickname: "JUG ALFA MASTURBIST", role: "Солдат", tg: "", photo: "../../public/monk.jpg"},
    {nickname: "FL Artik-Ais", role: "Солдат", tg: "", photo: "../../public/goblin.jpg"}, 
    {nickname: "Jug People", role: "Солдат второй категории", tg: "", photo: "../../public/people.jpg"}, 
    {nickname: "Jug Kasta", role: "Jug (samaya nizshaya) Kasta", tg: "", photo: "../../public/chicken.jpg"},
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
                        {/*<img srcSet={member.photo}/>*/}
                        <img srcSet={hui}/>
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