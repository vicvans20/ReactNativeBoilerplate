import { StyleSheet } from 'react-native';
import spaceStyles from './spaceStyles';

const styles = StyleSheet.create({

  // ===================================== 
  // ============= Layout ================
  // =====================================
  container: { flex: 1 },
  growContainer: { flexGrow: 1 },

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },

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

  // =====================================  
  // ============= Colors ================
  // =====================================

  bgWhite: { backgroundColor: "#fff" },
  bgBlack: { backgroundColor: "#000" },
  bgClear: { backgroundColor: "transparent" },
  bgRed: { backgroundColor: "#FF0000" },

  white: { color: "#fff" },
  black: { color: "#000" },

  // ====================================  
  // ============= Text =================
  // ====================================

  fs20: { fontSize: 20 },
  fs18: { fontSize: 18, },
  fs16: { fontSize: 16, },
  fs14: { fontSize: 14, },
  fs12: { fontSize: 12, },
  fs10: { fontSize: 10, },

  italic: { fontStyle: "italic" },
  bold: { fontWeight: "bold" },

  // ====================================  
  // ============= MISC =================
  // ====================================

  roundEdges: { borderRadius: 5 },

  divider: {
    height: 1, 
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.05)",
  },

  // ====================================  
  // ============= Space ================
  // ====================================
  ...spaceStyles,
  
});

export default styles;