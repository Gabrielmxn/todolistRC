import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    overflow: 'hidden',
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    backgroundColor: '#262626',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonCheck: {
    width: 24,
    height: 24,
    borderColor: '#4EA8DE',
    borderWidth: 1,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",

  },
  buttonCheckTrue: {
    width: 24,
    height: 24,
    borderColor: '#5E60CE',
    borderWidth: 1,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5E60CE"

  },
  descriptionUni: {
    flex: 1,
    textAlign: 'center',
    textDecorationLine: "line-through",
    color: '#808080'
  },
  descriptionNormal: {
    flex: 1,
    textAlign: 'center',
    
    color: '#F2F2F2'
  }
})