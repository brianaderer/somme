import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  baseText: {
    color: 'black',
    fontWeight: '900',
  },
  homeStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    borderRadius: 2000,
    aspectRatio: 1,
    position: 'absolute',
    bottom: '50%',  // This may not work perfectly. You might need to adjust using numeric values.
  },
  rightButton: {
    right: 0,
  },
  leftButton: {
    left: 0,
  },
  roundButton: {
    aspectRatio: 1,
  },
});
