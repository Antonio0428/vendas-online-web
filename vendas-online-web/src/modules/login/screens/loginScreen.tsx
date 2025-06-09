import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimetedContainer, LogoImage } from "../styles/LoginScreen.style";

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./loja1.jpg"/>
      <ContainerLogin>
        <LogoImage src="./ncn-rf.png"/>
        <LimetedContainer/>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
}

export default LoginScreen;