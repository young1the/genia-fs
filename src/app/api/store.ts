type User = {
  email: string;
  username: string;
  password: string;
  empNumber: string;
};
type UserLog = { email: string; password: string };

class UserDB {
  db: User[] = [
    {
      email: "dummy@mail.com",
      password: "fake",
      username: "홍길동",
      empNumber: "1234",
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
}

export const userDB = new UserDB();
