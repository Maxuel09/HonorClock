import axios from "axios";
const API_URL = 'https://honorclock.up.railway.app/HC';

interface User {

}
export const registerUser = (user: User) => axios.post(`${API_URL}/register`, user);