import { useState, useEffect } from 'react';
import { IconButton, Tooltip } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { IoIosInformation } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import axiosInstance from "@/api/interceptor.js";

export const EventosTable = () => {
  const drawerWidth = 240;
  const customStyles = {
    table: {
      style: {
        width: "100%", 
        maxWidth: "1440px",
      }
    },
    headCells: {
      style: {
        color: "red",
        fontSize: "1rem",
        justifyContent: "center",
      }
    },
    cells: {
      style: {
        textAlign: "center",
        alignItems:"center",
        justifyContent:"center",
      }
    }
  };

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
    },
    {
      name: 'Nombre',
      selector: row => row.name,
    },
    {
      name: 'Imagen',
      selector: row => row.imgURL,
    },
    {
      name: 'Fecha de Creación',
      selector: row => row.createdAt,
    },
    {
      name: 'Squad',
      selector: row => row.team,
    },
    {
      name: 'Acciones',
      cell: row => (
        <div style={{ display: 'flex', alignItems: 'center', textAlign:"center" }}>
          <Tooltip content="Informacion">
            <Link to={`Egresados/informacionForm/${row.id}`}>
              <IconButton className='bg-blue-800 rounded-full'>
                <IoIosInformation size={24} />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip content="Modificar Informacion">
            <Link to={`/Egresados/editar/${row.id}`}>
              <IconButton className='bg-blue-800 rounded-full'>
                <IoPencil />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip content="Borrar Informacion">
            <Link to={`/Egresados/borrar/${row.id}`}>
              <IconButton className='bg-red-700 rounded-full'>
                <IoTrashOutline />
              </IconButton>
            </Link>
          </Tooltip>
        </div>
      ),
    },
  ];

  const [eventos, setEventos] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("admin/event/all")
      .then((result) => {
        const {
          data: { Events: events },
        } = result;
        console.log(events);

        if (events != null) {
          setEventos(events);
          setPending(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

   [eventos];

  return (
    <div style={{ display:"flex", flexDirection:"column", marginLeft: drawerWidth, border: "solid 3px blue", borderRadius:"20px", marginTop: "20px", paddingBottom:"20px"}}>
      <DataTable
        columns={columns}
        data={eventos}
        customStyles={customStyles}
        pagination
        paginationPerPage={10}
        progressPending={pending}
        responsive
      />
    </div>
  )
}

