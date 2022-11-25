import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #00008b;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100.125px;
  margin-top: -70px;
`;

export const LoginText = styled.Text`
  font-family: sans-serif;
  text-align: center;
  color: black;
  font-weight: bold;
  position: absolute;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 33px;
  width: 131px;
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Recover = styled.Text`
  color: #FFFFF0;
  width: 100px;
  height: 20px;
  font-family: sans-serif;
  font-size: 12px;
  margin-top: 80px;
  border: 2px solid black;
  text-align: center;
  


`;



export const InputPassword = styled.TextInput`
    height: 31px;
    width: 188px;
    border: 2px solid black ; 
    border-radius: 5px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-bottom: 5px;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
`;

export const Title = styled.Text`
  color: #FFFFF0 ;
  font-weight: 700;
  font-size: 22px;
  margin-top: 42px;
`;

export const FootText = styled.Text`
color: #FFFFF0;
margin-top: 22px;

`;



/*#120a8f*/