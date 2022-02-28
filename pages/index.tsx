import Link from "next/link";
import { Todo } from "../utils/types";

interface IndexProps {
  todos: Array<Todo>;
}

function Index(props: IndexProps) {
  const { todos } = props;

  return (
    <div>
      <h1>My Todo List</h1>
      <h2>Click On Todo to see it individually</h2>
      {todos.map((todo) => (
        <div key={todo._id}>
          <Link href={`/todos/${todo._id}`}>
            <h3 style={{ cursor: "pointer" }}>
              {todo.item} - {todo.completed ? "completed" : "incomplete"}
            </h3>
          </Link>
        </div>
      ))}
      <Link href="/todos/create">
        <button>Create a New Todo</button>
      </Link>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL as string);
  const todos = await res.json();

  return {
    props: { todos },
  };
}

export default Index;
