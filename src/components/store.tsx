import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function Store() {
    return (
        <View className="flex-1 w-full">
            <View></View>
            <Text className="font-bold text-3xl mx-4">Peixes</Text>
            <View className="flex-row gap-4 w-full p-4 ">
                <View className="w-full max-w-max flex-row justify-between items-center">
                    <View className="flex-row gap-6">
                        <Ionicons name="fish" size={50} />
                        <View>
                            <Text className="text-xl font-bold">Peixe Boi</Text>
                            <Text>Descrição</Text>
                        </View>
                    </View>
                    <Text className="">300</Text>
                </View>
            </View>
        </View>
    )
}