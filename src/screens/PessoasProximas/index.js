import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import gps from "../../../assets/gps.png";
import { TouchableOpacity } from "react-native";

import{Container,Title,PrincipalText,EnterButton,NextText, GPS} from "./styles";

export default function Login() {

  const navigation = useNavigation();
  
  function Login() {
    navigation.navigate("Login");
  }

  return (
    <Container >

      
      <Title >Pessoas Próximas</Title>
      <GPS source={gps}/>      

      <PrincipalText>Adicione rapidamente pessoas próximas que estejam visualizando esta seção e descubra grupos locais.

        Por favor,ative os serviços de localização para ativar este recurso.</PrincipalText>
    
        <EnterButton onPress={Login}>
          
          <NextText>ATIVAR</NextText>

        </EnterButton>
      
        <StatusBar style="auto" />
    </Container>
  );
}


