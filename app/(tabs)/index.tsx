import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Hello BANGLADESH!</Text>
      <TouchableOpacity onPress={() => toggleDarkMode()}>
        <Text>Toggle Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  content: {
    fontSize: 16,
    color: "red",
  },
  link: {
    fontSize: 22,
  },
});
