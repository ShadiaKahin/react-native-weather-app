import react from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({weatherData}) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  console.log(weatherData, "$$$$$$$$$")
const {main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData
const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={[wrapper], {backgroundColor:weatherType[weatherCondition].backgroundColor }}>
      <View style={container}>
        <Feather name={weaherType[weatherCondition].icon} size={100} color="white" />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>`Feels like ${feels_like}`</Text>
        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <View style={bodyWrapper}>
        <RowText
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLest: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
