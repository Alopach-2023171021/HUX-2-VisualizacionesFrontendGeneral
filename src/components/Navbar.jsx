import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa';

export default function Navbar({ toggleSidebar }) {
    return (
        <header className="bg-white shadow-md h-16 flex items-center justify-between px-6 flex-shrink-0">
            {/* Botón de menú */}
            <button
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-gray-900 text-2xl"
            >
                <FaBars />
            </button>

            {/* Título */}
            <h1 className="text-xl font-semibold text-gray-800">
                Panel de Administración
            </h1>

            {/* Iconos de usuario */}
            <div className="flex items-center gap-4">
                <button className="text-gray-600 hover:text-gray-900 text-xl relative">
                    <FaBell />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white 
                    text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        3
                    </span>
                </button>
                <button className="text-gray-600 hover:text-gray-900 text-2xl">
                    <FaUserCircle />
                </button>
            </div>
        </header>
    );
}
