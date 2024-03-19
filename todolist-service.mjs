import { json } from "stream/consumers";

export class TodoListService {
    todolist = ["Buy milk", "Buy bread", "Buy eggs"];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                };
            })
        });
    }

    getTodoList(req, res) {
        res.write(this.getJsonTodoList());
        res.end();
    }

}