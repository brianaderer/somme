import {ColorSwatch} from './ColorSwatch';
import {HStack} from '@gluestack-ui/themed';
import React from 'react';

export const StyledColorPicker = () => {
  const handlePress = (val, slug) => {
    console.log(val);
    console.log(slug);
  };
  return (
    <HStack>
      <ColorSwatch fX={handlePress} slug={'Warning'} label={'Water White'} />
    </HStack>
  );
};
