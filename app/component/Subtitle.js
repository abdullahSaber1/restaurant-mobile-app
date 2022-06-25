import {Children} from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#DD6C2F',
    marginHorizontal: 24,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 14,
    color: '#051360',
  },
});
export default Subtitle;
