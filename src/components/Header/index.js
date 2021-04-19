import React from 'react';
import Logo from '../../assets/img/4 2.png';
import PlusIcon from '../../assets/img/Group 112.png';
import CircleIcon from '../../assets/img/Group 121.png';
import Vector from '../../assets/img/VectorOrange.png';
import {
    Container,
    TitleHeader,
    MenuContainer,
    MenuP,
    MenuLogo,
    MenuIcons,
    MenuLi,
    MenuIconTitle,
} from './styles';

function Header() {
    return (
        <Container>
            <MenuIconTitle src={Vector} alt="Link para Criar Evento" />
            <TitleHeader>Criar Evento</TitleHeader>
            <MenuContainer>
                <MenuLi>
                    <MenuIcons src={PlusIcon} alt="Link para nome" />
                </MenuLi>
                <MenuLi>
                    <MenuP>Nome</MenuP>
                </MenuLi>
                <MenuLi>
                    <MenuIcons src={PlusIcon} alt="Link para Local" />
                </MenuLi>
                <MenuLi>
                    <MenuP>Local</MenuP>
                </MenuLi>
                <MenuLi>
                    <MenuIcons src={PlusIcon} alt="Link para Data" />
                </MenuLi>
                <MenuLi>
                    <MenuP>Data</MenuP>
                </MenuLi>
                <MenuLi>
                    <MenuIcons src={CircleIcon} alt="Link para Plano" />
                </MenuLi>
                <MenuLi>
                    <MenuP>Plano</MenuP>
                </MenuLi>
                <MenuLi>
                    <MenuIcons src={CircleIcon} alt="Link para WhatsApp" />
                </MenuLi>
                <MenuLi>
                    <MenuP>WhatsApp</MenuP>
                </MenuLi>
                <MenuLi>
                    <MenuIcons src={CircleIcon} alt="Link para Site" />
                </MenuLi>
                <MenuLi>
                    <MenuP>Site</MenuP>
                </MenuLi>
                <MenuLogo src={Logo} alt="Logo 4.events" />
            </MenuContainer>
        </Container>
    );
}

export default Header;
