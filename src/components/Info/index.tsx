import { Text, View } from "react-native";
import { styles } from "./styles";

interface InfoProps{
  title: string
  count: number
}

export function Info({title, count}: InfoProps){
  const colors = title === 'Criadas' ? 'titleBlue' : 'titlePurple'
  return(
    <View style={styles.container}>
      <Text style={styles[colors]}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  )
}