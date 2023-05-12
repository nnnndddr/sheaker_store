import React from 'react';
import {

    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit'
import Icon from '@mdi/react';
import {mdiFacebook, mdiGithub, mdiGoogle, mdiInstagram, mdiLinkedin, mdiTwitter} from '@mdi/js';
const Footer = () => {
    return (
        <MDBFooter style={{marginTop:"160px",marginBottom:"0px"}} className='bg-dark text-center text-white'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <MDBBtn color="none" floating className='m-1' href='#!' role='button'>
                        <Icon path={mdiFacebook} size={1} />
                    </MDBBtn>

                    <MDBBtn outline color="none" floating className='m-1' href='#!' role='button'>
                        <Icon path={mdiTwitter} size={1} />
                    </MDBBtn>

                    <MDBBtn outline color="none" floating className='m-1' href='#!' role='button'>
                        <Icon path={mdiGoogle} size={1} />
                    </MDBBtn>
                    <MDBBtn outline color="none" floating className='m-1' href='#!' role='button'>
                        <Icon path={mdiInstagram} size={1} />
                    </MDBBtn>

                    <MDBBtn outline color="none" floating className='m-1' href='#!' role='button'>
                        <Icon path={mdiLinkedin} size={1} />
                    </MDBBtn>

                    <MDBBtn outline color="none" floating className='m-1' href='#!' role='button'>
                        <Icon path={mdiGithub} size={1} />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className='text-white' href='BSUIR'>
                    BSUIR
                </a>
            </div>
        </MDBFooter>
    );
};

export default Footer;