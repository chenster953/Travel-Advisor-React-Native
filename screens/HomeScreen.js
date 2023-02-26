import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
// Basically useEffect hook but called synchronously
import React, { useLayoutEffect } from 'react';
// Animations library
import * as Animatable from 'react-native-animatable';
// Navigation Hook
import { useNavigation } from '@react-navigation/native';
// index.js in assets folder
import { HeroImage } from '../assets';

const HomeScreen = () => {
  // Initialize navigation variable to navigate between pages
  const navigation = useNavigation();

  useLayoutEffect(() => {
    // Disable header
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    // Centers content below mobile topbar
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga facilis
          ullam architecto corrupti.
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      {/* Image Container */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />

        {/* Go Button */}
          <TouchableOpacity onPress={()=> navigation.navigate('Discover')} className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
            <Animatable.View
              animation={'pulse'}
              easing={'ease-in-out'}
              iterationCount={'infinite'}
              className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
            >
              <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
