// Data Access Layer
import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "aff3141d-8f4f-4c5d-bf76-7caa93570a31",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  followUsers(userId) {
    return instance.post(`follow/${userId}`);
  },

  unfollowUsers(userId) {
    return instance.delete(`follow/${userId}`, {});
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
