import { http } from "../axios";
import { PermissionUser, PutUser } from "./type";

export const getAdminReservations = async () => {
  return http.get(`api/admin/reservation`);
};
export const getAdminUsers = async () => {
  return http.get(`api/admin/user`);
};
export const putUser = async (body: PutUser) => {
  return http.put(`api/admin/user`, body);
};
export const permissionUser = async (body: PermissionUser) => {
  return http.post(`/api/admin/permission`, body);
};
