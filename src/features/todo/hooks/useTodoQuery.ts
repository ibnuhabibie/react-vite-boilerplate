import { useQuery, QueryKey } from "@tanstack/react-query";
import { fetchTodos } from "../services/todo.api";
import { Todo } from "../services/todo.interface";

// Custom hook to get all Todos
export const useTodoQuery = () => {
	return useQuery<Todo[], Error>({
		queryKey: ["todos"] as QueryKey,
		queryFn: fetchTodos,
		staleTime: 1000 * 60 * 5,
	});
};
