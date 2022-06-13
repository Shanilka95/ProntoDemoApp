import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BasicStyles, {COLORS} from '../styles/BasicStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/components/ListItemStyles';
import moment from 'moment';

interface ListItemProps {
  data: {
    title: string;
    description: string;
    date: string;
    time: string;
  };
  onPress?: () => void;
  onDelete?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({data, onPress, onDelete}) => {
  return (
    <TouchableOpacity
      style={[styles.container, BasicStyles.SHADOW]}
      onPress={onPress}
      onLongPress={onDelete}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.dateTimeContainer}>
        <Icon name="ios-calendar-outline" size={20} color={COLORS.ORANGE} />
        <Text style={styles.dateTimeTxt}>
          {moment(data.time).format('YYYY-MM-DD')}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="ios-time-outline" size={20} color={COLORS.ORANGE} />
        <Text style={styles.dateTimeTxt}>
          {moment(data.time).format('HH:mm a')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
