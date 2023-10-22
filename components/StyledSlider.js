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
import React, {useState} from 'react';

export const StyledSlider = ({
  changeFX,
  min,
  max,
  defaultValue,
  lookup,
  heading,
  slug,
}) => {
  const [val, setVal] = useState(defaultValue);
  const handleChange = value => {
    setVal(value);
    changeFX({[slug]: value});
  };

  return (
    <VStack w={'$full'}>
      <HStack mb={'$4'} alignItems={'baseline'} justifyContent={'flex-start'}>
        <Heading>{heading}:</Heading>
        <Text fontSize={'$lg'} ml={'$2'}>
          {lookup[val]}
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
