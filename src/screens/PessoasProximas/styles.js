import styled from "styled-components/native";




export const Container = styled.View`
    flex: 1;
    background-color: #27408B;
    align-items: center;
    justify-content: center;
`;

export const GPS = styled.Image`
width: 200px;
height: 200px;
`;

export const Title = styled.Text`
  color: #FFFFF0 ;
  font-weight: 700;
  font-size: 22px;



`;

export const PrincipalText = styled.Text`
color: #FFFFF0 ;
font-size: 20px;
margin: 4px;

position: absolute;
width: 262px;
height: 215px;
left: 75px;
top: 371px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;

line-height: 17px;
text-align: center;
margin-bottom: 100px;

`;

export const EnterButton = styled.TouchableOpacity `

  margin-bottom:200px;
  margin-top: 300px;
  widht: 200px;
  height: 75px;
`;

export const NextText = styled.Text`
font-weight: 500px;
width: 100px;
height: 20px;
font-family: sans-serif;
font-size: 12px;
border: 2px solid black;
border-radius:25px;
text-align: center;

`;


