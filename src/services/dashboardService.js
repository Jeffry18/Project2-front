import api from "../api/api";

export const getDashboard = async () => {
  const { data } = await api.get("/dashboard");

  return data.data;
};