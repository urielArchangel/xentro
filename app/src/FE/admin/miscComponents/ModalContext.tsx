"use client";

import React, { ReactNode, createContext, useState } from 'react';

// Define the context with the appropriate types
export const ModalCTX = createContext({
    isOpened: false,
    openModal: () => {},
    closeModal: () => {},
    assignModal: (a: React.JSX.Element) => {}
});

const ModalContext = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [Modal, setModal] = useState<React.JSX.Element | null>(null);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const assignModal = (a: React.JSX.Element) => {
        setModal(a);
    };

    return (
        <ModalCTX.Provider value={{ openModal, closeModal, isOpened: open, assignModal }}>
            {open && Modal ? Modal : null}
            {children}
        </ModalCTX.Provider>
    );
};

export default ModalContext;
