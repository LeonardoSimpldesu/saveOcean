import { colors } from "@/styles/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Forms() {
    const [isChecked, setIsChecked] = useState(false)
    const [page, setPage] = useState(1)
    const TOTALOFPAGES = 2

    function handleIncrement() {
        if (TOTALOFPAGES > page) {
            setPage(page + 1)
        } else {
            return router.replace('/certificated')
        }
    }
    function handleDecrement() {
        if (1 === page) {
            return router.replace('/')
        } else {
            setPage(page - 1)
        }
    }
    return (
        <View className="flex-1 pt-10 bg-background">
            <View className="flex-row justify-between items-center px-4">
                <View className="flex-row items-center gap-2">
                    <TouchableOpacity onPress={handleDecrement}>
                        <FontAwesome5 name='arrow-left' size={25} color={colors.primary}/>
                    </TouchableOpacity>
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
            {page === 1 ? <View className="flex-1">
                <View className="flex-1 px-4">
                    <View className="flex-1 justify-center items-center">
                        <Image source={require('@/assets/3d.png')} resizeMode="contain" className="w-48 h-40 justify-center items-center mt-12">
                        </Image>
                        <Text className="font-bold text-2xl mt-10 text-[#2938DF] ">
                            Vamos começar as atividades?
                        </Text>
                    </View>
                </View>
            </View> : <View></View>}
            {page === 2 ? <View className="flex-1 px-4 pt-12 gap-12">
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
            </View> : <View></View>}
            {page === 3 ? <View className="flex-1 px-4 pt-12 gap-12">
                <Text className="font-bold text-lg">Marque abaixo a(s) o(s) poluente(s) do oceano: Justifique sua resposta.</Text>
                <View className="gap-4 flex-row flex-wrap justify-center">
                    <View className="border-2 w-40 h-48 rounded-xl border-[#172283] justify-center items-center">
                        <Image source={require('@/assets/plastic.png')} resizeMode="contain" className="w-20 h-20"></Image>
                        <Text className="text-lg font-bold text-[#172283]">Plástico</Text>
                    </View>
                    <View className="border-2 w-40 h-48 rounded-xl border-[#172283] justify-center items-center">
                        <Image source={require('@/assets/fish.png')} resizeMode="contain" className="w-20 h-20"></Image>
                        <Text className="text-lg font-bold text-[#172283]">Peixes</Text>
                    </View>
                    <View className="border-2 w-40 h-48 rounded-xl border-[#172283] justify-center items-center">
                        <Image source={require('@/assets/sewer.png')} resizeMode="contain" className="w-20 h-20"></Image>
                        <Text className="text-lg font-bold text-[#172283]">Esgotos</Text>
                    </View>
                    <View className="border-2 w-40 h-48 rounded-xl border-[#172283] justify-center items-center">
                        <Image source={require('@/assets/seaweed-task.png')} resizeMode="contain" className="w-20 h-20"></Image>
                        <Text className="text-lg font-bold text-[#172283]">Algas Marinhas</Text>
                    </View>
                </View>
            </View> : <View></View>}

            <TouchableOpacity style={{ width: 140, height: 40, backgroundColor: 'rgba(41, 56, 223, 0.8)', alignItems: 'center', justifyContent: 'center', borderRadius: 1, marginLeft: 'auto', flexDirection: 'row', gap: 8, marginTop: 'auto', marginBottom: 80, marginRight: 18, }} onPress={handleIncrement}>
                <Text className="text-lg text-white">
                    Continuar
                </Text>
                <View>
                    <FontAwesome5 name='arrow-right' size={14} color={'#fff'} />
                </View>
            </TouchableOpacity>
        </View>
    )
}