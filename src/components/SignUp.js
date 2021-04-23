import React from 'react';
import {StyleSheet, SafeAreaView, Image} from 'react-native';
import {
  View,
  Text,
  TextInput,
  Button,
  Container,
  Header,
  Content,
  Title,
  Item,
  Input,
} from 'native-base';

const SignUp = () => {
  return (
    <Container>
      <Header>
        <Title>Idea M Pos</Title>
      </Header>
      <SafeAreaView style={{alignItems: 'center', margin: 20}}>
        <Text>Image Here</Text>
      </SafeAreaView>
      <Item>
          <Input placeholder="User Name" />
      </Item>
      <Item>
          <Input placeholder="Password" />
      </Item>
    </Container>
  );
};
export default SignUp;
