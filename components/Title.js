import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const Title = ({ children }) => (
  <Text style={styles.titleText}>{children}</Text>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
