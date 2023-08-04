import { User } from "@/lib/api/user/type";

export interface MyPageUserData extends Pick <User, 'nickName' | 'empNumber' | 'notificationAgreement'> {}
export interface ChangePasswordBody {
    password:string
    newPassword:string
}