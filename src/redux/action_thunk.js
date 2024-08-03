import axios from "axios";
import { loading, loadTodos, loadTodosErrors } from "./todoSlice";
export function getTodos() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      let res = await axios.get(
        "https://669b082e276e45187d347a71.mockapi.io/todos"
      );
      // console.log(res.data);
      dispatch(loadTodos(res.data));
    } catch (error) {
      dispatch(loadTodosErrors(error.message));
    } finally {
      dispatch(loading(false));
    }
  };
}
