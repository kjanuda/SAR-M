
import { Box } from "@mui/material";
import UseForm from "./Userform";
import UserTable from "./UsersTable";

const users = [
  {
    id: 1,
    name: "januda",
  },
  {
    id: 2,
    name: "janandith",
  },
];

const Users = () => {
  return (
    <Box
      sx={{
        width: "calc(100% - 100px)",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <UseForm />
      <UserTable rows={users} />
    </Box>
  );
};

export default Users;
