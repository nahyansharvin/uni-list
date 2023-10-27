import React from 'react'
import { Grid, Modal } from '@mui/material'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { TextField, Button } from '@mui/material'

const validationSchema = yup.object({
    college: yup
        .string()
        .required('College name is required')
        .min(8, 'College name is should have minimum 8 characters'),
    website: yup
        .string()
        .url('Please enter a valid URL')
        .required('Website is required'),
    country: yup
        .string()
        .required('Country is required')
        .matches(/^[a-zA-Z]+$/, 'Country must only contain letters'),
});

const FormModal = ({ visible, setVisible, handleSubmit }) => {
    const formik = useFormik({
        initialValues: {
            college: '',
            website: '',
            country: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            handleSubmit(values)
            // setVisible(false)
        },
    });

    return (
        <div>
            <Modal
                open={visible}
                onClose={() => setVisible(false)}
                className='flex justify-center items-center'
            >
                <div className='bg-white w-3/4 p-5 rounded-2xl shadow-sm shadow-blue-100 outline-none'>
                    <h3 className='text-xl font-bold text-primary mb-3'>Add College</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="college"
                                    name="college"
                                    label="College Name"
                                    value={formik.values.college}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.college && Boolean(formik.errors.college)}
                                    helperText={formik.touched.college && formik.errors.college}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="country"
                                    name="country"
                                    label="Counrty"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.country && Boolean(formik.errors.country)}
                                    helperText={formik.touched.country && formik.errors.country}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    id="website"
                                    name="website"
                                    label="College Website"
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.touched.website && formik.errors.website}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} className='flex justify-end'>
                                <button type="button" className="px-8 py-2 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" onClick={formik.handleSubmit}>
                                    Add
                                </button>
                            </Grid>

                        </Grid>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default FormModal