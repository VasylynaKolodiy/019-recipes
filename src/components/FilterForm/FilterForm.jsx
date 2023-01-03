import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
//_____________________________________________________________________________________
import './FilterForm.scss'
//_____________________________________________________________________________________

const FilterForm = ({areas}) => {

  const [searchValue, setSearchValue] = useState('')
  console.log(searchValue, 'searchValue')

  const [areaValue, setAreaValue] = useState([])

  function handleSelectChange(event, values) {
    setAreaValue(values)
  }

  return (
    <form className='filterForm' onSubmit={(event) => event.preventDefault()}>

      <FormControl className='filterForm__formControl'>
        <TextField
          className="filterForm__search"
          id="filterForm__search"
          label="Search field"
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button variant="outlined">Outlined</Button>
      </FormControl>

      <FormControl className='filterForm__formControl'>
        {<Autocomplete
          className="filterForm__selectArea"
          id="filterForm__selectArea"
          options={areas}
          value={areaValue}
          onChange={handleSelectChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Select area"
              placeholder="Areas"
            />
          )}
        />}
      </FormControl>

    </form>
  );
};

export default FilterForm;