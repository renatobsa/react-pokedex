
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 80px;
  display: grid;
  height:100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr 0.1fr 0.3fr 0.8fr;
  grid-template-areas:
    "nav nav"
    "sidebar main"
    "sidebar content"
    "contentStatus contentType"
    "contentEvolution contentEvolution"
    "footer footer";
  grid-gap: 20px;
  @media only screen and (max-width: 550px) {
    padding-right: 10px;
    padding-left: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "contentType"
      "contentStatus"
      "contentEvolution"
      "footer";
  
}
`
export const HeaderDetailPokemon = styled.div`
  grid-area: nav;
  text-transform: capitalize;
  text-align: center;  
  display: flex;
  align-items: center;
  justify-content: flex-start;

`
export const CardImgDetailPokemon = styled.div`
grid-area: sidebar;
align-items: center;
justify-content: center;
display: flex;
border-radius: 10px;
box-shadow: 2px 2px 10px -4px rgb(0 0 0 / 25%);
img{
    width: 300px;
}

`
export const CardDetailPokemon = styled.div`
  grid-area: main;
`
export const CardInfoPokemon = styled.div`
  padding: 10px 35px;
  border-radius: 10px;
  grid-area: content;
  background: #6b6b6b;
  color:#fff;
  font-weight: 800;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
`
export const CardInfoPokemonItem = styled.div`
    h2{
        font-weight: 700;
        color:#fff;
    }
    p{
        margin-bottom: 20px!important;
        color:#2a2a2a;
    }
`
export const CardStatusPokemon = styled.div`
  grid-area: contentStatus;
  text-transform: capitalize;
  padding-top: 35px;

`
export const CardTypesPokemon = styled.div`
  grid-area: contentType;

`
export const SubCardTypesPokemon = styled.div`
  display: flex;
  flex-direction: row;

`
export const CardTypesPokemonItem = styled.div`
  width: 20%;
  padding: 5px;
  height: 30px;
  margin:10px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  color:#fff;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
`
export const CardEvolutionPokemon = styled.div`
  grid-area: contentEvolution;
  h2{
        font-weight: 700;
        text-align: center;
  }

`
export const DivEvolutionFlex = styled.div`
display:flex;
flex-flow: row wrap;
justify-content: center;
text-align:center;

`;
export const CardEvolutionPokemonItem = styled.div`
  cursor: pointer;
  padding: 5px;
  height: 200px;
  margin:10px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  color:#fff;
  text-transform: capitalize;
  text-align: center;
  img{
    box-shadow: 0 5px 10px 0px #848282;
    border: 5px solid #848282;
    border-radius: 50%;
    margin: 0 auto;
    max-width: 135px;
    width: 100%;
  }
`
export const CardEvolutionPokemonItemTypes = styled.div`
  width: 50%;
  padding: 3px;
  height: 20px;
  margin:8px;
  font-weight: 600;
  font-size: 12px;
  border-radius: 5px;
  color:#fff;
  text-transform: capitalize;
  text-align: center;
`
export const FooterrDetailPokemon = styled.div`
  grid-area: footer;
  text-transform: capitalize;
  text-align: center;
`