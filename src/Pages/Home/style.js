import styled from 'styled-components';

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/images/bg1.png'), url('/images/bg2.png');
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 77px;
  height: 40px;
  font-family: 'Heebo', sans-serif;
  font-size: 28px;
  font-weight: 300;
  line-height: 40px;
  color: #333333;
`;

export const SupportDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-left: auto;
`;

export const PaginationDiv = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const LabelDiv = styled.div`
  display: flex;
`;
export const MyCard = styled.div`
  display: flex;
  max-width: 272px;
  max-height: 160px;
  background: white;
  padding: 19px 16px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  :hover {
    cursor: pointer;
    background: #e3e3e3;
  }
`;
export const InfosWrap = styled.div`
  height: 605px;
  width: 1136px;
  margin: 0 auto;
  margin-top: 42px;
`;

export const ClickDiv = styled.div`
  background: transparent;
  z-index: 1001;
`;

export const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 48px;
`;

export const DivImage = styled.div`
  width: 100%;
  max-width: 349px;
  height: 512.29px;
`;

export const InfosDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 349px;
`;

export const BookAuthors = styled.h1`
  font-size: 12px;
  font-weight: 400;
  font-family: 'Heebo', sans-serif;
  color: #ab2680;
`;

export const BookTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  font-family: 'Heebo', sans-serif;
  color: #333333;
`;
