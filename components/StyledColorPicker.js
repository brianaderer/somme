import {ColorSwatch} from './ColorSwatch';
import {Heading, HStack, VStack, View} from '@gluestack-ui/themed';
import React from 'react';

export const StyledColorPicker = () => {
  const handlePress = (val, slug) => {
    console.log(val);
    console.log(slug);
  };
  return (
    <VStack space={'lg'} w={'$full'}>
      <Heading>Colors</Heading>
      <View justifyContent={'center'} alignItems={'center'}>
        <HStack space={'lg'}>
          <ColorSwatch fX={handlePress} slug={'WaterWhite'} label={'Pale'} />
          <ColorSwatch fX={handlePress} slug={'Straw'} label={'Straw'} />
          <ColorSwatch fX={handlePress} slug={'Yellow'} label={'Yellow'} />
          <ColorSwatch fX={handlePress} slug={'Gold'} label={'Gold'} />
        </HStack>
        <HStack space={'lg'}>
          <ColorSwatch fX={handlePress} slug={'WaterWhite'} label={'Pale'} />
          <ColorSwatch fX={handlePress} slug={'Straw'} label={'Straw'} />
          <ColorSwatch fX={handlePress} slug={'Yellow'} label={'Yellow'} />
          <ColorSwatch fX={handlePress} slug={'Gold'} label={'Gold'} />
        </HStack>
      </View>
    </VStack>
  );
};
