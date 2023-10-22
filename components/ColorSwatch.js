import {Text, VStack} from '@gluestack-ui/themed';
import {StyledButton} from './StyledButton';
import React from 'react';
import {config} from '../config/gluestack-ui.config';
export const ColorSwatch = props => {
  const colors = config.tokens.colors;
  const {fX, slug, label, type} = props;
  const colorID = 'somme' + slug;
  const color = colors[colorID];
  return (
    <VStack justifyContent={'center'} alignItems={'center'}>
      <StyledButton
        onPress={() => fX(color, type, slug)}
        borderColor={'$white'}
        borderWidth={'$4'}
        bg={color}
        scheme={'round'}
        p={'$4'}
        w={'$4'}
        h={'$4'}
      />
      <Text>{label}</Text>
    </VStack>
  );
};
