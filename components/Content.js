import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Content = ({ children, iterate }) => {
  const styles = StyleSheet.create({
    content: {
      padding: 10,
    },
  });

  if (iterate) {
    return (
      <Fragment>
        {children.map((child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <View style={styles.content} key={index}>
            {child}
          </View>
        ))}
      </Fragment>
    );
  }

  return <View style={styles.content}>{children}</View>;
};

Content.defaultProps = {
  iterate: false,
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  iterate: PropTypes.bool,
};

export default Content;
