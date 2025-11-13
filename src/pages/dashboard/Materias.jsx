import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Materias() {
    const [materias, setMaterias] = useState([]);
    const [programas, setProgramas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editando, setEditando] = useState(false);
    const [materiaActual, setMateriaActual] = useState({
        id: null,
        nombre: '',
        activo: true,
        programaId: '',
    });

    const API_URL = 'http://localhost:8083/materias';
    const PROGRAMAS_URL = 'http://localhost:8082/programas/all';

    useEffect(() => {
    }, []);

    const cargarMaterias = async () => {
    };

    const cargarProgramas = async () => {

    };

    const abrirModal = (materia = null) => {
    };

    const cerrarModal = () => {
    };

    const handleChange = (e) => {
    };

    const guardarMateria = async (e) => {};

    const deshabilitarMateria = async (id) => {
    };

    const habilitarMateria = async (id) => {
    };

    return (
        <div className="p-6">
        </div>
    );
}
