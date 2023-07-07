type User = {
  email: string;
  username: string;
  password: string;
  empNumber: string;
};
type UserLog = { email: string; password: string };

type UserEmail = { email: string };

type UserVerification = {
  email: string;
  code: number;
};

class UserDB {
  db: User[] = [
    {
      email: "dummy@mail.com",
      password: "2345",
      empNumber: "124",
      username: "qweqwe",
    },
  ];
  vfdb: UserVerification[] = [
    {
      email: "woojang95@naver.com",
      code: 1234,
    },
  ];
  addUser(newUser: User): boolean {
    const { email } = newUser;
    for (const user of this.db) {
      if (user.email == email) {
        return false;
      }
    }
    this.db = [...this.db, newUser];
    // console.log(this.db);
    return true;
  }
  userLogin(newUser: UserLog): boolean {
    const { email, password } = newUser;
    for (const user of this.db) {
      if (user.email == email && user.password == password) {
        return true;
      }
    }
    return false;
  }
  emailExist(newUser: UserEmail): boolean {
    const { email } = newUser;

    for (const user of this.db) {
      if (user.email == email) {
        return true;
      } else if (user.email != email) {
        const code = Math.floor(Math.random() * 1000);
        const userSave: UserVerification = { email, code };
        this.vfdb = [...this.vfdb, userSave];
        return false;
      }
    }
    return false;
  }

  emailVerification(newEmailVerify: UserVerification): boolean {
    const { email, code } = newEmailVerify;
    // console.log(email,code);
    for (const user of this.vfdb) {
      if (user.email == email && user.code == code) {
        return true;
      }
    }
    return false;
  }
}

export const userDB = new UserDB();
