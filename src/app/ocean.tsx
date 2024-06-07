import { FlatList, ImageBackground, Text, View } from 'react-native'
import { Store } from '@/components/store'
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Link } from 'expo-router'

export default function Ocean() {
    return (
        <View className="flex-1 w-full pt-10">
            <View className="flex-row justify-between px-6 mb-4">
                <Link href='/'>
                    <Feather name="arrow-left" size={40} />
                </Link>
                <View className="flex-row items-center gap-4">
                    <FontAwesome5 name="coins" size={20} color={colors.primary} />
                    <Text className="font-bold text-lg">350</Text>
                </View>
            </View>
            <ImageBackground resizeMode='stretch' source={require('@/assets/deepsea.png')} className="w-full flex-1 flex-row gap-y-12 py-12 justify-center flex-wrap rotate-90">
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
            </ImageBackground>
        </View>
    )
}