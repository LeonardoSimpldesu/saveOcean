import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View } from "react-native";

export function NavBar() {
    return (
        <View className="flex-row justify-center items-center bg-primary/80 py-5 absolute bottom-0">
            <View className="flex-1 justify-center items-center">
                <Link href='/'>
                    <FontAwesome5 name='home' size={25} color={'#fff'} />
                </Link>
            </View>
            <View className="flex-1 justify-center items-center">
                <Link href='/ocean'>
                    <FontAwesome5 name='water' size={25} color={'#fff'} />
                </Link>
            </View>
            <View className="flex-1 justify-center items-center">
                <Link href='/contents'>
                    <FontAwesome5 name='medal' size={25} color={'#fff'} />
                </Link>
            </View>
            <View className="flex-1 justify-center items-center">
                <Link href='/'>
                    <FontAwesome5 name='user-alt' size={25} color={'#fff'} />
                </Link>
            </View>
        </View>
    )
}