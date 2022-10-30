import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #1d304e;
  /* background-color: inherit; */
  padding: 0 40px;
  z-index: 999;

  button {
    height: 36px;
    background-color: inherit;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 19px;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: #ab5252;
      scale: 1.04;
    }
  }

  .loginBtn {
  }

  .dashboardBtn {
  }
`
