import api from "../api/api";

export const registerOrganization = async (data) => {

    const response = await api.post(
        "/organizations",
        data
    );

    return response.data;
};