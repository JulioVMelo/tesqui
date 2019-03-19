import styled from 'styled-components';

export const HeaderUi = styled.header`
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: #15243A;
  width: 100%;
  position: relative;
  height: 80px;

  @media screen and (max-width:600px){
    justify-content: flex-start;
  }
`;

export const Logo = styled.span` 
  color: #FBD54A;
  font-size: 30px;
  font-family: 'Open Sans', sans-serif;
  
  @media screen and (max-width:600px){
    padding-left: 20px;
  }
`;
