import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";

export default function DashboardLayout() {
    const Main = styled('main')(() => ({

    }));

    return (
        <Box>
            <Header />
            <SideNav />
            <Main>
                <Outlet />
            </Main>
        </Box>
    );
}
