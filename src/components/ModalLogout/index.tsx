import React, { ReactNode } from 'react';
import { styles } from './styles';

import {
    ModalProps,
    Modal,
    View,
    TouchableWithoutFeedback,
    Text
} from 'react-native';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalLogout({ children, closeModal, ...rest }: Props) {
    return (
        <Modal
            {...rest}
            transparent
            animationType='slide'
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        {children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}