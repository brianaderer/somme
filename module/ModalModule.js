import React from 'react';
import {
  Text,
  ButtonText,
  Center,
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  VStack,
  Icon,
  CloseIcon,
  Button,
} from '@gluestack-ui/themed';

const ModalModule = props => {
  const {children} = props;
  const [showModal, setShowModal] = React.useState(false);
  const [size, setSize] = React.useState(undefined);
  const sizes = ['xs', 'sm', 'md', 'lg', 'full'];
  const ref = React.useRef(null);
  const handleClick = currentSize => {
    setShowModal(true);
    setSize(currentSize);
  };
  return (
    <Center>
      <Button onPress={() => handleClick('lg')} title={'OpenCamera'}>
        <ButtonText>Camera</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size={size}
        finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Delete Folder</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Center h={400}>{children}</Center>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
              title={'Secondary'}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="primary"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}
              sx={{
                bg: '$error700',
                ':hover': {
                  bg: '$error800',
                },
                ':active': {
                  bg: '$error900',
                },
              }}
              title={'tertiary'}>
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default ModalModule;
