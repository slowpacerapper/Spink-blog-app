import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  MyArticleTitle,
  MyArticleText,
  MyArticleImage,
  MyCommentDate,
  MyCommentText,
  LikeButton,
} from "../../styles/MyArticles/Articles.styled";
import { useRouter } from "next/router";
import Child from "../../components/ChildComponent/Child";
import { categoriesDb } from "../../utils/categoriesDB";
import { useMediaQuery } from "@mui/material";
import Comment from "../../components/Comment/Comment";

const Articles = () => {
  const router = useRouter();
  const article = parseInt(router.query.articleId);
  const [specificDb, setSpecificDb] = useState([]);
  const matches = useMediaQuery("(min-width:850px)");

  const [comments, setComments] = useState([]);

  const handleSubmit = (e, commnt, date) => {
    e.preventDefault();
    setComments((prev) => {
      return [
        {
          id: article + commnt.slice(0, 18),
          message: commnt,
          createdAt: date.toDateString(),
          likes: 0,
        },
        ...prev,
      ];
    });
  };

  const related = categoriesDb
    .filter((art) => art.id === article)
    .map((arti) => {
      return arti.category;
    });

  useEffect(() => {
    const data = localStorage.getItem("Comments");
    if (data) {
      const raw = JSON.parse(data);
      setComments(raw);
    }
  }, []);

  useEffect(() => {
    if (comments.length >= 1) {
      localStorage.setItem("Comments", JSON.stringify(comments));
    } else {
      return;
    }
  }, [comments]);

  useEffect(() => {
    const specificItem = categoriesDb.filter((x) => x.id === article);
    setSpecificDb(specificItem);
  }, [article]);

  const likeHandler = (payload) => {
    const checker = comments.find((x) => x.id === payload);
    if (checker)
      setComments((prev) => {
        return prev.map((x) => {
          if (x.id === payload) {
            return {
              ...x,
              likes: x.likes + 1,
            };
          }
          return x;
        });
      });
  };

  return (
    <Grid sx={{ paddingTop: "5rem" }} container gap={4}>
      {specificDb.map((artic) => {
        return (
          <>
            <Grid
              item
              xs={10}
              direction="row"
              justifyContent="center"
              sx={{ margin: "0 auto", padding: " 0 1rem" }}
            >
              <MyArticleTitle>{artic.title}</MyArticleTitle>
            </Grid>
            <CardContent
              sx={
                matches
                  ? {
                      position: "relative",
                      width: "100vw",
                      height: "500px",
                      margin: "0 auto",
                    }
                  : {
                      position: "relative",
                      width: "100vw",
                      maxHeight: "500px",
                      margin: "0 auto",
                      overflow: "hidden",
                    }
              }
            >
              <MyArticleImage
                src={artic.image}
                layout={matches ? "fill" : "responsive"}
                objectFit="contain"
                sizes="20vw"
              />
            </CardContent>

            <Grid item xs={10} sx={{ margin: "0 auto" }}>
              <MyArticleText>{artic.story}</MyArticleText>
            </Grid>

            <Grid item xs={10} sx={{ margin: "0 auto" }}>
              <MyArticleText>Created: {artic.createdAt} </MyArticleText>
            </Grid>

            <Grid item xs={10} sx={{ margin: "0 auto" }}>
              <MyArticleText
                sx={{
                  textAlign: "center",
                  border: "0.2px solid #888888",
                  borderRadius: "5px",
                  margin: "0 auto",
                  width: "max-content",
                  wordWrap: "normal",
                  padding: "0.25rem 1.25rem",
                }}
              >
                Author: {artic.author}{" "}
              </MyArticleText>
            </Grid>
          </>
        );
      })}

      <Grid container item gap={4}>
        <MyArticleTitle>Related Posts</MyArticleTitle>
        <Grid container direction="row" justifyContent="center" gap={5}>
          {categoriesDb
            .filter((item) => item.id !== article)
            .filter((child) => child.category === related[0])
            .map((child) => {
              return (
                <Grid item md={5} key={child.id}>
                  <Child
                    key={child.id + child.image}
                    id={child.id}
                    title={child.title}
                    createdAt={child.createdAt}
                    image={child.image}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
      <Grid container item gap={4}>
        <MyArticleTitle>Other Posts</MyArticleTitle>
        <Grid container direction="row" justifyContent="center" gap={5}>
          {categoriesDb
            .filter((item) => item.type === "main")
            .filter((child) => child.category !== related[0])
            .map((child) => {
              return (
                <Grid item md={5} key={child.id}>
                  <Child
                    key={child.id + child.image}
                    id={child.id}
                    title={child.title}
                    createdAt={child.createdAt}
                    image={child.image}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
      <Grid container item xs={10} sx={{ margin: "2rem auto" }}>
        <Grid container item xs={12}>
          <MyArticleTitle>Comments Section</MyArticleTitle>
        </Grid>
        <Comment
          article={article}
          comments={comments}
          setComments={setComments}
          handleSubmit={handleSubmit}
        />
      </Grid>
      <Grid container item xs={10} sx={{ margin: "2rem auto" }} gap={3}>
        {comments.length >= 1 &&
          comments.map((comment, index) => {
            return (
              <Card
                key={index}
                elevation={8}
                style={{
                  width: "90%",
                  margin: "0 auto",
                  padding: "1rem",
                  backgroundColor: "transparent",
                }}
              >
                <Grid xs={10}>
                  <MyCommentDate>{comment.createdAt}</MyCommentDate>
                </Grid>
                <Grid xs={10}>
                  <MyCommentText>{comment.message}</MyCommentText>
                </Grid>
                <Grid>
                  <LikeButton
                    onClick={() => likeHandler(comment.id)}
                    variant="outlined"
                  >
                    Like {comment.likes !== 0 && comment.likes}
                  </LikeButton>
                </Grid>
              </Card>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default Articles;
