import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import User from "../components/UserBoard";

export const useUser = (endpoint: string = "") => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios({
      method: "get",
      url: `https://randomuser.me/api/${endpoint}`,
      signal: controller.signal,
    })
      .then((res) => {
        const resultsArray = res.data.results;
        setUsers(resultsArray);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        else {
          console.error(error);
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return { users, isLoading };
};
