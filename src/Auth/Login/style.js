import styled from 'styled-components';

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/images/bgimage.jpg');
  display: flex;
  justify-content: left;
  align-items: center;
  background-size: cover;
  @media (max-width: 1279px) {
    background-image: url('/images/mobilebg.png');
  }
`;
export const Button = styled.button`
  width: 120px;
  height: 36px;
  background: #ffffff;
  font-family: 'Heebo', sans-serif;
  font-size: 16px;
  border-radius: 44px;
  border: none;
  color: #b22e6f;
  font-weight: 700;
  padding: 0;
  :hover {
    cursor: pointer;
  }
`;

export const Label = styled.label`
  width: 77px;
  height: 40px;
  font-family: 'Heebo', sans-serif;
  font-size: 28px;
  font-weight: 300;
  line-height: 40px;
  color: #ffffff;
`;
