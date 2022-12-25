import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
//_____________________________________________________________________________________
import './FilterForm.scss'
//_____________________________________________________________________________________

const FilterForm = () => {

  const [searchValue, setSearchValue] = useState('')
  console.log(searchValue, 'searchValue')

  return (
    <form className='filterForm' onSubmit={(event ) => event.preventDefault()}>

      <TextField
        className="filterForm__search"
        id="filterForm__search"
        label="Search field"
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <Button variant="outlined">Outlined</Button>

    </form>
  );
};

export default FilterForm;