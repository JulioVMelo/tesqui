import styled from 'styled-components';

export const Container = styled.section`
  width: 450px;
  margin: 40px auto;
  background-color: #fff;
  padding: 0px 0px;
  box-shadow: 0px 0px 10px #ddd;
`; 

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 0px 20px 0px 30px;

  &:hover {
    background-color: #f8f8f8;
  }

  div {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px 0px 0px;

    span {
      font-size: 19px;
      color: #373738;
    }

    input[type='checkbox']{
      width: 100px;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      appearance: none;
      display: inline-block;
      background: #cbd1d8;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: none;
      color: #fff;
      cursor: pointer;
      outline: none;
      transition: all 0.15s ease-out 0s;

      &:hover {
        background: #9faab7;
      }

      &:checked {
        background: #40e0d0;
      }
    }

  }

  img {
    width: 18px;
    cursor: pointer;
  }
`;
