import styled from 'styled-components';

export const Item = styled.li`
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #070707;
    font-size: 20px;
    padding-left: 25px;
    justify-content: space-between;
  }

  button {
    padding: 6px 12px;
    /* margin-left: 10px; */
    background: #c00;
    color: #0e0e0e;
    border: 1px solid black;
    border-radius: 8px;
    width: 75px;

    &hover {
      background-color: #f00;
      color: white;
    }
    &active {
      transform: scale(1.1);
    }
  }
`;
