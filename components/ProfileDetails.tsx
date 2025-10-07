import { View, Text } from 'react-native'

export default function ProfileDetails() {
  return (
    <View className='pt-3'>
        <View className='p-5 border-b border-primary-gray'>
            <Text className='mb-6 text-center text-xl font-bold text-charcoal-color'>Task Overview & Stats</Text>
            <View className='flex-row flex-wrap'>
                <View className='w-1/2 mb-6'>
                    <Text className='mb-1 text-accent-blue font-medium text-lg'>Tasks created</Text>
                    <Text className='text-xl font-medium'>22</Text>
                </View>
                <View className='w-1/2 mb-6'>
                    <Text className='mb-1 text-accent-blue font-medium text-lg'>Tasks completed</Text>
                    <Text className='text-xl font-medium'>12/22</Text>
                </View>
                <View className='w-1/2 mb-6'>
                    <Text className='mb-1 text-accent-blue font-medium text-lg'>Completion %</Text>
                    <Text className='text-xl font-medium'>54.5</Text>
                </View>
                <View className='w-1/2 mb-6'>
                    <Text className='mb-1 text-accent-blue font-medium text-lg'>Productive day/time</Text>
                    <Text className='text-xl font-medium'>9AM-2PM</Text>
                </View>
            </View>
        </View>

        <View className='py-10 px-5 border-b border-primary-gray'>
            <Text className='mb-6 text-center text-xl font-bold text-charcoal-color'>User Information</Text>
            <View className='flex-row flex-wrap'>
                <View className='w-1/2 mb-6'>
                    <Text className='mb-1 text-accent-blue font-medium text-lg'>Username</Text>
                    <Text className='text-md font-medium'>Jensen</Text>
                </View>
                <View className='w-1/2 mb-6'>
                    <Text className='mb-1 text-accent-blue font-medium text-lg'>Phone</Text>
                    <Text className='text-md font-medium'>+(255) 34938943</Text>
                </View>
                <View className='w-1/2 mb-6'>
                    <Text className='mb-1 text-accent-blue font-medium text-lg'>Email</Text>
                    <Text className='text-md font-medium'>jensen@gmail.com</Text>
                </View>
                <View className='w-1/2 mb-6'>
                    <Text className='mb-1 text-accent-blue font-medium text-lg'>Joined</Text>
                    <Text className='text-md font-medium'>2 months ago</Text>
                </View>
            </View>
        </View>
    </View>
  )
}