import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Persons = (props) => {
  return (
    <TouchableOpacity onPress={() => props.pressHandler(props.person.key)}>
      <Text style={styles.person}>{props.person.name}</Text>
    </TouchableOpacity>
  );
};

export default Persons;

const styles = StyleSheet.create({
  person: {
    padding: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'orangered',
    borderRadius: 20,
    borderStyle: 'dashed',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
