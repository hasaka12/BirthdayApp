import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  quoteStyle: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '95%',
    marginLeft: 8,
  },
  text: {
    fontWeight: 'bold',
  },
});

const QuoteComponent = ({ quote }) => (
  <TouchableOpacity style={styles.quoteStyle} onPress={() => {}}>
    <Text style={styles.text}>{quote.description}</Text>
  </TouchableOpacity>
);

QuoteComponent.propTypes = {
  quote: PropTypes.object.isRequired,
};

export default QuoteComponent;
