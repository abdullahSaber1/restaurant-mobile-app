import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

function CategoryGridTitle({title, color, onPress}) {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) =>
          pressed ? [styles.buttunContainer, styles.pressed] : styles.buttunContainer
        }
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={[styles.title]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    height: 150,
    borderRadius: 8,
    overflow: Platform.select({android: 'hidden', ios: 'visible'}),
  },
  buttunContainer: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoryGridTitle;
