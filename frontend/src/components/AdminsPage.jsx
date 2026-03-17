import styles from "../styles/AdminsPage.module.css";
import GoBackButton from "./GoHomeButton.jsx";

const members = [
    {nickname: "Михал Палыч", role: "Дон Vertical ll", tg: "Секретно", photo: "/mihalpalich.png"},
    {nickname: "Пихал Малыч", role: "Дон моржка", tg: "Секретно", photo: "/pihalmalich.png"},
    {nickname: "Патриот", role: "Синий король", tg: "Секретно", photo: "/patriot.jpg"}, 
    {nickname: "m3", role: "Подручный", tg: "Секретно", photo: "/m3.jpg"}, 
    {nickname: "Aleksandr Morzhokko", role: "Основатель моржка", tg: "", photo: "/royal_giant.jpg"}, 
    {nickname: "Amir Sosini", role: "Сооснователь моржка", tg: "", photo: "/giant.jpg"},
    {nickname: "SK-13 | STALIN", role: "Консильери", tg: "Секретно", photo: "/stalin.jpg"},
    {nickname: "Nesquii", role: "Капо", tg: "Секретно", photo: "/robber.jpg"}, 
    {nickname: "Бродяга", role: "Капо", tg: "Секретно", photo: "/goldengiantskeleton.jpg"},  
    {nickname: "Ff", role: "Капо", tg: "", photo: "/wallpaper.jpg"},
    {nickname: "Qrime", role: "Легенда", tg: "", photo: "/maga.jpg"}, 
    {nickname: "Podsosensky", role: "Легенда", tg: "", photo: "/hog.jpg"},
    {nickname: "Стумадеутумадей", role: "Легенда", tg: "", photo: "/lumberjack.jpg"},
    {nickname: "Jug Toxic", role: "Герой моржка", tg: "", photo: "/bowler.jpg"},
    {nickname: "MaKsOn", role: "Геморой моржка", tg: "", photo: "/miner.jpg"},  
    {nickname: "JUGGER", role: "Солдат", tg: "Секретно", photo: "/jugger.jpg"}, 
    {nickname: "JUG ALFA MASTURBIST", role: "Солдат", tg: "", photo: "/monk.jpg"},
    {nickname: "FL Artik-Ais", role: "Солдат", tg: "", photo: "/goblin.jpg"}, 
    {nickname: "Jug People", role: "Солдат второй категории", tg: "", photo: "/people.jpg"}, 
    {nickname: "Jug Kasta", role: "Jug (samaya nizshaya) Kasta", tg: "", photo: "/chicken.jpg"},
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
                        <img srcSet={member.photo}/>
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