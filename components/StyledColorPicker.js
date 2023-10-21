import {ColorSwatch} from './ColorSwatch';
import {HStack, VStack} from '@gluestack-ui/themed';
import React from 'react';

export const StyledColorPicker = () => {
  const handlePress = (val, slug) => {
    console.log(val);
    console.log(slug);
  };
  return (
    <VStack space={'lg'}>
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
    </VStack>
  );
};
