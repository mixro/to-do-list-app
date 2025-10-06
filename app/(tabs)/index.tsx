import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { taskFilters, TasksList } from '@/assets/static/DummyData';
import TaskCard from '@/components/TaskCard';
import HeaderComponent from '@/components/HeaderComponent';

export default function HomeScreen() {
  
  return (
    <SafeAreaView className="flex-1" style={styles.container}>
      <FlatList
        data={TasksList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard item={item} />}
        contentContainerStyle={{padding: 15, paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
        
        ListHeaderComponent={
          <>
            <HeaderComponent />
          </>
        }
      />
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
});
