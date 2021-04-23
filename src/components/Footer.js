import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';
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
  Body,
  Card,
  CardItem,
  Footer,
  FooterTab,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
const MyFooter = () => {
  return (
    <Footer>
      <FooterTab>
        <Button>
          <Icon name="home" size={25} solid color="#fff" />
          <Text>Home</Text>
        </Button>
        <Button>
          <Icon name="scroll" size={25} solid color="#fff" />
          <Text>Prograss</Text>
        </Button>
        <Button>
        <Icon name="bell" size={25} solid color="#fff" />
          <Text>Messages</Text>
        </Button>
        <Button>
        <Icon name="user" size={25} solid color="#fff" />
          <Text>Profile</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default MyFooter;
