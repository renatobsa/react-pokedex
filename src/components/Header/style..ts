import styled from 'styled-components';


export const HeaderNav = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:transparent;
    transition: all ease 0.5s;

    &.white{
    background-color: #6b6767;
    box-shadow: 2px 2px 10px -4px rgba(0,0,0,0.25);

    }
    .header--logo{
        height:60px;
        padding: 5px;
        display:flex;
        flex-direction: row;
        justify-content:center;
        align-content:center;
        h1{
            margin: auto;
            color: #141414;
            font-weight: 700;
        }
        img{
    height:100%;
}

    } 
`
