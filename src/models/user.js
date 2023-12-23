class User {
  constructor(
    id,
    username,
    password,
    role,
    name,
    age,
    address,
    email,
    phone,
    appointments = [],
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.appointments = appointments;
  }
}
export default User;
