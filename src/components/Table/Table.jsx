import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { RecentSpendingsData } from "../../Data/Data"; // Update the path if needed

export default function BasicTable() {
  return (
    <div className="flex flex-col justify-evenly gap-[2rem] max-xl:w-[100%] mt-[2rem]">
      <h3 className="text-2xl font-bold text-black dark:text-white">
        Recent Spendings
      </h3>
      <TableContainer
        component={Paper}
        className=" bg-(--secondary-color) text-black rounded-xl shadow-md"
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="recent spendings table">
          <TableHead>
            <TableRow className="bg-[#2e2e2e]">
              <TableCell className="font-semibold !text-white">
                Description
              </TableCell>
              <TableCell align="left" className="font-semibold !text-white">
                Category
              </TableCell>
              <TableCell align="left" className="font-semibold !text-white">
                Date
              </TableCell>
              <TableCell align="left" className="font-semibold !text-white">
                Amount&nbsp;(₹)
              </TableCell>
              <TableCell align="left" className="font-semibold !text-white">
                Payment&nbsp;Method
              </TableCell>
              <TableCell align="left" className="font-semibold !text-white">
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {RecentSpendingsData.map((row, index) => (
              <TableRow
                key={index}
                className="bg-[#3a3a3a]"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="!text-white">{row.description}</TableCell>
                <TableCell align="left" className="!text-white">
                  {row.category}
                </TableCell>
                <TableCell align="left" className="!text-white">
                  {row.date}
                </TableCell>
                <TableCell align="left" className="!text-white">
                  {row.amount}
                </TableCell>
                <TableCell align="left" className="!text-white">
                  {row.paymentMethod}
                </TableCell>
                <TableCell align="left" className="!text-white">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
