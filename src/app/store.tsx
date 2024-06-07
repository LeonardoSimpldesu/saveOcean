import { FlatList, Text, View } from 'react-native'
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Link } from 'expo-router'
import { useState, useEffect } from "react";
import { api } from "../api/api.js";

interface IEspecies {
    userId: number
    seres: {
        name: string
        description: string
        preco: number
    }[]
}

export default function Store() {
    const [especies, setEspecies] = useState<IEspecies>();

    async function getHomeData() {
        const { data } = await api.get("/Aquario/allEspecies");
        if (data) {
            setEspecies(data);
        }
    }

    useEffect(() => {
        getHomeData();
    }, []);


    return (
        <View className="flex-1 w-full pt-10 bg-background">
            <View className="flex-row justify-between px-6 mb-4">
                <Link href='/'>
                    <Feather name="arrow-left" size={40} />
                </Link>
                <View className="flex-row items-center gap-4">
                    <FontAwesome5 name="coins" size={20} color={colors.primary} />
                    <Text className="font-bold text-lg">350</Text>
                </View>
            </View>
            <Text className="font-bold text-3xl mx-4">Fauna Aquática</Text>
            <FlatList
                data={especies?.seres}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View className="flex-row gap-4 w-full p-4 ">
                            <View className="w-full max-w-max flex-row justify-between items-center">
                                <View className="flex-row gap-6">
                                    <Ionicons name="fish" size={50} />
                                    <View>
                                        <Text className="text-xl font-bold">{item.name}</Text>
                                        <Text className="w-64 h-10 overflow-hidden">{item.description}</Text>
                                    </View>
                                </View>
                                <View className='flex-row bg-primary rounded-full px-4 py-1'>
                                    <Text className='font-bold text-white'>{item.preco}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />

        </View>
    )
}