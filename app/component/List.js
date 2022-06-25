import {Text, View, StyleSheet} from 'react-native';

function List({data}) {
  return data.map((dataPoint, index) => (
    <View style={styles.list} key={dataPoint}>
      <Text style={{color: 'white'}}> #{index + 1}</Text>
      <Text style={styles.listItem}> {dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 24,
    marginVertical: 10,
    backgroundColor: '#5C51A9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
  },
  listItem: {
    flex: 2,
    textAlign: 'center',
    color: 'white',
    paddingHorizontal: 8,
  },
});

export default List;
