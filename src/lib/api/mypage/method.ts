import { http } from "../axios"
import { MyPageUserData, ChangePasswordBody } from "./type";
import * as URL from "./url"

export const getMyPage = () => {
    return http.get<MyPageUserData>(URL.myPageURL);
}
export const putMyPage = (body: MyPageUserData) => {
    return http.put<MyPageUserData>(URL.myPageURL, body);
}

export const changePassword = (body: ChangePasswordBody) => {
    return http.put<ChangePasswordBody>(URL.changePasswordURL, body);
}

