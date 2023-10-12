import {styled} from '@gluestack-style/react';
import {Pressable} from '@gluestack-ui/themed';

export const Button = styled(
  Pressable,
  {
    rounded: '$lg',
    py: '$3',
    px: '$9',
    variants: {
      scheme: {
        solid: {bg: '$backgroundLight100'},
        outline: {
          borderWidth: '$1',
          borderColor: '$borderLight100',
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
