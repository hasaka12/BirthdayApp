import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';

import QuoteComponent from '../../components/QuoteComponent';

import QUOTE_BACKGROUND from '../../images/quote-background.jpg';
import { QUOTE } from '../../constants/QuotesConstants';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: {
    resizeMode: 'cover',
    height,
    width,
    position: 'absolute',
    bottom: 0,
    opacity: 0.2,
  },
});

const Quotes = () => (
  <View style={styles.container}>
    <ImageBackground source={QUOTE_BACKGROUND} style={styles.backgroundImage} />
    <ScrollView showsVerticalScrollIndicator={false}>
      {QUOTE.map(quote => (
        <QuoteComponent quote={quote} key={quote.description} />
      ))}
    </ScrollView>
  </View>
);

export default Quotes;
