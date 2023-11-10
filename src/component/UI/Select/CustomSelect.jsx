import React, {useState} from 'react';
import {FormControl, MenuItem, Select, FormHelperText, Box, InputLabel} from '@mui/material';



export const CustomSelect = ({label, options, defaultValue}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
   <Box display="flex" alignItems="center" justifyContent="space-between" sx={{gap: 2, m: 1, minWidth: 120}}>
     <InputLabel style={{color: 'var(--text-default)', overflow: 'visible', minWidth: 140}}
                 id={`${label}-label`}>{label}</InputLabel>
     <FormControl fullWidth>
       <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
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