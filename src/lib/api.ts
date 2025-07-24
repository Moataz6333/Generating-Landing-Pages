import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createLandingPage = async (data: any) => {
  const response = await api.post("/landing-page", data);
  return response.data;
};

export const getLandingPage = async (id: string) => {
  const response = await api.get(`/landing-page/${id}`);
  return response.data;
};
