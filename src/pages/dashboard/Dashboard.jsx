import { useState, useEffect } from 'react';

export default function Divisiones() {

    // Estado para almacenar las divisiones obtenidas del backend
    const [divisiones, setDivisiones] = useState([]);

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({ nombre: '' });

    // Estado para manejar si el modal está abierto o cerrado
    const [modalAbierto, setModalAbierto] = useState(false);

    // Estado para guardar el ID de la división que se está editando
    const [editandoId, setEditandoId] = useState(null);


    // Función para traer todas las divisiones desde el backend
    const obtenerDivisiones = async () => {
        try {
            const res = await fetch('http://localhost:8081/api/divisiones');
            const data = await res.json();
            setDivisiones(data); // Guardamos los datos en el estado
        } catch (error) {
            console.error('Error al obtener divisiones:', error);
        }
    };


    // useEffect para llamar a obtenerDivisiones al cargar el componente
    useEffect(() => {
        obtenerDivisiones();
    }, []);


    // Detecta cambios en los inputs y actualiza el estado del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    // Guarda una división nueva o actualiza una existente
    const handleGuardar = async () => {
        try {
            if (editandoId) {
                // Si existe un ID, es una edición (PUT)
                await fetch(`http://localhost:8081/api/divisiones/${editandoId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
            } else {
                // Si no existe ID, es nuevo registro (POST)
                await fetch('http://localhost:8081/api/divisiones', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
            }

            // Recargar tabla luego de guardar
            obtenerDivisiones();

            // Limpiar formulario y cerrar modal 
            limpiarFormulario();
            setModalAbierto(false);

        } catch (error) {
            console.error('Error al guardar la división:', error);
        }
    };


    // Cargar datos en el formulario cuando se va a editar
    const handleEditar = (division) => {
        setEditandoId(division.id);
        setFormData({ nombre: division.nombre });
        setModalAbierto(true); // Abrimos modal
    };


    // Limpia el formulario y resetea el estado de edición
    const limpiarFormulario = () => {
        setFormData({ nombre: '' });
        setEditandoId(null);
    };


    // Habilita una división
    const habilitar = async (id) => {
        try {
            await fetch(`http://localhost:8081/api/divisiones/${id}/habilitar`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            });

            // Actualizar la lista
            obtenerDivisiones();
        } catch (error) {
            console.error('Error al habilitar la división:', error);
        }
    };


    return (
        <div className="p-6">
            
            {/* Título */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Divisiones existentes</h3>

            {/* Botón que abre el modal para agregar nueva división */}
            <button
                onClick={() => {
                    limpiarFormulario();
                    setModalAbierto(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition mb-5"
            >
                + Nueva División
            </button>

            {/* Si no hay datos, mostrar mensaje, sino tabla */}
            {divisiones.length === 0 ? (
                <p className="text-gray-500 text-lg">No hay divisiones registradas.</p>
            ) : (
                <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-3 px-4">ID</th>
                                <th className="py-3 px-4">Nombre</th>
                                <th className="py-3 px-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {divisiones.map((division) => (
                                <tr key={division.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4">{division.id}</td>
                                    <td className="py-2 px-4 capitalize">{division.nombre}</td>
                                    <td className="py-2 px-4 flex gap-2">
                                        
                                        {/* Botón Editar */}
                                        <button
                                            onClick={() => handleEditar(division)}
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm"
                                        >
                                            Editar
                                        </button>

                                        {/* Botón Habilitar */}
                                        <button
                                            onClick={() => habilitar(division.id)}
                                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                                        >
                                            Habilitar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ✅ Modal para agregar/editar división */}
            {modalAbierto && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        
                        {/* Título dinámico dependiendo si es edición o creación */}
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            {editandoId ? 'Editar División' : 'Nueva División'}
                        </h2>

                        {/* Input nombre */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Ej: División A"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Botones del modal */}
                        <div className="flex gap-3 mt-6">
                            
                            {/* Guardar / Actualizar */}
                            <button
                                onClick={handleGuardar}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 
                                text-white font-semibold py-2 rounded-lg transition"
                            >
                                {editandoId ? 'Actualizar' : 'Guardar'}
                            </button>

                            {/* Cancelar: cerrar modal y limpiar formulario */}
                            <button
                                onClick={() => {
                                    setModalAbierto(false);
                                    limpiarFormulario();
                                }}
                                className="flex-1 bg-gray-300 hover:bg-gray-400 
                                text-gray-800 font-semibold py-2 rounded-lg transition"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
