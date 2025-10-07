import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
const { height } = Dimensions.get('window');

export default function CreateScreen() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 px-5 pt-10 mb-10">
            <Text className='text-3xl font-bold text-charcoal-color'>Create Task</Text>
            <View className='pt-10 flex-row items-center gap-3'>
              <View className='bg-ligth-blue flex-row items-center justify-center' style={styles.addIcon}>
                <MaterialIcons name="add-task" size={30} color="white" />
              </View>
              <View className='flex-column flex-1'>
                <Text className='text-xl mb-3 font-medium text-charcoal-color'>Title</Text>
                <TextInput
                  placeholder="Enter the title"
                  value={title}
                  onChangeText={setTitle}
                  style={styles.input}
                  placeholderTextColor="#494949ff"
                  className='font-medium'
                />
              </View>
            </View>

            <View className='flex-row gap-5 pt-10'>
              <View className='flex-1'>
                <Text className='text-lg mb-3 font-medium text-charcoal-color'>From</Text>
                <View className='flex-row gap-2 items-center 'style={styles.input}>
                  <AntDesign name="clock-circle" size={18} color="black" />
                  <TextInput
                    placeholder="Oct 8, 8.30PM"
                    placeholderTextColor="#494949ff"
                    className='font-medium mt-1'
                  />
                </View>
              </View>
              <View className='flex-1'>
                <Text className='text-lg mb-3 font-medium text-charcoal-color'>To</Text>
                <View className='flex-row gap-2 items-center 'style={styles.input}>
                  <AntDesign name="clock-circle" size={18} color="black" />
                  <TextInput
                    placeholder="Oct 8, 10.30PM"
                    placeholderTextColor="#494949ff"
                    className='font-medium mt-1'
                  />
                </View>
              </View>
            </View>

            <View>
              <View className='pt-7'>
                <Text className='text-lg mb-3 font-medium text-charcoal-color'>Category</Text>
                <TextInput
                  placeholder="Enter category"
                  placeholderTextColor="#494949ff"
                  style={styles.input}
                  className='py-4 font-medium'
                />
              </View>
              <View className='pt-7'>
                <Text className='text-lg mb-3 font-medium text-charcoal-color'>Description</Text>
                <TextInput
                  className='py-4 font-medium'
                  value={desc}
                  onChangeText={setDesc}
                  placeholder="Enter your description..."
                  placeholderTextColor="#494949ff"
                  multiline
                  numberOfLines={5} 
                  style={styles.textArea}
                  textAlignVertical="top"
                />
              </View>
              
              <View className='pt-10'>
                <TouchableOpacity className='bg-accent-blue flex-row items-center justify-center p-4 rounded-full'>
                  <Text className='text-xl text-white font-semibold'>Create Task</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdfdfdff',
    minHeight: height
  },
  wrapper: {
    flex: 1
  },
  input: {
    backgroundColor: "#e6e6e6ff",
    borderRadius: 5,
    paddingLeft: 10,
  },
  addIcon: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  textArea: {
    backgroundColor: "#e6e6e6ff",
    borderRadius: 5,
    padding: 10,
    minHeight: 120,
  },
})