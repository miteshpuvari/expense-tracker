import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Hoc from "../../HOC/hoc";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewExpense } from "../../redux/reducer/Reducer";

const AddExpense = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      expenseTitle: "",
      date: "",
      price: "",
    },
    validationSchema: Yup.object({
      expenseTitle: Yup.string().required(),
      date: Yup.string().required(),
      price: Yup.string().required(),
    }),
    onSubmit: (values) => {
    navigate("/home");
    dispatch(addNewExpense(values));
    },
  });

  return (
    <Hoc>
      <Box sx={{ p: 5 }}>
        <Paper sx={{ textAlign: "center" }}>
          <Typography variant="h5">Add New Expense</Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                m: 5,
                justifyContent: "space-evenly",
                minHeight: 300,
              }}
            >
              <TextField
                id="expenseTitle"
                label="ExpenseTitle"
                type="expenseTitle"
                helperText={
                  formik.touched.expenseTitle && formik.errors.expenseTitle
                }
                onChange={formik.handleChange}
                value={formik.values.expenseTitle}
              />
              <TextField
                id="date"
                type="date"
                helperText={formik.touched.date && formik.errors.date}
                onChange={formik.handleChange}
                value={formik.values.date}
              />

              <TextField
                id="price"
                label="Price"
                type="price"
                helperText={formik.touched.price && formik.errors.price}
                onChange={formik.handleChange}
                value={formik.values.price}
              />
              <Button type="submit" variant="contained">
                Add
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Hoc>
  );
};

export default AddExpense;
