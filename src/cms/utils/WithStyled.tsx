import React, { ReactNode } from 'react';
import { StyleSheetManager } from 'styled-components';

type WithStyledProps = {
    children: ReactNode
}

const WithStyled = ({ children }: WithStyledProps) => {
    const iframe = document.getElementById("preview-pane") as HTMLIFrameElement
    const iframeHeadElem = iframe?.contentDocument?.head;
    return (
        <StyleSheetManager target={iframeHeadElem}>
            {children}
        </StyleSheetManager>
    )
}

export default WithStyled;