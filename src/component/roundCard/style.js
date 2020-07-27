import Colors, { height, width } from "../../config/Theme";

export const container = {
  borderRadius: height,
  height: height*.07,
  backgroundColor: Colors.White,
  width: height*.07,
  overflow: "hidden",
  marginLeft:10,
  alignSelf:"center",
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 24,
};