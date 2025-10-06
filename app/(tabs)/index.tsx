import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1 p-5' style={styles.container}>
      {/*--- top view ---*/}
      <View className='flex-row pb-8 justify-between items-center'>
        <View className='flex-row items-center gap-3'>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
            style={styles.profileImg}
          />
          <View>
            <Text className='text-lg font-bold'>Good Morning, Jensen 👋</Text>
            <Text className='text-sm text-gray-500 font-semibold'>Wed-5 Jun, 2025</Text>
          </View>
        </View>
        <View className="bg-white p-2 flex item-center justify-center rounded-lg border border-gray-400">
          <Ionicons name="notifications" size={24} color="black" />
        </View>
      </View>
      <View style={styles.tasksOverview}>
        <View>
          <Text className='text-white text-xl font-semibold'>Today's task</Text>
          <Text>3 Compeleted</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>+ Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
      {}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f1ffff',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,    
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  tasksOverview: {
    borderRadius: 8,
    padding: 13,
    backgroundColor: 'royalblue',
  }
});
