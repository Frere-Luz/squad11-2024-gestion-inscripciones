import axiosInstance from "./interceptor.js";
import { toast } from "sonner";

export const userLogin = async (data, navigate) => {
  //* Usar Object.entries() para obtener clave e índice
  for (const [key, value] of Object.entries(data)) {
    if (value.trim() === "" || value == null) {
      toast.error(`El campo ${key} está vacío. Debe completarlo.`);
      return;
    }
  }
  try {
    axiosInstance.post(`auth/authentication`, data).then((res) => {
      if (res.rol === "admin") {
        navigate("/admindash");
      } else if (res.rol === "mentor") {
        navigate("/mentordash");
      } else if (res.rol === "egresado") {
        navigate("/egresadodash");
      } else {
        navigate("/home");
      }
    });
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
      toast.error(
        error.response.data.message || "Los datos ingresados son incorrectos"
      );
    } else if (error.request) {
      console.error("Error request:", error.request);
      toast.error("No se recibió respuesta del servidor");
    } else {
      console.error("Error:", error.message);
      toast.error("Error al realizar la solicitud de inicio de sesión");
    }
  }
};
