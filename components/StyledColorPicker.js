import {ColorSwatch} from './ColorSwatch';
import {Heading, View} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {changeVisual} from '../actions/visual';

export const StyledColorPicker = props => {
  const {changeFX} = props;
  const [color, setColor] = useState('');
  const [type, setType] = useState('');
  const handlePress = (wineColor, wineType, slug) => {
    changeFX({
      pColor: {[slug]: wineColor},
      type: wineType,
    });
    setType(wineType);
    setColor(slug);
  };
  const swatches = [
    {slug: 'WaterWhite', label: 'Pale', type: 'White'},
    {slug: 'Straw', label: 'Straw', type: 'White'},
    {slug: 'Yellow', label: 'Yellow', type: 'White'},
    {slug: 'Gold', label: 'Gold', type: 'White'},
    {slug: 'Purple', label: 'Purple', type: 'Red'},
    {slug: 'Ruby', label: 'Ruby', type: 'Red'},
    {slug: 'Red', label: 'Red', type: 'Red'},
    {slug: 'Garnet', label: 'Garnet', type: 'Red'},
    {slug: 'Pink', label: 'Pink', type: 'Rose'},
    {slug: 'Rose', label: 'Rose', type: 'Rose'},
    {slug: 'Salmon', label: 'Salmon', type: 'Rose'},
    {slug: 'Orange', label: 'Orange', type: 'Orange'},
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
              focused={color === swatch.slug}
              fX={handlePress}
              slug={swatch.slug}
              label={swatch.label}
              type={swatch.type}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
