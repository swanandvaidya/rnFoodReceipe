import {Image, StyleSheet} from 'react-native';

const headerLogo = require('../assets/ic_launcher.png');

export default AppLogo = () => {
  return <Image source={headerLogo} style={styles.imageSize}></Image>;
};

const styles = StyleSheet.create({
  imageSize: {
    width: 120,
    height: 120,
  },
});
