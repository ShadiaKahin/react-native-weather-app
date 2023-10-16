import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Tabs from './src/components/Tabs';
// import * as Location from  'expo-location';
// import { WEATHER_API_KEY } from '@env';
import { useGetWeather } from './src/hooks/useGetWeather';


const App = () => {
  const [loading, weather, error] = useGetWeather()
  console.log(weather, '££££££££££')
  // returning null, find out whyyyyyyyyyy

  if(weather && weather.list) {

    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  

};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});
export default App;
