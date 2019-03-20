import styled from 'styled-components';

export const Container = styled.section`
  width: 450px;
  margin: 40px auto;
  background-color: #fff;
  padding: 0px 0px;
  box-shadow: 0px 0px 10px #ddd;
  
  ul {
    li {
      color: #606475;
      font-size: 20px;
      padding: 30px 10px 30px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 85px;
      span {
        display: none;
      }

      &:hover {
        background-color: #f8f8f8;
        span {
          display: block;
          color: #e74c3c;
          font-size: 28px;
          cursor: pointer;
        }
      }
    }
  }
`; 
