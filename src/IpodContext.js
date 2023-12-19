import { createContext, useContext, useState, useEffect } from "react";
import zingtouch from "zingtouch";
const IpodContext = createContext();

export const useValue = () => {
    var value = useContext(IpodContext);
    return value;
}

export const IpodContextProvider = (prop) => {
    const [activeCount, setActiveCount] = useState(0);
    const [defaultOption, setDefaultOption] = useState("Songs");
    const [settingVisble, setSettingVisible] = useState(true);
    const settingOption = ["Songs", "Albums", "Artists", "Playlists"];
    // ...

    useEffect(() => {
        const ipodContainer = document.getElementById('ipod');

        if (ipodContainer) {
            const region = new zingtouch.Region(ipodContainer);

            function handleRotate(event) {
                var { events, distanceFromOrigin } = event.detail;
                var currentID = events[0].originalEvent.target.id;
                console.log(event.detail, currentID, distanceFromOrigin);
                if (currentID === 'menu' || currentID === 'forwardPlay' || currentID === 'playStop' || currentID === "backwordPlay") {
                    if (distanceFromOrigin > 15) {
                        setActiveCount((prevState) => (prevState + 1) % 4);
                        setDefaultOption(settingOption[setActiveCount]);
                    } else if (distanceFromOrigin < -15) {
                        setActiveCount((prevState) => (prevState - 1 + 4) % 4);
                        setDefaultOption(settingOption[setActiveCount]);
                    }
                }
            }

            // Bind rotation event to the ipodContainer
            region.bind(ipodContainer, 'rotate', handleRotate, { draggable: false });

            // Cleanup: Unbind the event when the component is unmounted
            return () => {
                region.unbind(ipodContainer);
            };
        }
    }, []);

    // ...
    const dispalyupdate = () => {
        console.log("setActiveCount " + setActiveCount + " settingOption " + settingOption);
        setSettingVisible(false);
    }
    const checkSetting = () => {
        if (!settingVisble) {
            setSettingVisible(true);
        }
    }
    return (
        <IpodContext.Provider value={{ activeCount, settingVisble, settingOption, dispalyupdate, checkSetting }}>
            {prop.children}
        </IpodContext.Provider>
    )
}