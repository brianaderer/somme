import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
  Heading,
  HStack,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';

export const StyledSlider = ({min, max, defaultValue, lookup, heading}) => {
  const handleChange = value => {
    console.log(value);
  };

  return (
    <VStack w={'$full'}>
      <HStack mb={'$4'} alignItems={'baseline'} justifyContent={'flex-start'}>
        <Heading>Foo:</Heading>
        <Text fontSize={'$lg'} ml={'$2'}>
          Bar
        </Text>
      </HStack>
      <Slider
        defaultValue={defaultValue}
        minValue={min}
        maxValue={max}
        size="lg"
        orientation="horizontal"
        isDisabled={false}
        isReversed={false}
        step={1}
        onChange={handleChange}>
        <SliderTrack bg={'$sommeUIChrome'}>
          <SliderFilledTrack bg={'$sommeTextChrome'} />
        </SliderTrack>
        <SliderThumb bg={'$sommeTextActive'} />
      </Slider>
    </VStack>
  );
};
