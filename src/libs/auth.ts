import axios from 'axios';
import jwt_decode from 'jwt-decode';

interface JwtData {
  id: number;
}

interface SignInRequestData {
  email: string;
  password: string;
}

export async function signInRequest({ email, password }: SignInRequestData) {
  try {
    const request = await axios.post('/api/login', { email, password });
    return request.data;
  } catch (error) {}
}

export async function recoverUserInformation(jwt: string) {
  try {
    const decoded: JwtData = jwt_decode(jwt);
    const userId = decoded.id;
    const request = await axios.get(`/api/user/${userId}`);
    return request.data;
  } catch {}
}
