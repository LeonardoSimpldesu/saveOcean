import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Link } from 'expo-router'
import { NavBar } from '@/components/nav-bar'

export default function Home() {
    const image = { uri: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }

    return (
        <View className='flex-1'>
            <View className="flex-1 bg-background pt-20">
                <View className='px-2'>
                    <View className='w-full mb-6 px-4 flex-row justify-between items-center'>
                        <View>
                            <Text className='text-xl font-bold'>Boa noite, USER</Text>
                            <Text className='font-medium text-gray-700'>Continue de onde parou os estudos.</Text>
                        </View>
                        <Link href='/contents'>
                            <FontAwesome name='angle-right' size={30} />
                        </Link>
                    </View>
                    <FlatList
                        data={['Conteudo 1', 'Conteudo 2', 'Conteudo 3', 'Conteudo 4']}
                        keyExtractor={item => item}
                        renderItem={({ item }) => {
                            return (
                                <ImageBackground source={image} resizeMode="cover" className="h-64 w-48 bg-black justify-center items-center mx-2">
                                    <Link href='/task' className='flex-1 w-full'>
                                        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            {/* <FontAwesome5 name="lock" size={20} color={colors.primary} /> */}
                                            <Text className="font-bold text-xl text-white">{item}</Text>
                                        </View>
                                    </Link>
                                </ImageBackground>
                            )
                        }}
                        horizontal
                    />
                </View>
                <View className='border border-gray-300 rounded-xl mx-4 overflow-hidden'>
                    <View className='flex-row justify-between items-center p-4'>
                        <Text className='text-lg font-bold'>Ranking</Text>
                        <View className='flex-row items-center gap-4'>
                            <View className='flex-row items-center bg-primary/80 rounded-full px-3 py-1'>
                                <View>
                                    <FontAwesome5 name='trophy' color={colors.secondary} />
                                </View>
                                <Text className='font-bold text-white ml-2'>1°</Text>
                            </View>
                            <View className='flex-row bg-primary rounded-full px-4 py-1'>
                                <Text className='font-bold text-white'>50</Text>
                                <Text className='text-white'> pontos</Text>
                            </View>

                        </View>
                    </View>
                    <View className='px-6 py-8 bg-primary/80 flex-row gap-8 items-center'>
                        <View className='justify-center items-center bg-primary size-16 rounded-full'>
                            <FontAwesome name='star' color={colors.background} size={35} />
                        </View>
                        <Text className='flex-1 text-white font-medium'>Falta pouco para você participar da Liga! Continue lendo e atinja a pontuação mínima</Text>
                    </View>
                </View>
                <View className='border border-gray-300 rounded-xl mx-4 overflow-hidden'>
                    <View className='flex-row justify-between items-center p-4'>
                        <Text className='text-lg font-bold'>Oceano</Text>
                        <View className='flex-row items-center gap-4'>
                            <Link href='/store' className='flex-row items-center bg-primary/80 rounded-full px-3 py-1'>
                                <View>
                                    <FontAwesome5 name='coins' color={colors.secondary} />
                                </View>
                                <Text className='text-white font-bold ml-2'> 500 </Text>
                            </Link>
                            <View className='flex-row bg-primary rounded-full px-4 py-1'>
                                {/* <View className='justify-center items-center bg-primary/60 '>
                            <FontAwesome name='star' color={colors.primary} />
                        </View> */}
                                <Text className='font-bold text-white'>5 /12 algas</Text>
                            </View>
                        </View>
                    </View>
                    <View className='px-6 py-8 bg-primary/80 flex-row gap-8 items-center justify-between'>
                        <Link href='/ocean'>
                            <Feather name="plus-circle" size={50} color={colors.secondary} />
                        </Link>
                        <Link href='/ocean'>
                            <Feather name="plus-circle" size={50} color={colors.secondary} />
                        </Link>
                        <Link href='/ocean'>
                            <Feather name="plus-circle" size={50} color={colors.secondary} />
                        </Link>
                        <Link href='/ocean'>
                            <Feather name="plus-circle" size={50} color={colors.secondary} />
                        </Link>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
            >
                <Text className="text-green-500 text-base font-bold uppercase">
                    FODASE O EXEMPLO
                </Text>
            </TouchableOpacity>
            <NavBar />
        </View>
    )
}