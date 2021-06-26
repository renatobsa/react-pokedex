import { createGlobalStyle,keyframes } from 'styled-components';


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
 box-sizing: border-box;
 
}

body,h2,p,h3,h6{
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #6b6767;
}
.bg-grass{
    background:#35C04A;
  }
.bg-fire{
    background:#FF983F;
  }
  .bg-water{
    background:#3393DD;
  }
  .bg-electric{
    background:#FBD200;
  }
  .bg-ground{
    background:#E97333;
  }
  .bg-poison{
    background:#B667CF;
  }
  .bg-dark{
    background:#5B5366;
  }
  .bg-psychic{
    background:#FF6676;
  }
  .bg-gray{
    background:#d3d3d3;
  }
  .bg-bug{
    background:#84C400;
  }
  .bg-ghost{
    background:#4B6AB3;
  }
  .bg-fighting{
    background:#E12C6A
  }
  .bg-ice{
    background:#4BD2C1;
  }
  .bg-dragon{
    background:#0070CA;
  }
  .bg-fairy{
    background:#FB8AEC
  }
  .bg-steel{
    background:#598FA3
  }
  .bg-rock{
    background:#C9B787
  }
  .bg-normal{
    background:#929BA3
  }
  .bg-flying{
    background-color: #8AABE4;
  }
  .bg-white{
    background:#fff;
    color:#ccc;
    * {
      color:#ccc !important;
      ::after{
        color:#ccc;
      }
    }
  }
  .bg-all{
    background:#999;
    color:#fff;
  }
  *, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.loading{
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 99;
    display:flex;
    justify-content: center;
    align-items: center;
}
.rotate {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}


`;
