import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {

    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)

    useEffect(() => {
        console.log(`Count changed`)
        return () => { console.log('cleanup function')}
    }, [count])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Count: ${count}`}</Text>
            <Button
                color={'red'}
                title="increase the count"
                onPress={() => setCount(count + 1)} />
            <Button
                color={'green'}
                title="decrease the count"
                onPress={() => setCount(count - 1)}
            />
            <Button
                color={'red'}
                title="increase the count"
                onPress={() => setNewCount(count + 1)} />
            <Button
                color={'green'}
                title="decrease the count"
                onPress={() => setNewCount(count - 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})

export default Counter;