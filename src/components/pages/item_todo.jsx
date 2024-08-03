import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/todoSlice";
function ItemTodo({ id, taskName }) {
  let dispatch = useDispatch();
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="right">{id}</TableCell>
        <TableCell align="right">{taskName}</TableCell>
        <TableCell align="right">
          <Button variant="outlined" color="success">
            <EditNoteIcon />
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteTodo(id));
            }}
            variant="outlined"
            color="error"
          >
            <DeleteOutlineIcon />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ItemTodo;
