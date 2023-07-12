import { View, Text, TouchableOpacity } from "react-native";

const Task = () => {
  return (
    <View className="flex-row items-center justify-between bg-white p-4 rounded-xl mb-5 border">
        <View className="flex-row items-center flex-wrap border">
            <View className="w-6 h-6 bg-[#4fb1ea] opacity-40  mr-4 rounded-md border"></View>
            <Text className="max-w-[80%] text-base font-semibold border">Task</Text>
        </View>
        <View className="w-3 h-3 border-[#4fb1ea] border-2 rounded-md"></View>
    </View>
  );
}

export default Task;
