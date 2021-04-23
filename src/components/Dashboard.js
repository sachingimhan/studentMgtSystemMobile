import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
  Left,
  Right,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LineChart} from 'react-native-chart-kit';
import getUserData from '../services/DashboardServices';
import MyFooter from './Footer';
const Dashboard = () => {
  let [stdId, setStdId] = useState();
  let [stdName, setStdName] = useState();
  let [stdGrade, setStdGrade] = useState();
  let [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getUserData(val => {
      setStdId(val.stdId);
      setStdName(val.stdFullName);
      setStdGrade(val.stdGrade);
      setSubjects(val.stdSubjects);
    });
  }, []);

  return (
    <Container>
      <Header style={{alignContent: 'center', alignItems: 'center'}}>
        <Title>Educo English Academy</Title>
      </Header>
      <Content style={{margin: 10}}>
        <Card>
          <CardItem>
            <Body>
              <Text style={styles.titleName}>{stdName}</Text>
              <Text style={styles.titles}>ID : {stdId}</Text>
              <Text style={styles.titles}>GRADE : {stdGrade}</Text>
              <Text style={styles.titles}>
                SUBJECTS:
                {subjects.map((v, i) => {
                  return (
                    <Text style={(styles.titles, {fontWeight: 'bold'})} key={i}>
                      {' '}
                      {v}{' '}
                    </Text>
                  );
                })}
              </Text>
              <Image
                style={styles.cardItemImagePlace}
                source={require('../resources/images/Profile.png')}></Image>
            </Body>
          </CardItem>
        </Card>
        <Item
          style={{
            alignSelf: 'center',
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix="%"
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginRight: 25,
            }}
          />
        </Item>
        <Item style={styles.item}>
          <Card style={styles.cardTile}>
            <CardItem>
              <Body>
                <Text style={styles.cardValue}>1/60</Text>
              </Body>
            </CardItem>
            <CardItem style={{position: 'absolute', bottom: 0}}>
              <Body style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    padding: 0,
                    margin: 0,
                  }}>
                  1st Term
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardTile}>
            <CardItem>
              <Body>
                <Text style={styles.cardValue}>8/80</Text>
              </Body>
            </CardItem>
            <CardItem style={{position: 'absolute', bottom: 0}}>
              <Body style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    padding: 0,
                    margin: 0,
                  }}>
                  2nd Term
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Item>
        <Item>
          <Card style={styles.cardTile}>
            <CardItem>
              <Body>
                <Text style={styles.cardValue}>10/100</Text>
              </Body>
            </CardItem>
            <CardItem style={{position: 'absolute', bottom: 0}}>
              <Body style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    padding: 0,
                    margin: 0,
                  }}>
                  3rd Term
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardTile}>
            <CardItem>
              <Body>
                <Text style={styles.cardValue}>A</Text>
              </Body>
            </CardItem>
            <CardItem style={{position: 'absolute', bottom: 0}}>
              <Body style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    padding: 0,
                    margin: 0,
                  }}>
                  Overall Grade
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Item>
      </Content>
      <MyFooter />
    </Container>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 10,
    display: 'flex',
  },
  titleName: {
    fontFamily: 'helvetica-regular',
    fontSize: 20,
    color: '#000',
    paddingBottom: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  titles: {
    fontFamily: 'helvetica-regular',
    color: 'rgba(74,74,74,1)',
    margin: 2,
    display: 'flex',
    alignItems: 'center',
  },
  cardItemImagePlace: {
    borderColor: '#ccc',
    borderWidth: 2,
    height: 80,
    width: 80,
    margin: 'auto',
    borderRadius: 100,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  cardTile: {
    width: 100,
    height: 100,
    flex: 1,
  },
  cardValue: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 35,
  },
});
