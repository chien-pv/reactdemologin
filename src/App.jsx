import "./App.css";
import { lazy, Suspense } from "react";

import FormAdd from "./components/pages/form_add";
// import ListTodo from "./components/pages/list_todo";
import "./styles/index.scss";
import { useState, useRef, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const ListTodo = lazy(() => import("./components/pages/list_todo.jsx"));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <FormAdd />
        <Suspense fallback={<p>Loading</p>}>
          <ListTodo />
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
