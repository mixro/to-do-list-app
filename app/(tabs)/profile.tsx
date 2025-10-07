import { View, Text, FlatList, StyleSheet, ScrollView, Image } from 'react-native';

import ProfileDetails from '@/components/ProfileDetails';

export default function ProfileScreen() {
  return (
    <>      
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View className='bg-accent-blue px-5 flex-column items-center justify-center' style={styles.profileHeader}>
            <Image
                source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
                style={styles.profileImg}
            />
            <Text className='text-2xl font-semibold text-white mb-1.4'>Jensen Christopher</Text>
            <Text className='text-md font-medium text-primary-dark'>UX Designer</Text>
          </View>

          <View className='px-3 py-9 border-b border-primary-gray flex-row justify-center items-center gap-20'>
            <View className='flex-column justify-center items-center'>
              <Text className='text-4xl text-charcoal-color font-semibold mb-1'>12</Text>
              <Text className='text-gray-700'>Completed</Text>
            </View>
            <View className='flex-column justify-center items-center'>
              <Text className='text-4xl text-charcoal-color font-semibold mb-1'>7</Text>
              <Text className='text-gray-700'>Pending</Text>
            </View>
            <View className='flex-column justify-center items-center'>
              <Text className='text-4xl text-charcoal-color font-semibold mb-1'>3</Text>
              <Text className='text-gray-700'>Overdue</Text>
            </View>
          </View>

          <ProfileDetails />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f1ffff',
  },
  profileHeader: {
    paddingTop: 130,
    paddingBottom: 10
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 10
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,    
  },
});
