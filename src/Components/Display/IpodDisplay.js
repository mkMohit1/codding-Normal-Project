import { useValue } from "../../IpodContext";
import style from "./IpodDisplay.module.css";

export function IpodDisplay() {
    const { settingVisble, activeCount } = useValue();
    return (
        <div className={style.ipodDisplayContainer}>
            <div className={style.mainDisplay}>
                <div className={settingVisble ? `${style.leftDispay}` : `${style.leftnone}`}>
                    <h3 className={style.head}>iPod.js</h3>
                    <div className={`${style.displayBtnContaniner}`}>
                        <button className={activeCount === 0 ? `${style.active}` : ""}>Songs<span>&gt;</span></button>
                        <button className={activeCount === 1 ? `${style.active}` : ""}>Albums<span>&gt;</span></button>
                        <button className={activeCount === 2 ? `${style.active}` : ""}>Artists<span>&gt;</span></button>
                        <button className={activeCount === 3 ? `${style.active}` : ""}>Playlists<span>&gt;</span></button>
                    </div>
                </div>
                <div className={style.rightDisplay}>
                    <p>Hi</p>
                </div>
            </div>
        </div>
    );
}