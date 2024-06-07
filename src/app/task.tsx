import { colors } from "@/styles/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Task() {
    const [page, setPage] = useState(1)
    const TOTALOFPAGES = 2

    const image = { uri: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }

    function handleIncrement() {
        if (TOTALOFPAGES > page) {
            setPage(page + 1)
        } else {
            return router.replace('/forms')
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
                        <FontAwesome5 name='arrow-left' size={25} color={colors.primary} />
                    </TouchableOpacity>
                    <Text> 1 / 3</Text>
                </View>
                <View className="flex-row items-center justify-end flex-1 gap-4">
                    <View>
                        <FontAwesome5 name='music' size={20} color={colors.primary} />
                    </View>
                    <View >
                        <FontAwesome5 name='clock' size={20} color={colors.primary} />
                    </View>
                    <Text className="text-lg">14:05:01</Text>
                </View>
            </View>
            {page === 1 ?
                <View className="flex-1  px-4">
                    <Image source={image} resizeMode="cover" className="h-64 w-full bg-black justify-center items-center mt-12">
                    </Image>
                    <Text className="text-2xl font-bold pt-8" style={{ marginHorizontal: 'auto' }}>Titulo</Text>

                    <Text className="font-medium mt-4 text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </Text>
                </View> : <View></View>}
            {page === 2 ? <View className="flex-1">
                <View className="flex-1 px-4">
                    <Text className="font-bold text-xl mt-10">
                        There are many variations of passages of Lorem Ipsum?
                    </Text>
                    <Text className="font-medium mt-4">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </Text>

                    <Image source={require('@/assets/graph.png')} resizeMode="cover" className="h-72 w-full bg-black justify-center items-center mt-12">
                    </Image>
                </View>
            </View> : <View></View>}

            <TouchableOpacity onPress={handleIncrement} style={{ width: 140, height: 40, backgroundColor: 'rgba(41, 56, 223, 0.8)', alignItems: 'center', justifyContent: 'center', borderRadius: 1, marginLeft: 'auto', flexDirection: 'row', gap: 8, marginTop: 'auto', marginBottom: 80, marginRight: 12 }}>
                <Text className="text-lg text-white">
                    Próxima
                </Text>
                <View>
                    <FontAwesome5 name='arrow-right' size={14} color={'#fff'} />
                </View>
            </TouchableOpacity>
        </View>
    )
}