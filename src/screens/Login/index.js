import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import {  Picker } from "react-native";
import { Container, Logo, Title, InputPassword, Recover, LoginButton, LoginText,FootText } from "./styles";
import { View } from "react-native-web";

export default function Login() {
  
  const [user, setUser,] = useState({
    password: '',
    select:'',
  });
  const navigation = useNavigation();
  
  function screenPessoasProximas() {
    navigation.navigate("PessoasProximas");
  }

  return (
    <Container>
      
      
    
      <Logo source={logo}/>      
      <Title>Telegram</Title>
      
      <View 
      style={{ width: "190px",
          
      }}>
      <Picker
        select={user.select}
        style={{ color:"gray", 
        backgroundColor:"#00008b",
        border: "2px solid black",
        borderRadius: "5px",
        boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
        paddingLeft: "5px",
        fontFamily: "sans-serif",
         marginBottom: "10px",
         marginTop:"15px",
         height:"35px"
         
          
       }}
        onValueChange={(itemValue, itemIndex) => setSelect(itemValue)}
      >
        <Picker.Item label="Escolha seu país" value="Escolha o seu pais" />
        <Picker.Item label="Brasil" value="Brasil" />
        <Picker.Item label="Estados Unidos" value="Estados Unidos" />
        <Picker.Item label="Índia" value="Índia" />
        <Picker.Item label="Portugal" value="Portugal" />
      </Picker>
    </View>
      
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'+55  Número de telefone'}
        placeholderTextColor={'gray'}
      />

 
      <LoginButton>
        <LoginText>ENTRAR</LoginText>
      </LoginButton>
     
      <FootText>Bem-vindo ao cliente web oficial do Telegram.</FootText>
      <FootText>Saiba mais</FootText>

      <TouchableOpacity onPress={screenPessoasProximas}> 
        <Recover>Próxima Página</Recover>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </Container>
  );
}

/*

<InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={'Escolha seu país'}
        placeholderTextColor={'gray'}
      />
*/
