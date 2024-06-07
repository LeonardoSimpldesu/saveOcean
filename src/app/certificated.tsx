import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Certificated() {
    return (
        <View className="flex-1 pt-10 bg-background px-4">
            <Link href='/' className="flex-row items-center gap-2">
                <FontAwesome5 name='arrow-left' size={25} color={'#2938DF'} />
            </Link>
            <View className="justify-center items-center gap-4">
                <Image source={require('@/assets/pool.png')} resizeMode="contain" className="w-56" style={{ marginHorizontal: 'auto' }} />
                <Text className="text-3xl text-[#5CDF68CC] font-bold">300/300 pts</Text>
                <Text className="text-3xl text-[#2938DF] font-bold">Parabéns, você concluiu!</Text>
                <Text className="text-center text-lg">"Poluição dos oceanos" está concluída, receba seus prêmios</Text>
                <View className="flex-row justify-between w-full">
                    <View className="flex-row h-16 px-4 rounded-lg border-2 border-[#172283] justify-center items-center">
                        <Image source={require('@/assets/seaweed.png')} resizeMode="contain" className="w-8" />
                        <Text className="text-[#2938DFCC] font-bold text-lg"> +5</Text>
                    </View>
                    <View className="flex-row h-16 px-4 rounded-lg border-2 border-[#172283] justify-center items-center gap-2">
                        <View>
                            <FontAwesome5 name="clock" size={14} color={'#172283'} />
                        </View>
                        <Text className="text-[#2938DFCC] font-bold text-lg">14:25:11</Text>
                    </View>
                    <View className="flex-row h-16 px-4 rounded-lg border-2 border-[#5CDF68CC] justify-center items-center">
                        <Text className="text-[#5CDF68CC] font-bold text-lg">300/300 pts</Text>
                    </View>
                </View>
            </View>
            <Link href='/' asChild>
                <TouchableOpacity style={{ width: '100%', height: 60, backgroundColor: '#1E2EDE', alignItems: 'center', justifyContent: 'center', borderRadius: 1, marginLeft: 'auto', flexDirection: 'row', gap: 8, marginTop: 'auto', marginBottom: 20, marginRight: 18, }}>
                    <View>
                        <FontAwesome5 name='medal' size={18} color={'#fff'} />
                    </View>
                    <Text className="text-lg text-white font-bold">
                        Baixe aqui seu certificado
                    </Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}