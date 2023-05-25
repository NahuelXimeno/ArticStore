import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const CartWidget = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Ver Carrito">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default CartWidget;
