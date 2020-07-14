import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from './components/Header';
import Persons from './components/Persons';
import AddPerson from './components/AddPerson';

const App = () => {
  const [persons, setPersons] = useState([
    { key: '1', name: 'Jack' },
    { key: '2', name: 'Zlatan' },
    { key: '3', name: 'Theo' },
    { key: '4', name: 'Ante' },
  ]);

  const [person, setPerson] = useState('');

  const pressHandler = (key) => {
    setPersons((prevPersons) => prevPersons.filter((p) => p.key !== key));
  };

  const submitHandler = () => {
    if (person.length > 3) {
      setPersons((prevPersons) => [
        ...prevPersons,
        {
          name: person,
          key: Math.floor(Math.random() * 1000).toString(),
        },
      ]);
      setPerson('');
      Keyboard.dismiss();
    } else {
      alert('The Name must have more than 3 Characters!');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddPerson
            submitHandler={submitHandler}
            setPerson={setPerson}
            person={person}
          />
          <View style={styles.items}>
            <FlatList
              data={persons}
              renderItem={({ item }) => (
                <Persons person={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  items: {
    marginTop: 20,
  },
});

export default App;
