import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Hoc from "../../HOC/hoc";
import ImageCarousel from "../../components/Carousel/carousel";

const Home = () => {
  const [expense, setExpense] = useState();

  const navigate = useNavigate();
  const expenseData = useSelector((state) => state.expense.expenseList);

  useEffect(() => {
    setExpense(expenseData);
  }, [expenseData])

  const addExpense = () => {
      navigate("/add_expense");
  }

  return (
    <Hoc>
      <Box sx={{ p: 2, mb:5 }}>
        <ImageCarousel />
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', m:2 }}>
          <Button onClick={() => addExpense()} variant="contained">Add New Expense</Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Expense Title
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Date
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expense?.map((data, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data?.expenseTitle}
                  </TableCell>
                  <TableCell align="left">{data?.date}</TableCell>
                  <TableCell align="left">Rs. {data?.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Hoc>
  );
};

export default Home;
