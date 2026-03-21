import styles from "../styles/AdminsPage.module.css";
import GoBackButton from "./GoHomeButton.jsx";

const members = [
    {nickname: "Михал Палыч", role: "Дон Vertical ll", tg: "Секретно", photo: "/mihalpalich.webp"},
    {nickname: "Пихал Малыч", role: "Дон моржка", tg: "Секретно", photo: "/pihalmalich.webp"},
    {nickname: "Патриот", role: "Синий король", tg: "Секретно", photo: "/patriot.webp"}, 
    {nickname: "m3", role: "Палач", tg: "Секретно", photo: "/m3.webp"}, 
    {nickname: "Aleksandr Morzhokko", role: "Основатель моржка", tg: "", photo: "/royal_giant.webp"}, 
    {nickname: "Amir Sosini", role: "Сооснователь моржка", tg: "", photo: "/giant.webp"},
    {nickname: "SK-13 | STALIN", role: "Консильери", tg: "Секретно", photo: "/stalin.webp"},
    {nickname: "Nesquii", role: "Капо", tg: "Секретно", photo: "/robber.webp"}, 
    {nickname: "Бродяга", role: "Капо", tg: "Секретно", photo: "/goldengiantskeleton.webp"},  
    {nickname: "Ff", role: "Капо", tg: "", photo: "/wallpaper.webp"},
    {nickname: "Qrime", role: "Легенда", tg: "", photo: "/maga.webp"}, 
    {nickname: "Podsosensky", role: "Легенда", tg: "", photo: "/hog.webp"},
    {nickname: "Стумадеутумадей", role: "Легенда", tg: "", photo: "/lumberjack.webp"},
    {nickname: "Jug Toxic", role: "Герой моржка", tg: "", photo: "/bowler.webp"},
    {nickname: "MaKsOn", role: "Геморой моржка", tg: "", photo: "/miner.webp"},  
    {nickname: "JUGGER", role: "Солдат", tg: "Секретно", photo: "/jugger.webp"}, 
    {nickname: "JUG ALFA MASTURBIST", role: "Солдат", tg: "", photo: "/monk.webp"},
    {nickname: "FL Artik-Ais", role: "Солдат", tg: "", photo: "/goblin.webp"}, 
    {nickname: "Jug People", role: "Солдат второй категории", tg: "", photo: "/people.webp"}, 
    {nickname: "Jug Kasta", role: "Jug (samaya nizshaya) Kasta", tg: "", photo: "https://cdn.jsdelivr.net/gh/ArtemEternal/cdn-music/chicken.webp"},
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