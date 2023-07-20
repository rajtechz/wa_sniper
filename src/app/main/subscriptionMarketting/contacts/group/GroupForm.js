import Button from '@mui/material/Button';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import _ from '@lodash';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import Box from '@mui/system/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { motion } from 'framer-motion';
import {
    addContact,
    getContact,
    newContact,
    removeContact,
    selectContact,
    updateContact,
} from '../store/contactSlice';
import { Typography } from '@mui/material';


/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
    name: yup.string().required('You must enter a name'),
});

function GroupForm(props) {
    const contact = useSelector(selectContact);
    const routeParams = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const { isValid, dirtyFields, errors } = formState;

    const form = watch();

    useEffect(() => {
        if (routeParams.id === 'new') {
            dispatch(newContact());
        } else {
            dispatch(getContact(routeParams.id));
        }
    }, [dispatch, routeParams]);

    useEffect(() => {
        reset({ ...contact });
    }, [contact, reset]);


    /**
     * Form Submit
     */
    function onSubmit(data) {
        if (routeParams.id === 'new') {
            dispatch(addContact(data)).then(({ payload }) => {
                navigate(`/apps/contacts/${payload.id}`);
            });
        } else {
            dispatch(updateContact(data));
        }
    }




    if (_.isEmpty(form) || !contact) {
        return <FuseLoading />;
    }

    return (
        <>


            <div className="relative flex flex-col flex-auto items-center  px-24 sm:px-48 mt-4">

                <Typography
                    component={motion.span}
                    initial={{ x: -20 }}
                    animate={{ x: 0, transition: { delay: 0.2 } }}
                    delay={300}
                    className="text-24 md:text-32 font-extrabold tracking-tight leading-none"
                >
                    Add New Group
                </Typography>
                <Controller
                    control={control}
                    name="Group Name"
                    render={({ field }) => (
                        <TextField
                            className="mt-32"
                            {...field}
                            label="Group Name"
                            placeholder="Group Name"
                            id="Group Name"
                            error={!!errors.name}
                            helperText={errors?.name?.message}
                            variant="outlined"
                            required
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FuseSvgIcon size={20}>heroicons-solid:user-group</FuseSvgIcon>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />

                <Box
                    className="flex items-center mt-40 py-14 pr-16 pl-4 sm:pr-48 sm:pl-36 "
                >

                    <Button className="ml-auto" component={NavLinkAdapter} to={-1}>
                        Cancel
                    </Button>
                    <Button
                        className="ml-8"
                        variant="contained"
                        color="primary"
                        disabled={_.isEmpty(dirtyFields) || !isValid}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Save
                    </Button>
                </Box>
            </div>

        </>

    );
}

export default GroupForm;
