import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import {
  addPost,
  deletePost,
  addSelectedPost,
  clearSelectedPost,
} from "../redux/posts/actions";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import * as ApiManager from "../api/api";
import { Post } from "../redux/posts/types";

const mapStateToProps = (state: RootState) => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  addPost,
  deletePost,
  addSelectedPost,
  clearSelectedPost,
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Posts = (props: Props) => {
  const columns: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      description: "This column is not sortable.",
      width: 160,
      sortable: false,
      renderCell: (params) => {
        const handleOnClick = () => {
          const api = params.api;
          const fields = api
            .getAllColumns()
            .map((c: any) => c.field)
            .filter((c: any) => c !== "__check__" && !!c);
          const thisRow: any[] = [];

          fields.forEach((f: any) => {
            thisRow[f] = params.getValue(f);
          });
          sessionStorage.setItem(
            "selectedItem",
            JSON.stringify(thisRow, null, 4)
          );
        };
        return (
          <Grid container direction="row" justify="flex-start" spacing={2}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Tooltip title="Edit">
                <IconButton onClick={() => handleOnClick()}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Tooltip title="Delete">
                <IconButton onClick={() => handleOnClick()} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        );
      },
    },
    { field: "id", headerName: "ID", type: "number", width: 80 },
    { field: "userId", headerName: "User ID", type: "number", width: 120 },
    { field: "title", headerName: "Title", type: "string", width: 320 },
    { field: "body", headerName: "Content", type: "string", width: 320 },
  ];

  const rows = props.posts.posts;

  useEffect(() => {
    ApiManager.getPosts()
      .then((response: any) => {
        response.data.map((post: Post) => {
          const newPost: Post = {
            id: post.id,
            userId: post.userId,
            title: post.title,
            body: post.body,
          };
          props.addPost(newPost);
        });
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container direction="column">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Tooltip title="Add">
          <IconButton onClick={() => console.log("clicked")} color="primary">
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
