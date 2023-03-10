import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
const TopBar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyCOntent="space-between" p={2}>
    <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        {/* <label htmlFor="searchInput">Search: </label> */}
        <InputBase sx={{ml: 2, flex: 1}} placeholder="search" id="searchInput"/>
        <IconButton aria-label="search">
            <SearchIcon />
        </IconButton>
        <IconButton aria-label={`toggle light / dark mode`}>
           <LightModeOutlinedIcon /> 
        </IconButton>
        <IconButton aria-label="Notifications">
            <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton aria-label="Settings">
            <SettingsOutlinedIcon />
        </IconButton>
        <IconButton aria-label="My Profile">
            <PersonOutlinedIcon />
        </IconButton>
    </Box>
</Box>
  )
}

export default TopBar