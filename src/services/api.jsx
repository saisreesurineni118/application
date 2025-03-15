import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const loginUser = (credentials) => API.post("/auth/login", credentials);
export const registerUser = (credentials) => API.post("/auth/register", credentials);
export const fetchTickets = () => API.get("/tickets");
export const createTicket = (data) => API.post("/tickets", data);

