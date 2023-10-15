import React from 'react';
import {styled} from '@gluestack-style/react';
import {TextInput} from 'react-native-paper';
import {config} from '../config/gluestack-ui.config';

const Input = styled(TextInput, {
  bg: '$sommeUIBackground',
  color: '$sommeTextChrome',
});
const StyledTextInput = ({children, ...props}) => {
  const sommeColors = config.tokens.colors;
  return (
    <Input
      activeOutlineColor={sommeColors.sommeTextActive}
      outlineColor={sommeColors.sommeTextActive}
      underlineColor={sommeColors.sommeSecondary}
      activeUnderlineColor={sommeColors.sommeTextActive}
      textColor={sommeColors.sommeTextActive}
      theme={{
        colors: {
          onSurfaceVariant: sommeColors.sommeTextActive,
        },
      }}
      {...props}>
      {children}
    </Input>
  );
};
export default StyledTextInput;
