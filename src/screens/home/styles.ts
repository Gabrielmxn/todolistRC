import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  main: {
    padding: 24,
  },
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1,
   
  },
  formInput: {
    flexDirection: 'row',
    
    alignItems: 'stretch',
    gap: 4,
    top: -50
  },
  inputText: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#fff",
    padding: 8,
    borderRadius: 6
  },
  buttonAdd: {
    padding: 8,
    width: 54,
    height: 54,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  containerInfoAndList: {
    gap: 20,
  },
  listTask: {
    gap: 16
  }
})