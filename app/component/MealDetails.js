import {Text, View, StyleSheet} from 'react-native';

function MealsDetails({
  duration,
  complexity,
  affordability,
  detailsTextStyle,
  style,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, detailsTextStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItem, detailsTextStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, detailsTextStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
    padding: 4,
  },
});

export default MealsDetails;
