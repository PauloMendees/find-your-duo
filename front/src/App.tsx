import { Logo } from "./assets/Logos";
import { AppContainer } from "./components/ui/AppContainer";
import { H1 } from "./components/ui/Texts/H1";
import { GradientText } from "./components/ui/Texts/GradientText";
import { AddAnnouncement } from "./components/Home/AddAnnouncement";

function App() {
  return (
    <AppContainer>
      <Logo />
      <H1 textAlign="center" >{`Encontre seu `} <GradientText>{`duo`}</GradientText> {` perfeito`}</H1>
      <AddAnnouncement />
    </AppContainer>
  );
}

export default App;
