import React from "react";
export const ModalContext = React.createContext({
    modalShowHide: false,
    setModalShowHide: () => {}
})