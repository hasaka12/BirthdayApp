import React, { useState, useEffect, memo } from 'react';
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { Audio } from 'expo-av';
import Carousel from 'react-native-snap-carousel';

import { IMAGES } from '../../constants/GallaryConstants';
import { GALLERY_SPEED } from '../../constants/TimeConstants';
import MUSIC from '../../assets/galleryMusic.mp3';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  root: { flex: 1 },
  carouselContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: { height, width, flex: 1, resizeMode: 'cover' },
  imageContainer: { height },
});

const Gallery = () => {
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
    setEntries(IMAGES);
    playSound();
  }, []);

  const CarouselComponent = memo(prop => (
    <View style={styles.imageContainer}>
      <Image source={prop.item.img} style={styles.image} />
    </View>
  ));

  const renderItem = item => {
    const { item: it } = item;

    return <CarouselComponent item={it} />;
  };

  if (entries.length < 1) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.carouselContainer}>
        <Carousel
          layout="default"
          data={entries}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          loop
          autoplay
          autoplayInterval={GALLERY_SPEED}
        />
      </View>
    </SafeAreaView>
  );
};

export default Gallery;
