import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import TopAppBar from "@/components/navigation/TopAppBar";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SpritesComponent from "@/components/Sprites/SpritesComponent";
import CanvasView from "@/components/Canvas/CanvasView";
import "react-native-gesture-handler";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          marginTop: insets.top,
          paddingBottom: insets.bottom + 44,
          backgroundColor: "#F9B353",
          height: "100%",
          padding: 5,
          gap: 5,
          justifyContent: "space-between",
        }}
      >
        <TopAppBar />
        <CanvasView />
        <SpritesComponent />
      </View>
    </GestureHandlerRootView>
  );
}

// import React, { useState } from "react";
// import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import DraggableFlatList from "react-native-draggable-flatlist";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// const initialData = [
//   { key: "1", label: "Item 1" },
//   { key: "2", label: "Item 2" },
//   { key: "3", label: "Item 3" },
//   { key: "4", label: "Item 4" },
//   { key: "5", label: "Item 5" },
// ];

// export default function App() {
//   const [data, setData] = useState(initialData);

//   const renderItem = ({ item, drag, isActive }) => {
//     return (
//       <TouchableOpacity
//         style={[styles.item, { backgroundColor: isActive ? "blue" : "grey" }]}
//         onLongPress={drag}
//       >
//         <Text style={styles.text}>{item.label}</Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <DraggableFlatList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.key}
//           horizontal
//           onDragEnd={({ data }) => setData(data)}
//         />
//       </View>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     marginTop: 150,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     // alignItems: 'center',
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//   },
//   text: {
//     fontSize: 18,
//     color: "#fff",
//   },
// });
