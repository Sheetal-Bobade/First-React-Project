import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { db } from "../../firebase-config";
import {
  collection,
  updateDoc,
  getDocs,
 // addDoc,
  doc,
 // get
} from "firebase/firestore";
import Swal from "sweetalert2";

export default function EditForm ({fid, closeEvent}){
    const [name, setName]= useState("");
    const [price, setPrice]= useState("");
    const [category, setCategory]= useState("");
    const [setRows] = useState([]);
    const empCollectionRef = collection(db, "products");

    useEffect( ()=>{
      console.log("FID: " + fid.id);
      setName(fid.name);
      setPrice(fid.price);
      setCategory(fid.category);
    }, [fid.category, fid.id, fid.name, fid.price] ) ;

    const handleNameChange = (event)=>{
        setName(event.target.value);
    };

    const handlePriceChange = (event)=>{
        setPrice(event.target.value);
    };

    const handleCategoryChange = (event)=>{
        setCategory(event.target.value);
    };



     const createUser = async() =>{
        const userDoc = doc(db, "products", fid.id);
        const newFields = {
            name: name,
            price: Number (price),
            category: category,
            date: String(new Date())
          };

        await updateDoc(userDoc, newFields);
        getUsers();
        closeEvent();
        Swal.fire("Submitted!", "Your file has been updated.", "success");
    };

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

    const currencies = [
        {
          value: 'Mobile',
          label: 'Mobile',
        },
        {
          value: 'Laptop',
          label: 'Laptop',
        },
        {
          value: 'Electronics',
          label: 'Electronics',
        },
        {
          value: 'Food',
          label: 'Food',
        },
      ];

    return(
        <>
        <Box sx={{m:2}} />
        <Typography variant="h5" align="center">
         Edit Product
        </Typography>
         <IconButton 
         style={{position:"absolute", top:"0", right:"0"}}
         onClick={closeEvent}>
            <CloseIcon/>
         </IconButton>

         <Box height={20} />
         <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField onChange={handleNameChange} value={name} id="outlined-basic" label="Name" variant="outlined" size="small" sx={{minWidth:"100%"}} />
            </Grid>
            <Grid item xs={6}>
            <TextField 
            type="number"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <CurrencyRupeeIcon/>
                  </InputAdornment>
                )
                    
                 
            }}
            
            onChange={handlePriceChange} 
            value={price} id="outlined-basic" 
            label="Price" variant="outlined" 
            size="small" 
            sx={{minWidth:"100%"}} />
            </Grid>
            <Grid item xs={6}>
            <TextField select onChange={handleCategoryChange} value={category} id="outlined-basic" label="Category" variant="outlined" size="small" sx={{minWidth:"100%"}}>
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h5" align="center">
                <Button variant="contained" onClick={createUser}>
                    Submit
                </Button>
            </Typography>
            </Grid>

         </Grid>
         <Box sx={{m:4}} />
        </>
       
    )
}

