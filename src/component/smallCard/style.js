import Colors, { height, width } from "./../../config/Theme";

export const container = {
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 10,
  elevation: 1,
  marginHorizontal: 10,
  marginTop: 15,
  backgroundColor: Colors.White,
  left:10
};
export const containerFav = {
  ...container,
  width: width - width * .57,
  height: width - width * .40
};
export const imageView = {
  height: "100%",
  width: "100%",
};
export const imageViewFav = {
  height: "100%",
  width: "100%",
};

export const imageViewContainerFav = {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
};

export const detailFav = {
  justifyContent: 'space-around',
  paddingHorizontal: 10,
  paddingTop: 5,
  paddingBottom: 10,
  width: '100%',
};
export const detailTitleFav = {
  fontSize: 18,
};
export const detailSubTitleFav=  {
  fontSize: 12,
  color: Colors.superDarkGrey
};
export const rating= {
  flexDirection: "row",
  alignContent: "flex-start"
}
