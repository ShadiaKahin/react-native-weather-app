import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DATA = [
  {
    dt_text: '2022-08-30 12:00:00',
    main: {
      temp_min: 7.55,
      temp_max: 8.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt_text: '2022-08-30 15:00:00',
    main: {
        temp_min: 7.55,
        temp_max: 8.55,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
  {
    dt_text: '2022-08-30 18:00:00',
    main: {
        temp_min: 7.55,
        temp_max: 8.55,
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
  },
];

const Item = (props) => {
  const { dt_text, max, min, condition } = props;
  return (
    <View>
      <Feather name="sun" size={50} color={"white"} />
      <Text>{dt_text}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList data={DATA} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default UpcomingWeather;
