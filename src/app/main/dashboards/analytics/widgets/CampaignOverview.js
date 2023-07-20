import { useSelector } from 'react-redux';
import { styled, ThemeProvider, useTheme } from '@mui/material/styles';
import { Box, Divider, Typography } from '@mui/material';
import { useState } from 'react';
// import Tabs from '@mui/material/Tabs';
// import Icon from '@mui/material/Icon'
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import { selectWidgets } from '../store/widgetsSlice';

const Root = styled(Paper)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));

function CampaignOverviews() {
    const theme = useTheme();
    const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
    const widgets = useSelector(selectWidgets);
    const { series, ranges } = widgets?.visitors;
    const [tabValue, setTabValue] = useState(0);
    const currentRange = Object.keys(ranges)[tabValue];



    return (
       <>
       <div className="container-fluid mt-4 ml-2 text-align-center justify-content-center w-auto rounded ">
                <div className="row">
                    <div className="col-lg-6">
                        <Root className="card h-100 w-100  ">
                            <h2 className='ml-6 mt-2'>Email Campaign Overview</h2>
                            <Divider className="mx-6" sx={{ borderColor: theme.palette.common.white }} />

                            <ul>
                                <li>option-1</li>
                                <li>option-2</li>
                                <li>option-3</li>
                                <li>option-4</li>

                            </ul>
                        </Root>
                    </div>
                    <div className="col-lg-6">
                        <Root className="card h-100 w-100 ">
                            <h2 className='ml-6 mt-2' >Sms campaigns overviews</h2>   
                            <Divider className="mx-6" sx={{ borderColor: theme.palette.common.white }} />

                            <ul>
                                <li>option-1</li>
                                <li>option-2</li>
                                <li>option-3</li>
                                <li>option-4</li>

                            </ul>                     
                            </Root>
                    </div>
                </div>
            </div>


       </>
            


    );
}

export default CampaignOverviews;
