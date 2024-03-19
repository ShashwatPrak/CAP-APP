import React, { useState } from 'react';
import './OffCanvas.css'; // Import CSS for styling
import { CButton, COffcanvas, COffcanvasHeader, COffcanvasTitle, CCloseButton, COffcanvasBody } from '@coreui/react';
import ThreeLineButton from './buttons/threeline';
import LeftPane from './previouschats';

const OffCanvasComponent = ({ usernm }) => { // Destructuring usernm from props
    const [visible, setVisible] = useState(false);

    return (
        <>
            <ThreeLineButton onClick={() => setVisible(true)} />
            <COffcanvas placement="start" visible={visible} onHide={() => setVisible(false)}>
                <COffcanvasHeader>
                    <COffcanvasTitle>Previous Chats</COffcanvasTitle>
                    <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                </COffcanvasHeader>
                <COffcanvasBody>
                    <LeftPane usernm={usernm} />
                </COffcanvasBody>
            </COffcanvas>
        </>
    );
};

export default OffCanvasComponent;
