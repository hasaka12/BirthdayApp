import React, { memo } from 'react';
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import { Body, CardItem, Left, Right } from 'native-base';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  image: { height, width, flex: 1, resizeMode: 'cover' },
  imageContainer: { height: '90%' },
  title: {
    paddingTop: 10,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    paddingTop: 10,
    paddingRight: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardStyle: { height: '100%' },
  imageCard: { height: '90%', width },
  body: {
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    alignItems: 'center',
  },
});

const StoryContent = memo(props => {
  const { item } = props;

  return (
    <CardItem cardBody>
      <View style={styles.cardStyle}>
        <Image source={item.img} style={styles.imageCard} />
        <Body style={styles.body}>
          <Left>
            <Text style={styles.title}>{item.title}</Text>
          </Left>
          <Right>
            <Text style={styles.date}>{item.date}</Text>
          </Right>
        </Body>
        <Body>
          <Text style={styles.title}>{item.desc}</Text>
        </Body>
      </View>
    </CardItem>
  );
});

StoryContent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default StoryContent;
