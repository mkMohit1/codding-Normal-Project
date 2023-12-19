import { faForward, faPause, faPlay, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./IpodButton.module.css";
import { useValue } from '../../IpodContext';
export function IpodButton() {
    const { checkSetting, dispalyupdate } = useValue();
    return (
        <div className={style.ipodContainer}>
            <div className={style.ipod_innerContainer} id="ipod">
                <div>
                    <button id="menu" className={`${style.top} ${style.btn}`} onClick={checkSetting}>Menu</button>
                </div>
                <div>
                    <button id="forwardPlay" className={`${style.right} ${style.btn}`}><FontAwesomeIcon icon={faForward} /></button>
                </div>
                <div>
                    {/* Use separate play and pause icons */}
                    <button id="playStop" className={`${style.bottom} ${style.btn}`} ><FontAwesomeIcon icon={faPlay} /><FontAwesomeIcon icon={faPause} /></button>
                </div>
                <div>
                    <button id="backwordPlay" className={`${style.left} ${style.btn}`}><FontAwesomeIcon icon={faBackward} /></button>
                </div>
                <div><button id="selectMenu" className={style.cente_box} onClick={dispalyupdate}></button></div>
            </div>
        </div>
    );
}