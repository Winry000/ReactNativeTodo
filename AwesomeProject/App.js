import React from 'react';
import { 
  AppRegistry,
  StyleSheet, 
  Text, 
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Note from './app/components/Note';

export default class App extends React.Component {
  state = {
    noteArray: [{'date': 'textdate','note': 'testnote1'}],
    noteText: '',
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      console.log("val" + val + "key" + key);
      return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)} />
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> - TodoList - </Text>
        </View>
        <ScrollView style={styles.scollContainer}>
          {notes}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TextInput style={styles.textInput} 
            onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText}
            placeholder='>input' placeholderTextColor='white'/>
        </View>
      </View>
    );
  }
  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({'date': d.getFullYear() + '/' + d.getMonth() + '/' + d.getDate(), 'note': this.state.noteText});
      this.setState({noteArray: this.state.noteArray})
      this.setState({noteText: ''});
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#BB1924",
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0
  },
  addButton: {
    backgroundColor: "#AFBADC",
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -45,
    zIndex: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#f092a5',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  }

});
