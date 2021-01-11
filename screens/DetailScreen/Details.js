import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const Details = () => (
  <View style={styles.container}>
    <Text>Details Screen</Text>
  </View>
);

export default Details;
