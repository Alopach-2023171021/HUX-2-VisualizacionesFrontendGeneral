import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function DashboardLayout() {
    const [sidebarAbierto, setSidebarAbierto] = useState(true);

    const toggleSidebar = () => {
        setSidebarAbierto(!sidebarAbierto);
    };

    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Navbar toggleSidebar={toggleSidebar} />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar isAbierto={sidebarAbierto} />

                <main 
                    className={`flex-1 overflow-y-auto bg-gray-100 transition-all duration-300 
                    ${sidebarAbierto ? 'ml-0' : 'ml-0'}`}
                >
                    <div className="p-6">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
