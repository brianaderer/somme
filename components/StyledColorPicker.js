import {ColorSwatch} from './ColorSwatch';
import {Heading, View} from '@gluestack-ui/themed';
import React from 'react';

export const StyledColorPicker = () => {
  const handlePress = (val, slug) => {
    console.log(val);
    console.log(slug);
  };

  const swatches = [
    {slug: 'WaterWhite', label: 'Pale', class: 'White'},
    {slug: 'Straw', label: 'Straw', class: 'White'},
    {slug: 'Yellow', label: 'Yellow', class: 'White'},
    {slug: 'Gold', label: 'Gold', class: 'White'},
    {slug: 'Purple', label: 'Purple', class: 'Red'},
    {slug: 'Ruby', label: 'Ruby', class: 'Red'},
    {slug: 'Red', label: 'Red', class: 'Red'},
    {slug: 'Garnet', label: 'Garnet', class: 'Red'},
    {slug: 'Pink', label: 'Pink', class: 'Rose'},
    {slug: 'Rose', label: 'Rose', class: 'Rose'},
    {slug: 'Salmon', label: 'Salmon', class: 'Rose'},
    {slug: 'Orange', label: 'Orange', class: 'Orange'},
  ];

  return (
    <View flex={1} h={'$full'}>
      <Heading>Primary Color</Heading>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {swatches.map(swatch => (
          <View style={{width: '23%', margin: '1%'}} key={swatch.slug}>
            <ColorSwatch
              fX={handlePress}
              slug={swatch.slug}
              label={swatch.label}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
