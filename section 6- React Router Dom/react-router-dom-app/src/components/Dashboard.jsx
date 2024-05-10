import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to="profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                {/* O Outlet renderiza os componentes das rotas aninhadas */}
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;