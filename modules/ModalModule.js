import React, {useImperativeHandle} from 'react';
import {
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
} from '@gluestack-ui/themed';
import {Button} from '../components/Button';
import {ButtonText} from '../components/ButtonText';

const ModalModule = React.forwardRef((props, ref) => {
  const {children, title, button, showButton} = props;
  const [showModal, setShowModal] = React.useState(false);
  const [size, setSize] = React.useState(undefined);
  const sizes = ['xs', 'sm', 'md', 'lg', 'full'];
  const openModal = currentSize => {
    setShowModal(true);
    setSize(currentSize);
  };

  useImperativeHandle(ref, () => ({
    openModal,
  }));
  const closeModal = () => {
    setShowModal(false);
  };
  const enhancedChildren = React.Children.map(children, child =>
    React.cloneElement(child, {closeModal}),
  );

  return (
    <Center>
      {!showButton && (
        <Button
          scheme={'outline'}
          onPress={() => openModal('lg')}
          title={button}>
          <ButtonText>{title}</ButtonText>
        </Button>
      )}
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size={size}>
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
              scheme="outline"
              size="sm"
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
});

export default ModalModule;
