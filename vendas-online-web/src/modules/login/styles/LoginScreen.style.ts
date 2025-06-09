import styled from "styled-components";

export const ContainerLoginScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;

`
export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  `;

export const LogoImage = styled.img`
  width: 25%;
  `;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  width: 100%;
  padding: 22px;
  max-width: 646px;
  height: 100vh;
  z-index: 2;
`
export const LimetedContainer = styled.div`
  width: 100%;
  max-width: 498px;
  background-color: brown;
  height: 100px;
`