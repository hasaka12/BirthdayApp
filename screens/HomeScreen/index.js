import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Body, Card, CardItem, Left, Thumbnail } from 'native-base';
import { Video } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

import MAIN_VIDEO from '../../assets/mainVideo.mp4';
import MAIN_CARD_IMG from '../../images/main-menu-thumb.png';

import { MENU_ITEMS } from './constant';

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: { justifyContent: 'center' },
  cardContainer: {
    justifyContent: 'center',
    marginTop: '30%',
  },
  backgroundVideo: {
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
    opacity: 0.7,
  },
  menuContainer: {
    flex: 1,
    marginTop: '15%',
  },
  menuCard: {
    opacity: 0.8,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

let videoplayer = null;

const BackgroundVideo = memo(() => (
  <Video
    source={MAIN_VIDEO}
    rate={1.0}
    volume={0.5}
    resizeMode="cover"
    shouldPlay
    isLooping
    style={styles.backgroundVideo}
    ref={ref => {
      videoplayer = ref;
    }}
  />
));

const HomeScreen = ({ navigation }) => {
  const onPressMenu = menu => {
    if (
      (menu.navTo === 'Our Story' || menu.navTo === 'Our Gallery') &&
      videoplayer
    ) {
      videoplayer.pauseAsync();
    }

    navigation.navigate(menu.navTo);
  };

  useFocusEffect(
    useCallback(() => {
      videoplayer.playAsync();
    }, []),
  );

  return (
    <View style={styles.container}>
      <BackgroundVideo />
      <View style={styles.cardContainer}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={MAIN_CARD_IMG} />
              <Body>
                <Text style={styles.menuText}>Happy Birthday Mishi</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.menuContainer}>
          {MENU_ITEMS.map(menu => (
            <Card key={menu.key} style={styles.menuCard}>
              <CardItem button onPress={() => onPressMenu(menu)}>
                <Left>
                  <Thumbnail source={menu.img} />
                  <Body>
                    <Text style={styles.menuText}>{menu.description}</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
