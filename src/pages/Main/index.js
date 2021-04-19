import React from 'react';
import Vector from '../../assets/img/Vector.png';
import Illustration from '../../assets/img/Illustration.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
    Welcome,
    WelcomeTitle,
    Container,
    IllustrationImg,
    TextP,
    EventsContainer,
    EventsTitle,
    EventsInput,
    EventsButton,
    EventsButtonP,
    EventsButtonIcon,
} from './styles';

function Main() {
    return (
        <Container>
            <Header />
            <Welcome>
                <WelcomeTitle>Seja bem vindo(a) à 4.events.</WelcomeTitle>
                <TextP>
                    Em poucos minutos você terá acesso a um sistema completo
                    para automatizar inscrições, pagamentos e muito mais!
                </TextP>
                <TextP>
                    Vamos precisar apenas de mais algumas informações para
                    iniciar seu novo sistema de eventos, tudo bem? :)
                </TextP>
            </Welcome>
            <EventsContainer>
                <EventsTitle>Nome do Evento*</EventsTitle>
                <EventsInput
                    type="text"
                    placeholder="Qual será o nome do evento?"
                />
                <EventsButton type="button">
                    <EventsButtonP>
                        Avançar
                        <EventsButtonIcon src={Vector} alt="Botão de Avançar" />
                    </EventsButtonP>
                </EventsButton>
            </EventsContainer>
            <IllustrationImg>
                <img src={Illustration} alt="Imagem pessoa trabalhando" />
            </IllustrationImg>
            <Footer />
        </Container>
    );
}

export default Main;
