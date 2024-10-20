import React, { useEffect, useState } from "react";

import {
  Autocomplete,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash/debounce";

const users = [
  { firstName: "John", id: 1 },
  { firstName: "Emily", id: 2 },
  { firstName: "Michael", id: 3 },
  { firstName: "Sarah", id: 4 },
  { firstName: "David", id: 5 },
  { firstName: "Jessica", id: 6 },
  { firstName: "Daniel", id: 7 },
  { firstName: "Olivia", id: 8 },
  { firstName: "Matthew", id: 9 },
  { firstName: "Sophia", id: 10 },
];

const SearchInput = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const debounceHandleInputChange = debounce((value: string) => {
    setSearchItem(value);
  }, 300);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    debounceHandleInputChange(event.target.value);

  useEffect(() => {
    const filteredItems = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredUsers(filteredItems);
  }, [searchItem]);

  return (
    <>
      <FormControl
        fullWidth
        sx={{ maxWidth: 600, minWidth: "200px" }}
        variant="standard"
      >
        <Autocomplete
          freeSolo
          options={filteredUsers.map((user) => user.firstName)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Recherchez ..."
              variant="outlined"
              onChange={handleInputChange}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </FormControl>
    </>
  );
};

export default SearchInput;
