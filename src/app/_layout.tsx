import '@/styles/global.css'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter'
import { Loading } from '@/components/loading'

export default function Layout() {
    const [isFontLoaded] = useFonts({
        Inter_400Regular, Inter_500Medium, Inter_700Bold
    })

    return (
        <>
            <StatusBar />
            {isFontLoaded ? <Slot /> : <Loading />}
        </>
    )
}