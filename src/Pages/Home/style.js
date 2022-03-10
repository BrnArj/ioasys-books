import styled from 'styled-components';

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/images/bg1.png'), url('/images/bg2.png');
  background-blend-mode: darken;
  transform: matrix(1, 0, 0, -1, 0, 0), rotate(-180deg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  @media (max-width: 1279px) {
    max-width: 100% !important;
    height: 1934px !important;
  }
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
  @media (max-width: 1279px) {
    margin-left: 135px;
  }
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
  @media (max-width: 1279px) {
    max-width: 288px;
    margin-left: 26px;
  }
`;
export const AllInfosWrapper = styled.div`
  height: 605px;
  width: 1136px;
  margin: 0 auto;
  margin-top: 42px;
  @media (max-width: 1279px) {
    width: auto;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 48px;
  padding-right: 0;
  @media (max-width: 1279px) {
    width: 288px;
    height: 970px;
    flex-direction: column;
    padding: 0;
  }
`;

export const DivImage = styled.img`
  width: 100%;
  max-width: 349px;
  height: 512.29px;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
  @media (max-width: 1279px) {
    max-width: 240px !important;
    height: 351px !important;
  }
`;

export const DetailsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 276px;
  height: 512.29px;
  margin-left: 48px;
  @media (max-width: 1279px) {
    max-width: 240px !important;
    height: 300px !important;
    margin: 0;
    margin-left: 24px;
  }
`;

export const BookAuthors = styled.h1`
  font-size: 12px;
  font-weight: 400;
  font-family: 'Heebo', sans-serif;
  color: #ab2680;
  text-align: left;
  margin: 0;
  margin-left: 0;
  margin-right: auto;
  text-align: left;
  margin-bottom: 32px;
`;

export const BookTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  font-family: 'Heebo', sans-serif;
  color: #333333;
  margin: 0;
  margin-left: 0;
  margin-right: auto;
  text-align: left;
  @media (max-width: 1279px) {
    margin-top: 24px;
  }
`;

export const BookInfosDiv = styled.div`
  display: flex;
  width: 276px;
  justify-content: space-between;
  margin-bottom: 5px;
  @media (max-width: 1279px) {
    max-width: 240px;
  }
`;

export const InfosLabel = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #333333;
`;
export const InfosTypeLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  color: #999999;
`;

export const AllBookDetailsWrapper = styled.div`
  width: 100%;
  @media (max-width: 1279px) {
    height: 300px !important;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  max-width: 200px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1279px) {
    margin-left: 16px;
  }
`;

export const WelcomeHeaderDiv = styled.div`
  display: flex;
  max-width: 1136px;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #333333;
  font-family: 'Heebo', sans-serif;
  margin-left: auto;
  @media (max-width: 1279px) {
    display: none;
  }
`;

export const NameLabel = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #333333;
  font-family: 'Heebo', sans-serif;
  @media (max-width: 1279px) {
    display: none;
  }
`;

export const LogoutButton = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 16px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1279px) {
    margin-right: 16px;
  }
`;
