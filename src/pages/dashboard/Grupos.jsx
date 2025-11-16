import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Grupos() {
    const [grupos, setGrupos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showAlumnosModal, setShowAlumnosModal] = useState(false);
    const [editando, setEditando] = useState(false);
    const [grupoActual, setGrupoActual] = useState({
        id: null,
        nombre: '',
        cuatrimestre: '',
        estado: true,
        alumnoIds: []
    });
    const [alumnosGrupo, setAlumnosGrupo] = useState([]);
    const [grupoSeleccionado, setGrupoSeleccionado] = useState(null);

    const API_URL = 'http://localhost:8086/grupos';
    const USUARIOS_URL = 'http://localhost:8084/usuarios/all';

    useEffect(() => {
    }, []);

    const cargarGrupos = async () => {
    };

    const cargarUsuarios = async () => {
    };

    const verAlumnos = async (grupo) => {
    };

    const cerrarAlumnosModal = () => {
    };

    const abrirModal = async (grupo = null) => {
        setShowModal(true);
    };

    const cerrarModal = () => {
    };

    const handleChange = (e) => {
    };

    const handleCheckboxChange = (usuarioId) => {

    };

    const guardarGrupo = async (e) => {
    };

    return (
        <div className="p-6">
        </div>
    );
}
