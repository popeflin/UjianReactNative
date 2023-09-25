import { TouchableOpacity, View } from "react-native";
import { s } from "./Header.style.js";
import { Txt } from "../Txt/Txt.jsx";
import { useNavigation } from "@react-navigation/native";

export function Header({ city }) {
  const nav = useNavigation();
  return (
    <View style={s.container}>

      <TouchableOpacity style={s.back_btn} > //tambahkan fungsi onPress untuk navigasi ke halaman Forecasts
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View style={s.header_txts}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt style={s.subtitle}>7 day forecasts</Txt>
      </View>
    </View>
  );
}
