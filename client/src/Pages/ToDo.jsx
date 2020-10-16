import { update } from "lodash";
import React from "react";
const Todo = () => {
  const [todo, setTodo] = React.useState([
    {
      id: 1,
      msg: "این یک متن آزمایشی است !",
      isComplete: false,
    },
  ]);
  const [data, setdata] = React.useState("");
  const _handleComplete = async (id) => {
    const update = todo.map((item) => {
      if (item.id === id) item.isComplete = true;
      return item;
    });

    setTodo(update);

    console.log("update : ", update);
  };

  const _handleDelete = (id) => {
    const filter = todo.filter((item) => item.id !== id);
    setTodo(filter);
  };

  const _handleSubmit = () => {
    if (data.trim().length !== 0) {
      setTodo([
        ...todo,
        {
          id: todo.length + 1,
          msg: data,
        },
      ]);
      setdata("");
    } else alert("لطفا یه چیزی بنویس !");
  };
  const _handleInput = (e) => {
    e.preventDefault();
    const user_data = e.target.value;
    setdata(user_data);
  };

  return (
    <>
      <div className="todo">
        <div className="todo_row">
          <nav className="todo_row_nav">
            <p>ثبت فعالیت های روزانه</p>
          </nav>
          <div className="todo_row_form">
            <input
              type="submit"
              value="+"
              id="todo_btn"
              onClick={() => _handleSubmit()}
            />
            <input
              type="text"
              name="todo_content"
              id="todo_content"
              required
              onChange={_handleInput}
              value={data}
            />
          </div>
          <nav className="todo_row_content">
            <ul>
              {todo.length !== 0 && todo ? (
                todo.map((item) => (
                  <div
                    key={item.id}
                    className="Message"
                    style={{
                      backgroundColor:
                        item.id % 2 == 0
                          ? item.isComplete
                            ? "black"
                            : "red"
                          : item.isComplete
                          ? "black"
                          : "blue",
                    }}
                  >
                    <button
                      className="delete"
                      onClick={() => _handleDelete(item.id)}
                    >
                      حذف
                    </button>

                    <button
                      className={
                        item.isComplete == true ? "Inactive" : "complete"
                      }
                      onClick={() => _handleComplete(item.id)}
                    >
                      انجام شد
                    </button>

                    <p>{item.msg}</p>
                  </div>
                ))
              ) : (
                <div className="Message">
                  <h2>اووووووووپس ، هیچ یادداشتی نیست !</h2>
                </div>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Todo;
