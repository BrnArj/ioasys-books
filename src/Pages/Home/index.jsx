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
  InfosWrap,
  BookTitle,
  ModalWrapper,
  DivImage,
  InfosDiv,
  BookAuthors,
} from './style';
import { MyAPI } from '../../middleware/API';
import axios from 'axios';

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

  console.log(clickedId);
  return (
    <MainDiv>
      <InfosWrap>
        <Grid container spacing={2}>
          <Grid item lg={'auto'}>
            <img src="/images/logo2.svg" alt="" />
          </Grid>
          <Grid item lg={'auto'}>
            <Label>Books</Label>
          </Grid>
        </Grid>
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
                    }}
                  >
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 768,
                        height: 608,
                        backgroundColor: '#FFFFFF',
                        outline: 'none',
                      }}
                    >
                      <ModalWrapper>
                        <DivImage>
                          <img src={item.imageUrl} alt="book" />
                        </DivImage>
                        <InfosDiv>
                          <BookTitle>{item.title}</BookTitle>
                          <BookAuthors>{item.authors}</BookAuthors>
                        </InfosDiv>
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
              style={{ textOverflow: 'clip' }}
            />
          </SupportDiv>
        </Grid>
      </InfosWrap>
    </MainDiv>
  );
}

export default Home;
