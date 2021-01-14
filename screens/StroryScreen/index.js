import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Audio } from 'expo-av';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';

import { STORY_IMAGES } from '../../constants/GallaryConstants';
import MUSIC from '../../assets/storyMusic.mp3';

import StoryContent from './StoryContent';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  root: { flex: 1 },
  carouselContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Story = () => {
  const [entries, setEntries] = useState([]);
  const [sounds, setSounds] = useState(null);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(MUSIC);
    setSounds(sound);

    await sound.playAsync();
  };

  /* eslint-disable */
  useEffect(
    () =>
      sounds
        ? () => {
            sounds.unloadAsync();
        }
        : undefined,
    [sounds],
  );
  /* eslint-enable */

  useEffect(() => {
    setEntries(STORY_IMAGES);
    playSound();

    return async () => {
      if (sounds) {
        await sounds.stopAsync();
      }
    };
  }, []);

  const renderItem = item => {
    const { item: it } = item;

    return <StoryContent item={it} />;
  };

  const scrollInterpolator = (index, carouselProps) => {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
  };

  const animatedStyles = (index, animatedValue, carouselProps) => {
    const sizeRef = carouselProps.vertical
      ? carouselProps.itemHeight
      : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [2, 3],
        outputRange: [1, 0],
      }),
      transform: [
        {
          rotate: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
            extrapolate: 'clamp',
          }),
        },
        {
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: [
              -sizeRef * 0.5,
              0,
              -sizeRef,
              -sizeRef * 2,
              -sizeRef * 3,
            ],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  };

  if (entries.length < 1) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.carouselContainer}>
        <Carousel
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView
          layout="default"
          data={entries}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
        />
      </View>
    </SafeAreaView>
  );
};

export default Story;
