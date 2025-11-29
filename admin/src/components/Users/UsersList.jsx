import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import { Link } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "@mui/material/Button";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const UsersList = () => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <div>
      <div>
        <h1 className="text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          Users{" "}
        </h1>
      </div>
      <TableContainer
        sx={{
          width: "100%",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            width: "full",
            backgroundColor: "white",
          }}
          aria-label="simple table"
        >
          <TableHead className="bg-white">
            <TableRow>
              <TableCell>
                <Checkbox {...label} />
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">S.I</TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                User ID
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">Name</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Image</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Mobile</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Email</TableCell>
              <TableCell className=" !text-[14px] !font-bold">DOB</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Age</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="bg-white">
              <TableCell>
                <Checkbox {...label} />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">1</TableCell>
              <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                UI521
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                Mohammed Shafeek A
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">
                <img
                  src="../../../src/assets/Users/shafeek77.png"
                  alt=""
                  className="object-contain w-[60px] h-[60px] rounded-full border border-gray-300"
                />
              </TableCell>
              <TableCell>
                <h1 className="!text-[14px] !font-bold">*******654</h1>
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                amdshafeek7@gmail.com
              </TableCell>
              <TableCell>
                <h1 className="!text-[14px] !font-bold">30/08/2004</h1>
              </TableCell>
              <TableCell>
                <h1 className="!text-[14px] !font-bold">21</h1>
              </TableCell>
              <TableCell>
                <Tooltip title="Edit">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                    <MdEdit className="text-[30px]"></MdEdit>
                  </Button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                    <MdDelete className="text-[30px]"></MdDelete>
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white">
              <TableCell>
                <Checkbox {...label} />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">1</TableCell>
              <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                UI521
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                Mohammed Shafeek A
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">
                <img
                  src="../../../src/assets/Users/shafeek77.png"
                  alt=""
                  className="object-contain w-[60px] h-[60px] rounded-full border border-gray-300"
                />
              </TableCell>
              <TableCell>
                <h1 className="!text-[14px] !font-bold">*******654</h1>
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                amdshafeek7@gmail.com
              </TableCell>
              <TableCell>
                <h1 className="!text-[14px] !font-bold">30/08/2004</h1>
              </TableCell>
              <TableCell>
                <h1 className="!text-[14px] !font-bold">21</h1>
              </TableCell>
              <TableCell>
                <Tooltip title="Edit">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                    <MdEdit className="text-[30px]"></MdEdit>
                  </Button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                    <MdDelete className="text-[30px]"></MdDelete>
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersList;
