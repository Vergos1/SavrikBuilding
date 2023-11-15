import React, {useState} from 'react';
import {FormControl, MenuItem, Select, FormHelperText, Box, InputLabel} from '@mui/material';



export const CustomSelect = ({label, options, defaultValue, size, setSelectedProduct}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setSelectedProduct(event.target.value);
  };

  return (
   <Box
    sx={{gap: 2, minWidth: 120, width: "100%", justifyContent: "space-between", display: "flex", alignItems: "center"}}>
     {label && <InputLabel
      sx={{color: 'var(--text-default)', overflow: 'visible', minWidth: 140}}
      id={`${label}-label`}>
       {label}
     </InputLabel>}

     <FormControl fullWidth>
       <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        sx={{
          "& .MuiSelect-select": {
            padding: size ? `${size} !important` : null,
          },
        }}
       >
         <MenuItem value="" disabled>{defaultValue}</MenuItem>
         {options.map((option) => (
          <MenuItem key={option.id} value={option.title}>
            {option.title}
          </MenuItem>
         ))}
       </Select>
     </FormControl>
   </Box>
  )
};