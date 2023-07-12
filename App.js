import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View className="flex-1 bg-[#dbdadd]">
      <View className="mt-20 mx-5">
        <Text className="text-2xl font-bold">Today's tasks</Text>
        <View className="mt-8">
            {/* This is the task */}
            <Task />
            <Task />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
