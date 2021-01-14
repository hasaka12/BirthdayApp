import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Keyboard,
  Alert,
} from 'react-native';
import { Form, Item, Icon, Input, Label, Button, Text } from 'native-base';

import Title from '../../components/Title';
import Content from '../../components/Content';

import { GIFTS } from '../../constants/GiftConstants';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height,
    width,
    position: 'absolute',
    bottom: 0,
    opacity: 0.2,
  },
  button: {
    alignItems: 'flex-end',
    padding: 10,
    marginLeft: 'auto',
  },
});

const TabContent = ({ id }) => {
  const [quizNo, setQuizNo] = useState(1);
  const [userAns, setUserAns] = useState(null);
  const selectedGiftObj = GIFTS[id];
  const { img, quiz, answer, title } =
    quizNo in selectedGiftObj
      ? selectedGiftObj[quizNo]
      : selectedGiftObj.winner;

  const onButtonClicked = () => {
    if (userAns && answer.toLowerCase() === userAns.toLowerCase()) {
      Keyboard.dismiss();
      setQuizNo(quizNo + 1);
      setUserAns(null);
    } else if (!userAns) {
      Alert.alert('Error', 'Please enter an answer');
    } else {
      Alert.alert('Try Again', 'Incorrect Answer Sweety');
    }
  };

  const onTextChange = text => {
    setUserAns(text);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.backgroundImage} />
      <Content iterate>
        {title ? (
          <Title>{title}</Title>
        ) : (
          <Title>Answer these questions to find the gift</Title>
        )}
        <Text>
          {answer && `${quizNo}. `}
          {quiz}
        </Text>
      </Content>
      {answer && (
        <Form>
          <Item floatingLabel>
            <Icon name="md-person" />
            <Label> Answer</Label>
            <Input maxLength={14} value={userAns} onChangeText={onTextChange} />
          </Item>
          <View style={styles.button}>
            <Button iconRight transparent onPress={onButtonClicked}>
              <Text primary>Next</Text>
              <Icon name="arrow-forward" primary />
            </Button>
          </View>
        </Form>
      )}
    </View>
  );
};

TabContent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TabContent;
