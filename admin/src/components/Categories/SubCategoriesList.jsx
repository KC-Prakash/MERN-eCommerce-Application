import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const SubCategoriesList = () => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <div>
      <div>
        <h1 className="text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          Sub-Categories
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
                Category ID
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">Parent</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Name</TableCell>
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
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Fashion
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Men
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
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Fashion
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Women
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
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Fashion
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Kids
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
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Fashion
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Babies
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
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Electricals
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Charger
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
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Electricals
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Data Cable
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
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Electricals
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Adapter
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
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Electricals
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Pendriver
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

export default SubCategoriesList;
