import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #7059c1;
  height: 100%;
  padding: 0px 20px;
  position: absolute;
  right: 0px;
  color: #fff;

  .dateMain {
    font-weight: 400;
    font-size: 45px;
    margin-right: 10px;
  }

  .dateComplement {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .dayName {
      font-size: 18px;
      font-weight: 400;
    }
    .monthAndYear {
      font-size: 15px;
    }
  }
`;
