import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;
    margin: 0 0 80px 0;
    padding: 45px 120px 53px;
    background-color: #f3f3f3;
`;

export const TitleHeader = styled.h1`
    width: 240px;
    height: 35px;
    flex-grow: 0;
    margin: 0 0 0 36px;
    font-size: 38px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #3f3f3f;
`;

export const MenuContainer = styled.ul`
    width: 760px;
    height: 53px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 40px 0 10px;
    padding: 0 71px 0 60px;
    background-color: #ffffff;
    border-radius: 32px;
    list-style: none;
`;

export const MenuLi = styled.li`
    margin-right: 10px;
    &:nth-last-child(3) {
        margin-left 40px;
        margin-right: 0px;
    }
    &:first-child {
        margin-left 40px;
    }
`;
export const MenuP = styled.p`
    width: 44px;
    height: 24px;
    margin: 3px 0 3px 2px;
    flex-grow: 0;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.8px;
    text-align: left;
    color: #474748;
`;

export const MenuIcons = styled.img`
    width: 30px;
    height: 30px;
    flex-grow: 0;
    margin: 0 12px 0 0;
    object-fit: contain;
`;

export const MenuLogo = styled.img`
    width: 198px;
    height: 53px;
    flex-grow: 0;
    object-fit: contain;
`;

export const MenuIconTitle = styled.img`
    width: 15px;
    height: 21px;
    flex-grow: 0;
    margin: 8px 0 0 0;
    object-fit: contain;
`;
