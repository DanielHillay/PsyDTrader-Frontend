import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen() {
    return (
      <View style={styles.dashView}>
      </View>
    );
}

const styles = StyleSheet.create({
  dashView: {
    flex: 1,
    backgroundColor: '#101213',
  }
})