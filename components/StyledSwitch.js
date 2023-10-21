import {styled} from '@gluestack-style/react';
import {Heading, HStack, Switch, Text, VStack} from '@gluestack-ui/themed';
import React, {useState} from 'react';

const GluestackSwitch = styled(Switch, {}, {});

export const StyledSwitch = props => {
  const {changeFX, heading, slug, lookup, defaultValue} = props;
  const [val, setVal] = useState(defaultValue);
  const handleChange = value => {
    changeFX(value, slug);
    setVal(value);
  };
  return (
    <VStack alignItems={'flex-start'} w={'$full'}>
      <HStack
        mb={'$4'}
        alignItems={'baseline'}
        justifyContent={'flex-start'}
        w={'$full'}>
        <Heading>{heading}:</Heading>
        <Text fontSize={'$lg'} ml={'$2'}>
          {lookup[val]}
        </Text>
      </HStack>
      <HStack ml={-8}>
        <GluestackSwitch
          onValueChange={handleChange}
          thumbColor={'$sommeTextActive'}
          trackColor={{
            false: '$sommeUIChrome',
            true: '$sommeUIChrome',
          }}
          defaultValue={defaultValue}
          size={'lg'}
        />
      </HStack>
    </VStack>
  );
};