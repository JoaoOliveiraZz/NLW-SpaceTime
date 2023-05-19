import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-grey-950 items-center justify-center flex-1">
      <Text className="text-zinc-50 font-bold text-5xl">Hello, World!</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
