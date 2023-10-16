import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@gluestack-ui/themed';
import React from 'react';

export const StyledSlider = ({min, max, defaultValue}) => {
  const handleChange = value => {
    console.log(value);
  };

  return (
    <Slider
      defaultValue={0}
      minValue={0}
      maxValue={3}
      size="lg"
      orientation="horizontal"
      isDisabled={false}
      isReversed={false}
      step={1}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
