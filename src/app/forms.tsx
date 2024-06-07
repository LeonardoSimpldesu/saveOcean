import { FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Forms() {
    const [isChecked, setIsChecked] = useState(false)
    const [page, setPage] = useState(4)
    const TOTALOFPAGES = 4
    return (
        <View className="flex-1 pt-10 bg-background">
            <View className="flex-row justify-between items-center px-4">
                <View className="flex-row items-center gap-2">
                    <View>
                        <FontAwesome5 name='arrow-left' size={25} />
                    </View>
                    <Text> 1 / 3</Text>
                </View>
                <View className="flex-row items-center justify-end flex-1 gap-4">
                    <View>
                        <FontAwesome5 name='music' size={20} />
                    </View>
                    <View >
                        <FontAwesome5 name='clock' size={20} />
                    </View>
                    <Text className="text-lg">14:05:01</Text>
                </View>
            </View>
            <View className="w-full px-4 pt-8">
                <View className="rounded-full w-full h-6 border-4 border-[#2938DFCC]">
                    <View className="rounded-full w-[40%] h-full bg-[#2938DFCC]">

                    </View>
                </View>
                <Text className="text-lg text-[#5CDF68CC]" style={{ marginLeft: 'auto' }}>100/300</Text>
            </View>
            <View className="flex-1 px-4 pt-12 gap-12">
                <Text className="font-bold text-lg">Marque as palavras corretas de acordo com o que você aprendeu com os conteúdos passados:</Text>
                <View className="gap-4">
                    <View className="flex-row gap-2">
                        <Checkbox value={isChecked} onValueChange={setIsChecked} color={isChecked ? '#4630EB' : undefined}></Checkbox>
                        <Text className="font-medium">O oceano é poluido por esgotos mal localizados</Text>
                    </View>
                    <View className="flex-row gap-2">
                        <Checkbox value={isChecked} onValueChange={setIsChecked} color={isChecked ? '#4630EB' : undefined}></Checkbox>
                        <Text className="font-medium">O oceano é poluido por esgotos mal localizados</Text>
                    </View>
                    <View className="flex-row gap-2">
                        <Checkbox value={isChecked} onValueChange={setIsChecked} color={isChecked ? '#4630EB' : undefined}></Checkbox>
                        <Text className="font-medium">O oceano é poluido por esgotos mal localizados</Text>
                    </View>
                    <View className="flex-row gap-2">
                        <Checkbox value={isChecked} onValueChange={setIsChecked} color={isChecked ? '#4630EB' : undefined}></Checkbox>
                        <Text className="font-medium">O oceano é poluido por esgotos mal localizados</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ width: 140, height: 40, backgroundColor: 'rgba(41, 56, 223, 0.8)', alignItems: 'center', justifyContent: 'center', borderRadius: 1, marginLeft: 'auto', flexDirection: 'row', gap: 8, marginTop: 'auto', marginBottom: 80, marginRight: 18, }}>
                <Text className="text-lg text-white">
                    Começar
                </Text>
                <View>
                    <FontAwesome5 name='arrow-right' size={14} color={'#fff'} />
                </View>
            </TouchableOpacity>
        </View>
    )
}