import React from 'react';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';

interface NextUiProps {

  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean

  /**
   * What background color to use
   */
  backgroundColor?: string

  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * Button contents
   */
  label     : string
  isLoading?: boolean

  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const NextUi = ({
  ...props
}: NextUiProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color={props.primary ? 'primary' : 'secondary'}
        isLoading={props.isLoading ? props.isLoading : false}
        size={props.size ? props.size : 'lg'}
      >
        {props.label}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Test Modal
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
