import '../Styles/Home.css';
import React, { useState } from 'react';
import moment from 'moment';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Nav } from './Nav';



export const Home = () =>
{
            const [day, setDay] = useState(0);
            const [rday, setRay] = useState(0);

            const handleChange = (event) => {
                setDay(event.target.value);                
            };

            const handle = (event) => {
                setRay(event.target.value);                
            };
            
            
    
    return (
        <>
        <Nav />
            <br /><br /><br /><br />
            <div>
                <h3>-= Check The Day =-</h3>
                <br/><br/>
                <div className='maininp'>
                    <div className='inpdate'>
                 <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        After Day
                        </InputLabel>
                        <NativeSelect
                        defaultValue={0}
                        onChange={handleChange}
                        inputProps={{
                            name: 'NA',
                            id: 'uncontrolled-native',
                        }}
                        >
                            <option value={0}>Zero</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                            <option value={4}>Four</option>
                            <option value={5}>Five</option>
                            <option value={6}>Six</option>
                            <option value={7}>Seven</option>
                            <option value={8}>Eight</option>
                            <option value={9}>Nine</option>
                        </NativeSelect>
                    </FormControl>
                </Box>
                <br /><br /><br />
                <h3>
                    {moment().add(day, 'days').format('LLLL')}
                </h3>
                    
                    </div>        
                    <div className='inpdate'>
                    <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Before Day
                                </InputLabel>
                                <NativeSelect
                                defaultValue={0}
                                onChange={handle}
                                inputProps={{
                                    name: 'NA',
                                    id: 'uncontrolled-native',
                                }}
                                >
                                    <option value={0}>Zero</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                    <option value={4}>Four</option>
                                    <option value={5}>Five</option>
                                    <option value={6}>Six</option>
                                    <option value={7}>Seven</option>
                                    <option value={8}>Eight</option>
                                    <option value={9}>Nine</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>
                        <br /><br /><br />
                        <h3>
                            {moment().subtract(rday, 'days').format('LLLL')}
                        </h3>
                    </div>                     
                </div>  
            </div>
        </>
    )
}