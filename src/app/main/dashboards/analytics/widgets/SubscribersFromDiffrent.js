import { useSelector } from 'react-redux';
import { styled, ThemeProvider, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import Paper from '@mui/material/Paper';
import { selectWidgets } from '../store/widgetsSlice';

const Root = styled(Paper)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));

function SubscribersFromDiffrent() {
    const theme = useTheme();
    const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
    const widgets = useSelector(selectWidgets);
    const { series, ranges } = widgets?.visitors;
    const [tabValue, setTabValue] = useState(0);
    const currentRange = Object.keys(ranges)[tabValue];



    return (
        <Root className="sm:col-span-2 lg:col-span-4 flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
            <div className="container-fluid mt-3 ml-2">
            <h3 className="h1 font-weight-bold">
            Subscribers from Different Sources - 12 Months
        </h3>
        <hr className="mx-6 my-2" style={{ borderColor: 'white' }} />

                <div className="row mt-4 mt-5">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 ml-2 mr-2">
                        <i className="bi bi-info-circle text-primary mr-2"></i>
                            <h2 className='h3 ml-5'>0</h2>

                            <h3 className='ml-5 '>
                                Checkbox plugin
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 ml-3 mr-3">
                        <h2 className='h3 ml-5'>0</h2>

                            <h3 className='ml-5'>
                                Send to Messenger plugin
                            </h3>            </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 ml-3 mr-3 ">
                        <h2 className='h3 ml-5'>0</h2>

                            < h3 className='ml-5'>
                                Customer Chat plugin
                            </h3>            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100  ml-3 mr-3">
                        <h2 className='h3 ml-5'>0</h2>
                            <h3 className='ml-5'>
                                Direct from Facebook
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 ml-3 mr-3">
                        <h2 className='h3 ml-5'>0</h2>

                            <h3 className='ml-5'>
                                Comment Private Reply
                            </h3>            </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 ml-3 mr-3">
                        <h2 className='h3 ml-5'>0</h2>

                            <h3 className='ml-5'>
                                M.me link
                            </h3>            </div>
                    </div>
                </div>
            </div>
        </Root>


    );
}

export default SubscribersFromDiffrent;
