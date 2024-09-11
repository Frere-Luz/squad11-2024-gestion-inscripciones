import axios from 'axios'

const API="https://squad-docker.onrender.com/api/v1"

//'https://gestioninscripciones.us-east-2.elasticbeanstalk.com/api/v1'
export const mentorsList= async () => 
{
    try {
        const response =  await axios.get(`${API}mentor/get`)
        // const response = await apiClient.get ('/mentor/)
        //console.log(response.data);
        return response
    } catch (error) {
        console.error('error al ver los mentores:', error)
        throw error
    }
}

export const mentorPost = async (data) =>{
    try {
        const response = await axios.post(`${API}mentor/`,data)
        // const response = await apiClient.post ('/mentor/', data)
        //console.log(response.data);
        return response
    } catch (error) {
        console.error('error al cargar mentor: ',error)
        throw error
    }
}

export const mentorOne = async (id) => {
    try {
        const response = await axios.get(`${API}mentor/get/${id}`)
        // const response = await apiClient.get ('/mentor/${id}')
        //console.log(response.data);
        return response;
    } catch (error) {
        console.error('error al encontrar el mentor:', error);
        throw error
    }
}

export const mentorDelete = async (id) => {
    try {
        const response = await axios.delete(`${API}mentor/delete/${id}`)
        // const response = await apiClient.delete ('/mentor/${id}')
        if (response.status === 200) {
            console.log('mentor borrado exitosamente');
        }
        return response;
    } catch (error) {
        console.error('error al borrar el mentor:', error);
        throw error
    }
}

export const mentorUpdate = async (data) => {
    try {
        const response = await axios.patch(`${API}mentor/update/${data.id}`, data)
        // const response = await apiClient.put ('/mentor/${data.id}',data)
        if (response.status === 200) {
            console.log('mentor editado exitosamente');
        }
        return response;
    } catch (error) {
        console.error('error al editar el mentor:', error);
        throw error
    }
} 
    