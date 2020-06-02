import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  rowInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewText: {
    padding: 10,
    width: '25%',
    backgroundColor: '#f8f8f8'
  },
  text: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f8f8f8',
    backgroundColor: '#fff',
    width: '75%',
  },
  viewContainer: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    marginTop: 50,
    borderColor: '#ccc',
  },
});

function Edit(props) {
  const submit = () => {
    console.log('aaa');
  };
  console.log('lempar props', props.route.params.name);
  return (
    <ScrollView>
      <View style={styles.viewContainer}>
        <View style={styles.rowInput}>
          <View style={styles.viewText}>
            <Text style={styles.text}>Full Name</Text>
          </View>
          <View style={styles.input}>
            <TextInput defaultValue={props.route.params.name} />
          </View>
        </View>
        <View style={styles.rowInput}>
          <View style={styles.viewText}>
            <Text style={styles.text}>Identity</Text>
          </View>
          <View style={styles.input}>
            <TextInput defaultValue={props.route.params.identity} />
          </View>
        </View>
        <View style={styles.rowInput}>
          <View style={styles.viewText}>
            <Text style={styles.text}>Phone</Text>
          </View>
          <View style={styles.input}>
            <TextInput defaultValue={props.route.params.phone} />
          </View>
        </View>
        <View style={styles.rowInput}>
          <View style={styles.viewText}>
            <Text style={styles.text}>Email</Text>
          </View>
          <View style={styles.input}>
            <TextInput defaultValue={props.route.params.email} />
          </View>
        </View>
        <View style={styles.rowInput}>
          <View style={styles.viewText}>
            <Text style={styles.text}>Address</Text>
          </View>
          <View style={styles.input}>
            <TextInput defaultValue={props.route.params.address} />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 80}}>
        <Button
          title="Save"
          onPress={submit}
          color={'#f6c143'}
          style={{
            width: '80%',
            backgroundColor: 'green',
            borderRadius: 50,
          }}>
          <Text
            style={{
              textAlign: 'center',
              width: '100%',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Edit Profile
          </Text>
        </Button>
      </View>
    </ScrollView>
  );
}

export default Edit;
