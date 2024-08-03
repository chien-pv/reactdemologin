import ItemTodo from "./item_todo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../redux/action_thunk";
import Alert from "@mui/material/Alert";

function ListTodo() {
  let dispatch = useDispatch();
  let { dataTodo, isLoading, messageErrors } = useSelector(
    (state) => state.todos
  );

  let users = useSelector((state) => state.users.dataUser);

  console.log("todo Redux ", dataTodo);
  console.log("user Redux ", users);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  let datas = dataTodo.map((item) => <ItemTodo key={item.id} {...item} />);
  return (
    <>
      {messageErrors && <Alert severity="error">{messageErrors}</Alert>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Task Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && <span className="loader"></span>}
            {datas}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ListTodo;
