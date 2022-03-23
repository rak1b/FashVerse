import ApiClient from "../ApiClient";

class UsersService {
	getAllUsers = () => ApiClient().get("users");
}

export default new UsersService();
