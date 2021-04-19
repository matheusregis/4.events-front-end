import React from 'react';
import TranslateIcon from '../../assets/img/translation 1.png';
import Chevron from '../../assets/img/Chevron.png';
import {
    Container,
    FooterTitle,
    FooterTranslateIcon,
    FooterTranlateText,
    FooterArrowIcon,
    Divisor,
} from './styles';

function Footer() {
    return (
        <>
            <Divisor />
            <Container>
                <FooterTitle>
                    4.events © 2020 – Todos Direitos Reservados
                </FooterTitle>
                <FooterTranslateIcon
                    src={TranslateIcon}
                    alt="Traduções da página"
                />
                <FooterTranlateText>Pt</FooterTranlateText>
                <FooterArrowIcon
                    src={Chevron}
                    alt="Escolher traduções da página"
                />
            </Container>
        </>
    );
}

export default Footer;
