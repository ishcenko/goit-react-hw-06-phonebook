import styled from 'styled-components';

export const Div = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const Button = styled.button`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background: rgb(235, 244, 106);
  border: none;
  border-radius: 20px;
  width: 150px;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 50px;

  margin-left: 120px;
  text-align: center;
  /* justify-content: center; */
  /* margin: 30px auto 50px; */
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(232, 12, 12);
  padding: 10px 20px;
  transition: all 1000ms ease 0s;
  cursor: pointer;
  &:hover {
    outline: none;
    border-color: rgb(255, 0, 0);
    box-shadow: rgba(144, 247, 10, 0.61) 0px 0px 21px 14px;
    background: rgb(14, 245, 14);
  }
`;

export const Input = styled.input`
  border: 1px solid rgba(237, 145, 145, 0.392);
  border-radius: 4px;
  height: 37px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  cursor: pointer;
  background: linear-gradient(45deg, rgb(245, 214, 121), rgb(243, 150, 122));
  -webkit-box-align: center;
  &:hover {
    border-color: #c34a4a;
    outline: none;
  }
`;
export const Form = styled.form`
  width: 30%;
`;
export const Label = styled.label`
  display: block;
  padding-bottom: 10px;
`;
