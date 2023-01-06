import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//_____________________________________________________________________________________
import './FilterIngredientForm.scss'
//_____________________________________________________________________________________

const FilterIngredientForm = ({ingredientsState, selectIngredient, onChangeSelectIngredient}) => {

  const ingredient = ingredientsState.map((elem) => elem.strIngredient)

  return (
    <form className='filterIngredientForm'>

      <Autocomplete
        id="filterIngredientForm__select"
        sx={{ width: 300 }}
        options={ingredient}
        value={selectIngredient}
        autoHighlight
        onChange={onChangeSelectIngredient}
        //multiple
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="30"
              src={`https://www.themealdb.com/images/ingredients/${option}.png`}
              alt=""
            />
            {option}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose an ingredient"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />

      {/*<Button*/}
      {/*  className="filterIngredientForm__button"*/}
      {/*  variant="outlined"*/}
      {/*  onClick={() => navigate(`/ingredient/${selectIngredient}`)}*/}
      {/*  disabled={!selectIngredient}*/}
      {/*>*/}
      {/*  Search*/}
      {/*</Button>*/}

    </form>
  );
};

export default FilterIngredientForm;