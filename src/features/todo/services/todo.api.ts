import axios from "axios";
import { Todo } from "./todo.interface";

// Define the base URL for the API
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Fetch all Todos
export const fetchTodos = async (): Promise<Todo[]> => {
	const response = await axios.get<Todo[]>(API_URL);
	return response.data;
};

// Fetch a single Todo by ID
export const fetchTodoById = async (id: number): Promise<Todo> => {
	const response = await axios.get<Todo>(`${API_URL}/${id}`);
	return response.data;
};
