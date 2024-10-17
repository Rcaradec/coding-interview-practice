import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

export type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  login: {
    uuid: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios({
      method: "get",
      url: `https://randomuser.me/api`,
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

  return { users, setUsers, isLoading };
};
