import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./App.css";

export default function Layout() {
  const drawerWidth = 240;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      boxShadow: "none",
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dataArray = [
    {
      _id: "6560474a1ad0e47e353eeee8",
      adminId: null,
      name: "Rushit Patel",
      email: "rushit@collabsoftech.com",
      isBlock: "1",
      isDelete: "0",
      role: "A",
      isValid: "0",
      password: "rushit@collabsoftech.comundefined",
      __v: 0,
    },
    {
      _id: "6560474a1ad0e47e353eeee9",
      adminId: null,
      name: "Gautam Patel",
      email: "Gautam@collabsoftech.com",
      isBlock: "0",
      isDelete: "0",
      role: "A",
      isValid: "0",
      password: "Gautam@collabsoftech.comundefined",
      __v: 0,
    },
    {
      _id: "6560474a1ad0e47e353eeee7",
      adminId: null,
      name: "test Patel",
      email: "test@collabsoftech.com",
      isBlock: "1",
      isDelete: "0",
      role: "A",
      isValid: "0",
      password: "test@collabsoftech.comundefined",
      __v: 0,
    },
    {
      _id: "6560474a1ad0e47e353eeee6",
      adminId: null,
      name: "admin Patel",
      email: "admin@collabsoftech.com",
      isBlock: "0",
      isDelete: "0",
      role: "A",
      isValid: "0",
      password: "admin@collabsoftech.comundefined",
      __v: 0,
    },
    {
      _id: "6560474a1ad0e47e353eeee5",
      adminId: null,
      name: "xyz Patel",
      email: "xyz@collabsoftech.com",
      isBlock: "1",
      isDelete: "0",
      role: "A",
      isValid: "0",
      password: "xyz@collabsoftech.comundefined",
      __v: 0,
    },
    {
      _id: "6560474a1ad0e47e353eeee4",
      adminId: null,
      name: "abc Patel",
      email: "abc@collabsoftech.com",
      isBlock: "0",
      isDelete: "0",
      role: "A",
      isValid: "0",
      password: "abc@collabsoftech.comundefined",
      __v: 0,
    },
    {
      _id: "6560474a1ad0e47e353eeee3",
      adminId: null,
      name: "aarash Patel",
      email: "aarash@collabsoftech.com",
      isBlock: "1",
      isDelete: "0",
      role: "A",
      isValid: "0",
      password: "aarash@collabsoftech.comundefined",
      __v: 0,
    },
    {
      _id: "6560474a1ad0e47e353eeee2",
      adminId: null,
      name: "Raj Patel",
      email: "Raj@collabsoftech.com",
      isBlock: "0",
      isDelete: "0",
      role: "A",
      isValid: "0",
      password: "Raj@collabsoftech.comundefined",
      __v: 0,
    },
    {
      _id: "6560474a1ad0e47e353eeee1",
      adminId: null,
      name: "Tarun Patel",
      email: "Tarun@collabsoftech.com",
      isBlock: "1",
      isDelete: "0",
      role: "A",
      isValid: "0",
      password: "Tarun@collabsoftech.comundefined",
      __v: 0,
    },
    {
      _id: "6560474a1ad0e47e353eeee0",
      adminId: null,
      name: "Deval Patel",
      email: "Deval@collabsoftech.com",
      isBlock: "0",
      isDelete: "0",
      role: "A",
      isValid: "0",
      password: "Deval@collabsoftech.comundefined",
      __v: 0,
    },
  ];

  const columns = [
    {
      field: "_id",
      headerName: "User Id",
      width: 100,
    },
    {
      field: "name",
      headerName: "User Name",
      width: 150,
      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <div
              style={{
                color: "rgb(112,48,255)",
              }}
            >
              {value}
            </div>
          </>
        );
      },
    },
    {
      field: "email",
      headerName: "User Email",
      width: 200,
    },
    {
      field: "password",
      headerName: "User Password",
      width: 280,
    },
    {
      field: "role",
      headerName: "User Role",
      width: 80,
    },
    {
      field: "isBlock",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        const { value } = params;
        return (
          <>
            <div
              style={{
                backgroundColor: `${value === "1" ? "#00B69B1A" : "#FD9A561A"}`,
                padding: "5px",
                // fontWeight:"600",
                borderRadius: "5px",
                color: `${value === "1" ? "#00B69B" : "#FD802A"}`,
                border: `1px solid ${value === "1" ? "#00B69B" : "#FD802A"}`,
              }}
            >
              {value === "1" ? "Completed(2)" : "Pending(0)"}
            </div>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (cell) => {
        return (
          <>
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ border: "1px solid #2172E1", padding: "2px 5px" }}>
                <RemoveRedEyeOutlinedIcon
                  sx={{ position: "relative", top: "3px", color: "#2172E1" }}
                />
              </div>
              <div>
                <Button variant="contained">Sign Now <KeyboardArrowDownIcon/></Button>
              </div>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ bgcolor: "white", height: "64px" }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }), color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              gap: "30px",
              width: "100%",
              height: "64px",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "rgb(112,48,255)",
                backgroundColor: "#F2F2F2",
                padding: "20px 10px",
                borderBottom: "2px solid rgb(112,48,255)",
              }}
            >
              Dashboard
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Manage
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Templates
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Setting
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#F2F2F2",
            border: "none",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ bgcolor: "white" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              margin: "0px 30px",
            }}
          >
            <img src="/Img/logo.png" alt="logo" height={30} />
            <h4 style={{ margin: "0px", color: "rgb(112,48,255)" }}>
              GODIGITEL
            </h4>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Button variant="contained" sx={{ margin: "32px 20px" }}>
          + Create New
        </Button>
        <Box sx={{ margin: "0px 20px", fontWeight: "600" }}>DOCUMENTS</Box>
        <List>
          {[
            {
              text: "Recevied",
              path: "/recevied",
              icon: <InboxIcon />,
              count: 22,
            },
            { text: "Sent", path: "/sent", icon: <MailIcon />, count: 10 },
            { text: "Bin", path: "/bin", icon: <MailIcon />, count: 5 },
            { text: "Drafts", path: "/drafts", icon: <InboxIcon />, count: 8 },
          ].map(
            (tab, index) => (
              console.log(location),
              (
                <li
                  key={index}
                  style={{
                    backgroundColor: `${
                      location.pathname === tab.path ? "white" : ""
                    }`,
                  }}
                >
                  <Link
                    to={tab.path}
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      color: `${
                        location.pathname === tab.path
                          ? "rgb(112,48,255)"
                          : "black"
                      }`,
                      // backgroundColor:`${location === tab.path ? "" : "red"}`
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          color: `${
                            location.pathname === tab.path
                              ? "rgb(112,48,255)"
                              : ""
                          }`,
                        }}
                      >
                        {tab.icon}
                      </ListItemIcon>
                      <h4 style={{ margin: "6px 0px" }}>{tab.text}</h4>
                      <h4
                        style={{
                          position: "absolute",
                          left: "180px",
                          margin: "0px 0px",
                        }}
                      >
                        {tab.count}
                      </h4>
                    </ListItemButton>
                  </Link>
                </li>
              )
            )
          )}
        </List>
      </Drawer>

      <Main open={open} sx={{ bgcolor: "#ddd9d9", height: "100vh" }}>
        <DrawerHeader />
        <Box
          sx={{
            height: "auto",
            width: 1,
            bgcolor: "white",
          }}
        >
          <DataGrid
            rows={dataArray}
            // disableColumnFilter
            // disableColumnSelector
            // disableDensitySelector
            columns={columns}
            headerClassName="bold-header"
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            getRowId={(e) => e._id}
          />
        </Box>
      </Main>
    </Box>
  );
}
