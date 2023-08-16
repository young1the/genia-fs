import { axiosInstance, http } from "../axios";
import { Reservation } from "../reservation/type";
import { DelUser, PermissionUser, PutUser } from "./type";

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
export const delUser = async (body: DelUser) => {
  return http.delete(`api/admin/user`, { data: body });
};
export const cancelReservation = async (
  body: Pick<Reservation, "reservationCode">
) => {
  return axiosInstance.delete(`/api/admin/reservation`, { data: body });
};
