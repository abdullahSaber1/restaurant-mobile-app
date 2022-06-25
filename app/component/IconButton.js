import {Ionicons} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

function IconButton({color, icon, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </TouchableOpacity>
  );
}

export default IconButton;
