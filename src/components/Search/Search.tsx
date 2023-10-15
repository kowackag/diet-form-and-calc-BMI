import React, { useState } from "react";
import {
  StyledSearch,
  SearchInput,
  Label,
  List,
  ListItem,
} from "./Search.styled";

const Search = ({ name, value, items, onChoose, onChange, isMutable }) => {
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
    <StyledSearch onClick={() => setIsActive(!isActive)}>
      <SearchInput
        value={value || ""}
        name={name}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={handleOnBlur}
        onChange={isMutable ? onChange : null}
        readOnly={isMutable ? false : true}
      />
      <Label></Label>
      <List
        active={isActive}
        onMouseOver={() => setIsOnMouse(true)}
        onMouseLeave={handleOnMouseLeave}
      >
        {copyItems.map((item: string) => (
          <ListItem key={item} onClick={onChoose} value={item} name={name}>
            {item}
          </ListItem>
        ))}
      </List>
    </StyledSearch>
  );
};

export default Search;
