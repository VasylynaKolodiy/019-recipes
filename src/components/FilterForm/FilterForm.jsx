import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
//_____________________________________________________________________________________
import './FilterForm.scss'
//_____________________________________________________________________________________

const FilterForm = ({searchValue, onChangeSearchValue}) => {

  const navigate = useNavigate();

  return (
    <form
      className='filterForm'
      onSubmit={(event) => event.preventDefault()}
    >

      <TextField
        className="filterForm__search"
        id="filterForm__search"
        label="Search field"
        type="search"
        value={searchValue}
        onChange={(e) => onChangeSearchValue(e.target.value)}
      />

      <Button
        className="filterForm__button"
        variant="outlined"
        onClick={() => navigate(`/search/${searchValue}`)}
        disabled={!searchValue}
      >
        Search
      </Button>


    </form>
  );
};

export default FilterForm;