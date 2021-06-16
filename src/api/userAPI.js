import { axiosClient } from "./link.js";
const UserAPI = {
    getAll() {
        const url = `/user`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/user/${id}`;
        return axiosClient.get(url);
    },
    add(user) {
        const url = `/user`;
        return axiosClient.post(url, user);
    },
    remove(id) {
        const url = `/user/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/user/${id}`;
        return axiosClient.put(url, data);
    },



};
export default UserAPI;