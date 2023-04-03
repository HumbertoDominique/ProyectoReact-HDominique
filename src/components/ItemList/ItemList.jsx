import { Typography } from "@mui/material";

const ItemList = ({ saludo }) => {
  return (
    <div>
      <Typography
        variant="h1"
        sx={{ fontSize: "2rem", textAlign: "center", marginTop: "20px" }}
      >
        {saludo}
      </Typography>
    </div>
  );
};

export default ItemList;
