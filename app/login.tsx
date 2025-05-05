import { Text } from "react-native";
import { useRouter, Link } from "expo-router";

export default function TelaLogin() {
  return (
    <>
        <Text>Tela Login</Text>
        <Link href={{pathname: "/(drawer)/about", params: {nome:"Fernando"}}}>Ir para o menu drawer</Link>
    </>
  )
}
