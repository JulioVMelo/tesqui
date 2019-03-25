import styled from 'styled-components';

export const HeaderUi = styled.header`
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: #15243A;
  width: 100%;
  position: relative;
  height: 80px;

  img {
    width: 140px;

    @media screen and (max-width:600px){
      padding-left: 20px;
    }
  }

  @media screen and (max-width:600px){
    justify-content: flex-start;
  }
`;
