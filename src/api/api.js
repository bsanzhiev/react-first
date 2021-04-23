// Data Access Layer
import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "98cf3d68-6e4b-436a-b79d-05f7020b903b",
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
    console.warn("Obsolete method, please use profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login() {
    return instance.post(`auth/login`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};
