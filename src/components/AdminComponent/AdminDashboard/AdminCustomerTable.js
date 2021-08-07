import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { Link } from "react-router-dom";

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "userName", label: "UserName", minWidth: 100 },
  { id: "updateID", label: "", minWidth: 100 },
  { id: "deleteID", label: "", minWidth: 100 },
];

function createData(id, userName, updateID, deleteID) {
  return { id, userName, updateID, deleteID };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function AdminCustomerTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [memberList, setmemberList] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  function getAllData() {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/member", config)
      .then((res) => {
        setmemberList(res.data);
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  }

  function deleteMember(value) {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .delete(
        process.env.REACT_APP_BACKEND_URL + "/api/member/" + value,
        config
      )
      .then(() => {
        //re-render again
        getAllData();
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  }

  //map table row data
  const rows = memberList.map((member) => {
    return createData(member.id, member.userName, member.id, member.id);
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "deleteID" ? (
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => {
                                deleteMember(value);
                              }}
                            >
                              Remove
                            </button>
                          ) : column.id === "updateID" ? (
                            <Link
                              to={{
                                pathname: `/editmember`,
                                data: value,
                              }}
                              class="btn btn-warning btn-sm" //change btn icon
                            >
                              Edit
                            </Link>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
