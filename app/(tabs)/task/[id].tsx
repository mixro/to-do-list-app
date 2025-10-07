import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TaskDetails() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-5 pt-10 mb-10">
          <Text className='text-3xl font-bold text-charcoal-color'>Exercise routine</Text>
          <View className='pt-10 flex-row items-center gap-3'>
            <View className='bg-green-600 flex-row items-center justify-center' style={styles.addIcon}>
              <MaterialIcons name="task" size={38} color="white" />
            </View>
            <View className='flex-column flex-1'>
              <Text className='text-xl mb-3 font-semibold text-accent-blue'>Title</Text>
              <Text className='text-xl font-medium text-charcoal-color'>Exercise routine</Text>
            </View>
          </View>

          <View className='flex-row gap-5 pt-10'>
            <View className='flex-1'>
              <Text className='text-lg mb-3 font-semibold text-accent-blue'>From</Text>
              <View className='flex-row gap-2 items-center '>
                <AntDesign name="clock-circle" size={18} color="green" />
                <Text className='text-lg font-medium text-charcoal-color'>Oct 8, 8.30PM</Text>
              </View>
            </View>
            <View className='flex-1'>
              <Text className='text-lg mb-3 font-semibold text-accent-blue'>To</Text>
              <View className='flex-row gap-2 items-center '>
                <AntDesign name="clock-circle" size={18} color="green" />                
                <Text className='text-lg font-medium text-charcoal-color'>Oct 8, 10.30PM</Text>
              </View>
            </View>
          </View>
          <View className='flex-row gap-5 pt-10'>
            <View className='flex-1'>
              <Text className='text-lg mb-3 font-semibold text-accent-blue'>Duration</Text>
              <View className='flex-row gap-2 items-center '>
                <Entypo name="stopwatch" size={24} color="green" />
                <Text className='text-lg font-medium text-charcoal-color'>2 hrs</Text>
              </View>
            </View>
            <View className='flex-1'>
              <Text className='text-lg mb-3 font-semibold text-accent-blue'>Created</Text>
              <View className='flex-row gap-2 items-center '>    
                <Ionicons name="create" size={24} color="green" />            
                <Text className='text-lg font-medium text-charcoal-color'>1 day ago</Text>
              </View>
            </View>
          </View>

          <View>
            <View className='pt-7'>
              <Text className='text-lg mb-3 font-semibold text-accent-blue'>Category</Text>
              <Text className='text-lg font-medium text-charcoal-color'>Health</Text>
            </View>
            <View className='pt-7'>
              <Text className='text-lg mb-3 font-semibold text-accent-blue'>Description</Text>
              <Text className='text-lg font-medium text-charcoal-color'>This is task for doing regular body exercises for almost 2 hours per day.</Text>
            </View>
            
            <View className='pt-10 flex-1'>
              <Link href={`/edit/${id}`} asChild>
                <TouchableOpacity className='bg-accent-blue flex-row items-center justify-center p-4 rounded-full'>
                  <Text className='text-xl text-white font-semibold'>Edit Task</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfdff',
  },
  addIcon: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
