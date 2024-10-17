import axios from "axios";
import { User } from "./useUser";

export const fetchMoreUsers = async (endpoint: string, users: User[]) => {
  const controller = new AbortController();
  try {
    const response = await axios.get(`https://randomuser.me/api${endpoint}`, {
      signal: controller.signal,
    });
    return [...users, ...response.data.results];
  } catch (error) {
    if (error instanceof AbortController) return;
    else console.error(error);
  }
  return controller.abort();
};
