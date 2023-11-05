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

export const StyledSlider = ({
  changeFX,
  min,
  max,
  value, // Now we take value from props instead of using local state
  lookup,
  heading,
  slug,
}) => {
  // No need for useState, since we're going to use value from props
  const handleChange = value => {
    changeFX({[slug]: value});
  };

  return (
    <VStack w={'$full'}>
      <HStack mb={'$4'} alignItems={'baseline'} justifyContent={'flex-start'}>
        <Heading>{heading}:</Heading>
        <Text fontSize={'$lg'} ml={'$2'}>
          {lookup[value]}
        </Text>
      </HStack>
      <Slider
        value={value} // Use the value from props
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
