import { taskFilters } from '@/assets/static/DummyData'
import Ionicons from '@expo/vector-icons/Ionicons'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { HelloWave } from './hello-wave'
import { Link } from 'expo-router'

export default function HeaderComponent() {
  return (
    <View>
        <View className='flex-row justify-between items-center pb-8'>
            <View className='flex-row items-center gap-3'>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
                    style={styles.profileImg}
                />
                <View>
                    <Text className='text-lg font-bold'>Good Morning, Jensen <HelloWave /></Text>
                    <Text className='text-sm text-gray-500 font-semibold'>Wed-5 Jun, 2025</Text>
                </View>
            </View>
            <View className="bg-white p-2 flex item-center justify-center rounded-lg border border-gray-400">
                <Ionicons name="notifications" size={24} color="charcoal" />
            </View>
        </View>
        <View className='flex-row pb-8 justify-between items-center' style={styles.tasksOverview}>
            <View>
                <Text className='text-white text-xl font-semibold mb-4'>Today's task</Text>
                <View className='flex-row gap-3 justify-between items-center'>
                    <View className='border border-gray-1000' style={styles.tasksTotal}>
                        <Text className='text-center text-xl font-bold text-primary-light'>3/5</Text>
                    </View>
                    <Text className='font-bold text-lg text-primary-dark'>3 Compeleted</Text>
                </View>
            </View>
            <View>
                <Link href='/create' asChild>
                    <TouchableOpacity className='bg-primary-light py-2 px-4 rounded-md'>
                        <Text className='font-bold'>+ Adds Task</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
        <View className='pt-10'>
            <Text className='text-2xl font-bold mb-3'>Task List</Text>
    
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className='pb-8'
            >
                {taskFilters.map((filter) => (
                    <View key={filter.id} className={`px-4 py-2 mr-3 border-2 border-primary-dark ${filter.title == "All" ? 'bg-accent-blue' : 'bg-secondary-background'} rounded-full`}>
                        <Text className={`${filter.title == "All" && 'text-white'}`}>{filter.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    tasksOverview: {
        borderRadius: 8,
        padding: 13,
        backgroundColor: 'royalblue',
    },
    tasksTotal: {
        width: 50,
        height: 50,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#cececeff",
        borderWidth: 2,
    }
})