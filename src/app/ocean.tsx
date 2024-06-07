import { ImageBackground, Text, View } from 'react-native'
import { Feather, FontAwesome5 } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Link } from 'expo-router'

export default function Ocean() {
    return (
        <View className="flex-1 w-full pt-10">
            <View className="flex-row justify-between px-6 mb-4 items-center">
                <Link href='/'>
                    <Feather name="arrow-left" size={40} />
                </Link>
                <Text className='text-xl font-bold'>Seu Oceano</Text>
                <View className='justify-center'>
                    <Link href='/store'>
                        <View className='flex-row items-center bg-primary/80 rounded-full px-3 py-1'>
                            <FontAwesome5 name='coins' color={colors.secondary} />
                            <Text className='text-white font-bold ml-2'> 500 </Text>
                        </View>
                    </Link>
                </View>
            </View>
            <ImageBackground resizeMode='stretch' source={require('@/assets/deepsea.png')} className="w-full flex-1 flex-row gap-y-12 py-12 justify-center flex-wrap rotate-90">
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
                <Link href={'/store'} asChild>
                    <Feather name="plus-circle" size={50} color={colors.secondary} className="w-full max-w-[30%] text-center" />
                </Link>
            </ImageBackground>
        </View>
    )
}