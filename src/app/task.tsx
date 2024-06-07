import { api } from "@/api/api";
import { colors } from "@/styles/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ITask {
    userId: number
    contentTask: {
        title: string
        text: string
    }
    questions: {
        question: string
        options: {
            value: string
        }[]
    }[]
}

export default function Task() {
    const [task, setTask] = useState<ITask>();

    async function getTaskData() {
        const { data } = await api.get("/Task/contentTask");
        if (data) {
            setTask(data);
        }
    }

    useEffect(() => {
        getTaskData();
    }, []);

    const image = { uri: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }

    function handleChangePage() {
        return router.replace('/forms')
    }

    return (
        <View className="flex-1 pt-10 bg-background">
            <View className="flex-row justify-between items-center px-4">
                <View className="flex-row items-center gap-2">
                    <TouchableOpacity>
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
            <View className="flex-1  px-4">
                <Image source={image} resizeMode="cover" className="h-64 w-full bg-black justify-center items-center mt-12">
                </Image>
                <Text className="text-2xl font-bold pt-8" style={{ marginHorizontal: 'auto' }}>{task?.contentTask.title}</Text>

                <Text className="font-medium mt-4 text-center">{task?.contentTask.text}
                </Text>
            </View>
            <TouchableOpacity onPress={handleChangePage} style={{ width: 140, height: 40, backgroundColor: 'rgba(41, 56, 223, 0.8)', alignItems: 'center', justifyContent: 'center', borderRadius: 1, marginLeft: 'auto', flexDirection: 'row', gap: 8, marginTop: 'auto', marginBottom: 40, marginRight: 12 }}>
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