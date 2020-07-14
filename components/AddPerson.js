import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddPerson = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add New Person"
        placeholderTextColor="darkgrey"
        onChangeText={props.setPerson}
        value={props.person}
      />
      <Button
        onPress={props.submitHandler}
        title="ADD"
        color="orange"
      />
    </View>
  );
};

export default AddPerson;

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontSize: 15,
  },
});
