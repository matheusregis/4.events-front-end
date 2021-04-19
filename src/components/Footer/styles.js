import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-top;
`;

export const Divisor = styled.hr`
    width: 1230px;
    margin: 40px 0 0 15%;

    border: 0;
    border-top: 2px solid #ebebeb;
`;

export const FooterTitle = styled.p`
    width: 352px;
    height: 24px;
    flex-grow: 0;
    margin: 20px 789px 3px 15%;
    font-family: TitilliumWeb;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #666666;
`;

export const FooterTranslateIcon = styled.img`
    width: 26px;
    height: 26px;
    flex-grow: 0;
    margin: 20px 7px 0 0;
    object-fit: contain;
`;

export const FooterTranlateText = styled.p`
    width: 18px;
    height: 27px;
    flex-grow: 0;
    margin-top: 20px;
    font-family: TitilliumWeb;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #515151;
`;

export const FooterArrowIcon = styled.img`
    width: 16px;
    height: 16px;
    flex-grow: 0;
    margin: 24px 0 4px 0px;
    object-fit: contain;
`;
