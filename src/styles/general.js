import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // ===================================== 
  // ============= Layout ================
  // =====================================
  container: { flex: 1 },
  growContainer: { flexGrow: 1 },

  flexRow: { flexDirection: 'row' },
  flexColumn: { flexDirection: 'column' }, // Default on Yoga Layout

  flexWrap: { flexWrap: "wrap" },

  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },

  alignItemsStart: { alignItems: 'flex-start' },
  alignItemsEnd: { alignItems: 'flex-end' },
  alignItemsCenter: { alignItems: 'center' },
  alignItemsStretch: { alignItems: 'stretch' },

  alignSelfStart: { alignSelf: 'flex-start' },
  alignSelfEnd: { alignSelf: 'flex-end' },
  alignSelfCenter: { alignSelf: 'center' },
  alignSelfStretch: { alignSelf: 'stretch' },

  // wrapReverse: { flexWrap: "wrap-reverse" },


  // ====================================  
  // ============= Space ================
  // ====================================

  m0: { margin: 0 },
  mt0: { marginTop: 0 },
  mr0: { marginRight: 0 },
  mb0: { marginBottom: 0 },
  ml0: { marginLeft: 0 },
  mv0: { marginVertical: 0 },
  mh0: { marginHorizontal: 0 },

  m5: { margin: 5 },
  mt5: { marginTop: 5 },
  mr5: { marginRight: 5 },
  mb5: { marginBottom: 5 },
  ml5: { marginLeft: 5 },
  mv5: { marginVertical: 5 },
  mh5: { marginHorizontal: 5 },

  m10: { margin: 10 },
  mt10: { marginTop: 10 },
  mr10: { marginRight: 10 },
  mb10: { marginBottom: 10 },
  ml10: { marginLeft: 10 },
  mv10: { marginVertical: 10 },
  mh10: { marginHorizontal: 10 },

  m15: { margin: 15 },
  mt15: { marginTop: 15 },
  mr15: { marginRight: 15 },
  mb15: { marginBottom: 15 },
  ml15: { marginLeft: 15 },
  mv15: { marginVertical: 15 },
  mh15: { marginHorizontal: 15 },

  m20: { margin: 20 },
  mt20: { marginTop: 20 },
  mr20: { marginRight: 20 },
  mb20: { marginBottom: 20 },
  ml20: { marginLeft: 20 },
  mv20: { marginVertical: 20 },
  mh20: { marginHorizontal: 20 },

  mt30: { marginTop: 30 },
  mr30: { marginRight: 30 },
  mb30: { marginBottom: 30 },
  ml30: { marginLeft: 30 },
  mv30: { marginVertical: 30 },
  mh30: { marginHorizontal: 30 },

  mt40: { marginTop: 40 },
  mr40: { marginRight: 40 },
  mb40: { marginBottom: 40 },
  ml40: { marginLeft: 40 },
  mv40: { marginVertical: 40 },
  mh40: { marginHorizontal: 40 },

  p0: { padding: 0 },
  pt0: { paddingTop: 0 },
  pr0: { paddingRight: 0 },
  pb0: { paddingBottom: 0 },
  pl0: { paddingLeft: 0 },

  p10: { padding: 10 },
  pt10: { paddingTop: 10 },
  pr10: { paddingRight: 10 },
  pb10: { paddingBottom: 10 },
  pl10: { paddingLeft: 10 },
  pv10: { paddingVertical: 10 },
  ph10: { paddingHorizontal: 10 },

  p15: { padding: 15 },
  pt15: { paddingTop: 15 },
  pr15: { paddingRight: 15 },
  pb15: { paddingBottom: 15 },
  pl15: { paddingLeft: 15 },
  pv15: { paddingVertical: 15 },
  ph15: { paddingHorizontal: 15 },

  p20: { padding: 20 },
  pt20: { paddingTop: 20 },
  pr20: { paddingRight: 20 },
  pb20: { paddingBottom: 20 },
  pl20: { paddingLeft: 20 },
  pv20: { paddingVertical: 20 },
  ph20: { paddingHorizontal: 20 },

  p30: { padding: 30 },
  pt30: { paddingTop: 30 },
  pr30: { paddingRight: 30 },
  pb30: { paddingBottom: 30 },
  pl30: { paddingLeft: 30 },
  pv30: { paddingVertical: 30 },
  ph30: { paddingHorizontal: 30 },

  p40: { padding: 40 },
  pt40: { paddingTop: 40 },
  pr40: { paddingRight: 40 },
  pb40: { paddingBottom: 40 },
  pl40: { paddingLeft: 40 },
  pv40: { paddingVertical: 40 },
  ph40: { paddingHorizontal: 40 },

  p50: { padding: 50 },
  pt50: { paddingTop: 50 },
  pr50: { paddingRight: 50 },
  pb50: { paddingBottom: 50 },
  pl50: { paddingLeft: 50 },
  pv50: { paddingVertical: 50 },
  ph50: { paddingHorizontal: 50 },

  // =====================================  
  // ============= Colors ================
  // =====================================

  bgWhite: { backgroundColor: "#fff" },
  bgBlack: { backgroundColor: "#000" },
  bgClear: { backgroundColor: "transparent" },

  // ====================================  
  // ============= Text =================
  // ====================================

  h0: { fontSize: 32 },
  h1: { fontSize: 28 },
  h2: { fontSize: 24 },
  h3: { fontSize: 20 },
  h4: { fontSize: 16 },
  h4_5: { fontSize: 14 },
  h5: { fontSize: 12 },
  h6: { fontSize: 8 },

  textCenter: { textAlign: "center" },
  textItalic: { fontStyle: "italic" },
  textBold: { fontWeight: "bold" },

  // ====================================  
  // ============= MISC =================
  // ====================================
  separator: {
    height: 1,
    width: 100,
    backgroundColor: '#fff'
  },

  pRelative: { position: "relative" },
  hidden: { display: "none" },

  respImage: {
    width: null,
    height: null,
    flex: 1,
  },

  roundEdges: {
    borderRadius: 5
  },

  z1: {
    zIndex: 1
  },

  z99: {
    zIndex: 99,
  },
  z100: {
    zIndex: 100
  },
});

export default styles;