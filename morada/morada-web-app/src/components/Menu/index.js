import { useContext } from "react";
import { IoHome, IoPerson, IoStar, IoAddCircle } from "react-icons/io5";
import { UserContext } from "../../contexts/UserContext";
import { MenuItem } from "./MenuItem";
import { MenuWrapper } from "./styles";
import React from "react";

const MenuCustomerItems = [
  {
    icon: IoHome,
    label: "Inicio",
    path: "/",
  },
  {
    icon: IoStar,
    label: "Favoritos",
    path: "/favorites",
  },
  {
    icon: IoPerson,
    label: "Perfil",
    path: "/account",
  },
];

const MenuAdminItems = [
  {
    icon: IoHome,
    label: "Inicio",
    path: "/",
  },
  {
    icon: IoAddCircle,
    label: "Agregar",
    path: "/add-property",
  },
  {
    icon: IoPerson,
    label: "Perfil",
    path: "/account",
  },
];

export const Menu = () => {

  const {user} = useContext(UserContext);

  return (
    <MenuWrapper>
      {
          user.role === 1 && MenuCustomerItems.map( (item, i) => <MenuItem key={i} {...item} /> )
      }
      {
          user.role === 2 && MenuAdminItems.map( (item, i)  => <MenuItem key={i} {...item} /> )
      }
    </MenuWrapper>
  )
};
