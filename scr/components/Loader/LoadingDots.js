import React from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';

function LoadingDots({dots, colors, size, bounceHeight, borderRadius}) {
  const [animations, setAnimations] = React.useState([]);
  const [reverse, setReverse] = React.useState(false);

  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const dotAnimations = [];
    for (let i = 0; i < dots; i++) {
      dotAnimations.push(new Animated.Value(0));
    }
    setAnimations(dotAnimations);
  }, []);

  React.useEffect(() => {
    if (animations.length === 0) return;
    loadingAnimation(animations, reverse);
    appearAnimation();
  }, [animations]);

  function appearAnimation() {
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }

  function floatAnimation(node, reverseY, delay) {
    const floatSequence = Animated.sequence([
      Animated.timing(node, {
        toValue: reverseY ? bounceHeight : -bounceHeight,
        easing: Easing.bezier(0.41, -0.15, 0.56, 1.21),
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(node, {
        toValue: reverseY ? -bounceHeight : bounceHeight,
        easing: Easing.bezier(0.41, -0.15, 0.56, 1.21),
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(node, {
        toValue: 0,
        delay,
        useNativeDriver: true,
      }),
    ]);
    return floatSequence;
  }

  function loadingAnimation(nodes, reverseY) {
    Animated.parallel(
      nodes.map((node, Index) => floatAnimation(node, reverseY, Index * 100)),
    ).start(() => {
      setReverse(!reverse);
    });
  }

  React.useEffect(() => {
    if (animations.length === 0) return;
    loadingAnimation(animations, reverse);
  }, [reverse, animations]);

  return (
    <Animated.View style={[styles.loading, {opacity}]}>
      {animations.map((animation, Index) => (
        <Animated.View
          key={`loading-anim-${Index}`}
          style={[
            {
              width: size,
              height: size,
              borderRadius: borderRadius || size / 2,
              margin: 2,
            },
            {backgroundColor: colors},
            {transform: [{translateY: animation}]},
          ]}
        />
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default LoadingDots;
