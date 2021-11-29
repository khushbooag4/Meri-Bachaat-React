import React from 'react';
import './Footer.css';
import foot1 from '../../assets/Images/footer.jpg';
import foot2 from '../../assets/Images/footer1.png';
import foot3 from '../../assets/Images/footer2.png';
import {Box, Container , Row, Column ,FooterLink} from './FooterStyled';

function Footer() {
    return (
        <>
        <section className="footer">
        <Box style={{color:'#fff'}}>
          <Container>
              <Row>
            <Column>
                <img src={foot1} classname="img" alt="img"/>
                <h3>Isse sasta aur kuch nahi!</h3>
                <div className="media-box">
                </div>
           </Column>
               <Column>
                <FooterLink href="#">Home</FooterLink>
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Contact Us</FooterLink>
                <FooterLink href="#">Privacy</FooterLink>
                <img src={foot2} alt="img" className="img1" />
               </Column>
               <Column>
                <FooterLink href="#">Terms & Conditions</FooterLink>
                <FooterLink href="#">Help and Support</FooterLink>
                <FooterLink href="#">FaQ</FooterLink>
                <FooterLink href="#">Blogs</FooterLink>
                <img src={foot3} alt="img" className="img1" />
               </Column>
               </Row>
            </Container>
        </Box>
        </section>
        </>
    );
}

export default Footer;
