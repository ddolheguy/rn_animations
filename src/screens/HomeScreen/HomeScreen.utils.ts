import {withRepeat, withTiming} from 'react-native-reanimated';

export const cardExiting = (values: {currentOriginY: number}) => {
  'worklet';
  const animations = {
    originY: withTiming(-200, {duration: 3000}),
    opacity: withTiming(0, {duration: 3000}),
    transform: [
      {
        scale: withTiming(0, {duration: 2000}),
      },
      {
        rotateX: withRepeat(withTiming('180deg', {duration: 500}), 4, true),
      },
    ],
  };
  const initialValues = {
    originY: values.currentOriginY,
    opacity: 1,
    transform: [{scale: 1}, {rotateX: '5deg'}],
  };
  return {
    initialValues,
    animations,
  };
};

export const textExiting = () => {
  'worklet';
  const animations = {
    opacity: withTiming(0, {duration: 1000}),
    transform: [
      {
        translateY: withTiming(100, {duration: 1500}),
      },
    ],
  };
  const initialValues = {
    opacity: 1,
    transform: [{translateY: 0}],
  };
  return {
    initialValues,
    animations,
  };
};
