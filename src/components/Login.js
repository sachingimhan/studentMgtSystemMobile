import React, {createRef, useRef, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {
  Text,
  TextInput,
  Button,
  Container,
  Header,
  Body,
  Left,
  Content,
  Form,
  Item,
  Input,
  Icon,
  Title,
  Picker,
} from 'native-base';
import KeyboardListener from 'react-native-keyboard-listener';
import LoginServices from '../services/LoginServices';
import Toast from 'react-native-toast-message';

const Login = ({navigation}) => {
  const keyboardVerticalOffset = Platform.OS === 'android' ? 65 : 0;
  let ref_password = useRef();
  let ref_username = useRef();
  let ref_toast = useRef();
  let [userId, setUserId] = useState('');
  let [userPass, setUserPass] = useState('');
  let [grade, setGrade] = useState('');
  return (
    <Container>
      <Header style={{alignContent: 'center', alignItems: 'center'}}>
        <Title style={{fontSize: 25, fontWeight: 'bold'}}>Educo Englsih Academy</Title>
      </Header>
      <Image
        style={{maxWidth: 200, maxHeight: 200, margin:30, alignSelf: 'center'}}
        source={require('../resources/images/logo-color.png')}
      />
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Form style={{alignItems: 'center', margin: 20,backgroundColor:'#fff'}}>
          <Item style={styles.item}>
            <Input
              onSubmitEditing={() => {
                ref_password._root.focus();
              }}
              placeholder="Username"
              blurOnSubmit={false}
              returnKeyType="next"
              onChangeText={username => {
                setUserId(username);
              }}
              ref={input => {
                ref_username = input;
              }}
            />
          </Item>
          <Item style={styles.item}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              blurOnSubmit={false}
              ref={input => {
                ref_password = input;
              }}
              onChangeText={pass => {
                setUserPass(pass);
              }}
            />
          </Item>
          <Item picker style={{marginBottom: 10, marginLeft: 15}}>
            <Picker
              mode="dialog"
              placeholder="Select Grade"
              selectedValue={grade}
              onValueChange={val => {
                setGrade(val);
              }}>
              <Picker.Item label="Grade 1" value="1" />
              <Picker.Item label="Grade 2" value="2" />
              <Picker.Item label="Grade 3" value="3" />
              <Picker.Item label="Grade 4" value="4" />
              <Picker.Item label="Grade 5" value="5" />
              <Picker.Item label="Grade 6" value="6" />
              <Picker.Item label="Grade 7" value="7" />
              <Picker.Item label="Grade 8" value="8" />
              <Picker.Item label="Grade 9" value="9" />
              <Picker.Item label="Grade 10" value="10" />
              <Picker.Item label="Grade 11" value="11" />
            </Picker>
          </Item>
          <Item style={{marginTop: 20}}>
            <Button
              success
              style={{width: '100%', justifyContent: 'center'}}
              onPress={() => {
                LoginServices.studentLogin(
                  userId,
                  userPass,
                  grade,
                  val => {
                    if (val.isSuccess) {
                      Toast.show({
                        type: 'success',
                        text1: val.message,
                        visibilityTime: 200,
                        onHide: () => {
                          navigation.navigate('Dashboard');
                        },
                      });
                    } else {
                      Toast.show({
                        type: 'error',
                        text1: val.message,
                        visibilityTime: 200,
                      });
                    }
                  },
                  err => {
                    Toast.show({
                      type: 'error',
                      text1: val.message,
                      visibilityTime: 200,
                    });
                  },
                );
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>
                LOGIN
              </Text>
            </Button>
          </Item>
        </Form>
      </KeyboardAvoidingView>
      <Toast ref={ref => Toast.setRef(ref)} />
    </Container>
  );
};
export default Login;
const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
  },
});
