import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function FormAdd() {
  return (
    <div className="form-add">
      <TextField size="small" id="outlined-controlled" label="Task Name" />
      <Button variant="outlined">Add Todo</Button>
    </div>
  );
}

export default FormAdd;
