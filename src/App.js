import { IpodDisplay } from "./Components/Display/IpodDisplay";
import { IpodButton } from "./Components/SettingButton/IpodButton";
import { IpodContextProvider } from "./IpodContext";


function App() {

  return (
    <>
      <IpodContextProvider>
        <IpodDisplay />
        <IpodButton />
      </IpodContextProvider>
    </>
  );
}

export default App;
