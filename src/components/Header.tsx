import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string
  showCancelOperation?: boolean
}

export default function Header({ title, showCancelOperation = true }: HeaderProps) {
  const navigation = useNavigation();

  function handleOrphanagesMapNavigation() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name='arrow-left' size={24} color='#15b6d6' />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      { showCancelOperation ? (
        <BorderlessButton onPress={handleOrphanagesMapNavigation}>
          <Feather name='x' size={24} color='#ff669d' />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 44,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
  },
});
