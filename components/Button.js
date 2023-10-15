import {styled} from '@gluestack-style/react';
import {Pressable} from '@gluestack-ui/themed';

export const Button = styled(
  Pressable,
  {
    bg: '$sommeUIBackground',
    borderWidth: '$1',
    borderColor: '$sommeSecondary',
    color: '$sommeTextChrome',
    variants: {
      scheme: {
        solid: {bg: '$sommeUIBackground'},
        round: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        outline: {
          rounded: '$lg',
          py: '$3',
          px: '$9',
        },
      },
      flush: {
        top: {
          borderTop: '$none',
          borderTopLeftRadius: '$none',
          borderTopRightRadius: '$none',
        },
        topLeft: {
          borderTop: '$none',
          borderTopLeftRadius: '$none',
          borderTopRightRadius: '$none',
          borderBottomLeftRadius: '$none',
        },
        topRight: {
          borderTop: '$none',
          borderRight: '$none',
          borderTopLeftRadius: '$none',
          borderTopRightRadius: '$none',
          borderBottomRightRadius: '$none',
        },
      },
    },
  },
  {},
);
