import { TasksList } from '@/assets/static/DummyData'
import { View, Text, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { formatTimeRange } from '@/utils/Utils';

export default function TaskCard({ item }: { item: (typeof TasksList)[0] }) {
  return (
    <View className='p-2 rounded-lg mb-6' style={styles.taskWrapper}> 
        <View className='flex-row items-center justify-between pb-5'>
            <Text className='font-bold text-lg'>{item.title}</Text>
            <View className='flex-row items-center gap-2'>
                <View 
                    className={`w-2 h-2 mt-1 ${item.status == "pending" ? 'bg-yellow-500' : (item.status == "overdue" ? 'bg-red-500' :'bg-green-500')} rounded-full`}
                ></View>
                <Text className='text-lg'>{item.status}</Text>
            </View>
        </View>
        <View>
            <View className='flex-row items-start justify-between'>
                <View>
                    <View className='flex-row items-center gap-3'>
                        <AntDesign name="clock-circle" size={18} color="black" />
                        <Text>{formatTimeRange(item.startTime, item.endTime)}</Text>
                    </View>

                    <Text className={`font-semibold text-md mt-3 ${item.status == "pending" ? 'text-yellow-500' : (item.status == "overdue" ? 'text-red-500' :'text-green-500')}`}>{item.category}</Text>
                </View>
                <View>
                    <Feather name="star" size={20} color="black" />
                </View>
            </View>
            <View className={`h-2 ${item.status == "pending" ? 'bg-yellow-500' : (item.status == "overdue" ? 'bg-red-500' :'bg-green-500')} rounded-full my-3`}></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    taskWrapper: {
        borderColor: "#cacacaff",
        borderWidth: 1.8,
        backgroundColor: "#fcfbffff",
    }
})