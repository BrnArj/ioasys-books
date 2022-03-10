import React, { useState, useEffect } from 'react';
import {
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
  PaginationItem,
  Box,
  Modal,
} from '@mui/material';
import './global.css';
import {
  MainDiv,
  Label,
  SupportDiv,
  MyCard,
  AllInfosWrapper,
  BookTitle,
  ModalWrapper,
  DivImage,
  DetailsDiv,
  BookAuthors,
  BookInfosDiv,
  InfosTypeLabel,
  InfosLabel,
  AllBookDetailsWrapper,
  HeaderDiv,
  WelcomeHeaderDiv,
  NameLabel,
  WelcomeLabel,
  LogoutButton,
} from './style';
import { MyAPI } from '../../middleware/API';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [open, setOpen] = React.useState(true);
  const [books, setBooks] = useState();
  const [page, setPage] = React.useState(1);
  const [clickedId, setClickedId] = React.useState();
  const [modalKey, setModalKey] = React.useState(null);

  const handleOpen = (e) => {
    setClickedId(e.target.id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const LoginData = JSON.parse(localStorage.getItem('LoginData'));

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    localStorage.clear();
  };

  const AuthStr = 'Bearer '.concat(LoginData.headers.authorization);
  useEffect(() => {
    MyAPI.get(`/books?page=${page}&amount=12`, {
      headers: {
        Authorization: AuthStr,
      },
    }).then((response) => {
      setBooks(response.data.data);
    });
  }, [page]);

  useEffect(() => {
    MyAPI.get(`https://books.ioasys.com.br/api/v1/books/${clickedId}`, {
      headers: {
        authorization: AuthStr,
      },
    }).then((response) => {
      console.log(response.data.data);
    });
  }, [clickedId]);

  return (
    <MainDiv>
      <AllInfosWrapper>
        <WelcomeHeaderDiv
          style={{
            fontSize: 12,
            fontWeight: 500,
            fontFamily: 'Heebo, sans-serif',
            color: '#333333',
          }}
        >
          <HeaderDiv>
            <img src="/images/logo2.svg" alt="logo" />
            <Label style={{ marginLeft: 16.6 }}>Books</Label>
          </HeaderDiv>
          <WelcomeLabel>Bem vindo,</WelcomeLabel>
          <NameLabel style={{ marginLeft: 3 }}>{LoginData.data.name}</NameLabel>
          <LogoutButton
            src="/images/logout.svg"
            alt="button"
            onClick={handleLogout}
          />
        </WelcomeHeaderDiv>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {books &&
            books.map((item, key) => {
              return (
                <Grid item lg={3} xs={12} key={item.id}>
                  <MyCard
                    class="card"
                    id={item.id}
                    key={key}
                    onClick={handleOpen}
                  >
                    <CardMedia
                      component="img"
                      image={item.imageUrl}
                      style={{ width: 81, height: 118.54 }}
                      id={item.id}
                    />
                    <CardContent className="cardContent" id={item.id}>
                      <Typography
                        fontWeight="700"
                        fontSize="14px"
                        variant="h6"
                        color="#333333;"
                        fontFamily="Heebo, sans-serif;"
                        lineHeight="20px"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        fontSize="12px"
                        variant="subtitle2"
                        color="#AB2680"
                        fontFamily="Heebo, sans-serif;"
                        lineHeight="20px"
                      >
                        {item.authors[0]}
                      </Typography>
                      <Typography
                        fontSize="12px"
                        variant="body1"
                        color="#999999;"
                        fontFamily="Heebo, sans-serif;"
                        lineHeight="20px"
                      >
                        {item.pageCount} páginas
                        <br />
                        Editora {item.publisher}
                        <br />
                        Publicado em {item.published}
                      </Typography>
                    </CardContent>
                  </MyCard>
                  <Modal
                    id="modal"
                    key={key}
                    open={clickedId === item.id ? open : null}
                    onClose={handleClose}
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'scroll',
                    }}
                  >
                    <Box className="box">
                      <ModalWrapper>
                        <DivImage src={item.imageUrl} alt="book" />
                        <AllBookDetailsWrapper>
                          <DetailsDiv>
                            <BookTitle>{item.title}</BookTitle>
                            <BookAuthors>{item.authors.join(', ')}</BookAuthors>
                            <div>
                              <BookInfosDiv>
                                <InfosLabel style={{ marginBottom: 10 }}>
                                  INFORMAÇÕES
                                </InfosLabel>
                              </BookInfosDiv>
                              <BookInfosDiv>
                                <InfosLabel>Páginas</InfosLabel>
                                <InfosTypeLabel>
                                  {item.pageCount} páginas
                                </InfosTypeLabel>
                              </BookInfosDiv>
                              <BookInfosDiv>
                                <InfosLabel>Editora</InfosLabel>
                                <InfosTypeLabel>
                                  {item.publisher}
                                </InfosTypeLabel>
                              </BookInfosDiv>
                              <BookInfosDiv>
                                <InfosLabel>Publicação</InfosLabel>
                                <InfosTypeLabel>
                                  {item.published}
                                </InfosTypeLabel>
                              </BookInfosDiv>
                              <BookInfosDiv>
                                <InfosLabel>Idioma</InfosLabel>
                                <InfosTypeLabel>{item.language}</InfosTypeLabel>
                              </BookInfosDiv>
                              <BookInfosDiv>
                                <InfosLabel>Título Original</InfosLabel>
                                <InfosTypeLabel>{item.title}</InfosTypeLabel>
                              </BookInfosDiv>
                              <BookInfosDiv>
                                <InfosLabel>ISBN-10</InfosLabel>
                                <InfosTypeLabel>{item.isbn10}</InfosTypeLabel>
                              </BookInfosDiv>
                              <BookInfosDiv>
                                <InfosLabel>ISBN-13</InfosLabel>
                                <InfosTypeLabel>{item.isbn13}</InfosTypeLabel>
                              </BookInfosDiv>
                              <BookInfosDiv>
                                <InfosLabel style={{ marginTop: 32 }}>
                                  RESENHA DA EDITORA
                                </InfosLabel>
                              </BookInfosDiv>
                              <BookInfosDiv>
                                <InfosTypeLabel
                                  style={{
                                    marginTop: 5,
                                    maxHeight: 170,
                                    textAlign: 'justify',
                                  }}
                                >
                                  {item.description}
                                </InfosTypeLabel>
                              </BookInfosDiv>
                            </div>
                          </DetailsDiv>
                        </AllBookDetailsWrapper>
                      </ModalWrapper>
                    </Box>
                  </Modal>
                </Grid>
              );
            })}
          <SupportDiv>
            <Typography
              fontSize="12px"
              fontFamily="Heebo, sans-serif;"
              lineHeight="20px"
              color="#333333;"
              style={{ fontWeight: 700 }}
            >
              Página {page} de 42
            </Typography>
            <Pagination
              variant="outlined"
              count={42}
              onChange={handleChange}
              size="medium"
              siblingCount={-4}
              boundaryCount={0}
              renderItem={(item) => {
                return item.type === 'end-ellipsis' ||
                  item.type === 'start_ellipsis' ? null : (
                  <PaginationItem {...item} />
                );
              }}
            />
          </SupportDiv>
        </Grid>
      </AllInfosWrapper>
    </MainDiv>
  );
}

export default Home;
