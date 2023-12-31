import React, { useState } from "react";
import {
  StyledSearch,
  SearchInput,
  ListItem,
} from "./Search.styled";

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
        <ListItem value=""></ListItem>
        <ListItem value="kobieta">kobieta</ListItem>
        <ListItem value="mężczyzna">mężczyzna</ListItem>
      </SearchInput>
    </StyledSearch>
  );
};
