import React, { useState } from "react";
import { StyledSearch, SearchInput, ListItem } from "./Search.styled";

export const Search = ({ name, value, items, register, isMutable }) => {
  const [isActive, setIsActive] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isOnMouse, setIsOnMouse] = useState(false);

  const copyItems = isMutable
    ? items.filter((item: string) => item.includes(value))
    : items;

  const handleOnBlur = () => {
    setIsFocus(false);
    isOnMouse || setIsActive(false);
  };

  const handleOnMouseLeave = () => {
    setIsOnMouse(false);
    isFocus || setIsActive(false);
  };

  return (
    <StyledSearch>
      <SearchInput {...register(name)} name={name}>
        <ListItem disabled selected value="">
          ---wybierz---
        </ListItem>
        {items.map((item: string) => (
          <ListItem key={item} value={item}>
            {item}
          </ListItem>
        ))}
      </SearchInput>
    </StyledSearch>
  );
};
