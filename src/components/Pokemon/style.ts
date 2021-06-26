import styled from 'styled-components';


export const Card = styled.div`
width:100%;
height:250px;
display:flex;
flex-direction:column;
position:relative;
cursor: pointer;
&:hover {
    transform: scale(1.05);
    transition-duration: 200ms;
    > img {
      margin-top: -20px;
      transform: scale(1.15);
      transition-duration: 300ms;
    }
}
`
export const ImgPokemon = styled.img`
width: 160px;
margin: 0 auto;
z-index: 2;
-webkit-filter: drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black);
filter:drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black);
`
export const SubCard = styled.div`
border-radius: 10px;
box-shadow:2px 2px 10px -4px rgba(0, 0, 0, 0.25);
background: #f1f1f1;
padding:15px;
position: absolute;
width: 100%;
margin-top: 100px;
padding-top: 15px;
min-height: 140px;

`
export const BoxTypes = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Name = styled.div`
  text-transform: capitalize;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #fff;
  }
  div {
    margin-left: 10px;
    text-align: right;
    margin-right: 0;
    margin-top: 7px;
  }
`;
export const Id = styled.div`
  font-size: 22px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  z-index: 2;
  letter-spacing: 0.25px;
`;

export const Info = styled.div`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  font-size: 14px;
  color: #fff;
  padding: 2px 6px 3px 6px;
  display: inline-flex;
  margin-right: 10px;
  margin-top: 3px;
`;
export const PokeBallBg = styled.div`
padding-top: 50px;
right:0;
position: absolute;
display: flex;
flex-direction: column;
align-items: flex-end;
img{
    width: 40%;
}
`;