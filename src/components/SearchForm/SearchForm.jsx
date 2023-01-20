import React from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
//_____________________________________________________________________________________
import './SearchForm.scss'
//_____________________________________________________________________________________

const SearchForm = ({searchValue='', onChangeSearchValue}) => {

  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`)
  }

  return (
    <form
      className='searchForm'
      onSubmit={(event) => onSubmitForm(event)}
    >

      <TextField
        className="searchForm__search"
        id="searchForm__search"
        label="Search field"
        type="search"
        value={searchValue}
        onChange={(e) => onChangeSearchValue(e.target.value)}
      />

      <Button
        className="searchForm__button"
        variant="outlined"
        type='submit'
        disabled={!searchValue}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;