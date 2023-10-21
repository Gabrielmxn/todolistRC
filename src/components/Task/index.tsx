import { Text, TouchableOpacity, View } from "react-native";
import { Trash, Check } from "phosphor-react-native";
import { styles } from "./styles";

interface TaskProps {
  id: string
  description: string
  isConcluid: boolean
  removeItem: (id: string) => void
  checkBox: (id: string) => void
}
export function Task({id, description, isConcluid, removeItem, checkBox}: TaskProps){
  const textConcluid = isConcluid ? 'descriptionUni' : 'descriptionNormal'
  return(
    <View style={styles.container}>
      {isConcluid 
      ? 
        <TouchableOpacity style={styles.buttonCheckTrue} onPress={() => checkBox(id)}>
          <Check color="#fff" size={15}/>
        </TouchableOpacity>
      :
        <TouchableOpacity style={styles.buttonCheck} onPress={() => checkBox(id)}></TouchableOpacity>
        
        }
      <Text style={styles[textConcluid]}>{description}</Text>
      <TouchableOpacity onPress={() => removeItem(id)}>
        <Trash color="#808080"/>
      </TouchableOpacity>
    </View>
  )
}