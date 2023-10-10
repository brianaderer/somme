import React from 'react';
import {
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
  Icon,
  CloseIcon,
  Button,
} from '@gluestack-ui/themed';

const ModalModule = props => {
  const {children, title, button, showButton} = props;
  const [showModal, setShowModal] = React.useState(false);
  const [size, setSize] = React.useState(undefined);
  const sizes = ['xs', 'sm', 'md', 'lg', 'full'];
  const ref = React.useRef(null);
  const handleClick = currentSize => {
    setShowModal(true);
    setSize(currentSize);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const enhancedChildren = React.Children.map(children, child =>
    React.cloneElement(child, {closeModal}),
  );

  return (
    <Center>
      {!showButton && (
        <Button onPress={() => handleClick('lg')} title={button}>
          <ButtonText>{title}</ButtonText>
        </Button>
      )}
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
            <Heading size="lg">{title}</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Center h={400}>{enhancedChildren}</Center>
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default ModalModule;
