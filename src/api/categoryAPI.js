import { axiosClient } from "./link.js";
const CategoryAPI = {
    getAll() {
        const url = `/category`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(category) {
        const url = `/category`;
        return axiosClient.post(url, category);
    },
    remove(id) {
        const url = `/category/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/category/${id}`;
        return axiosClient.put(url, data);
    },



};
export default CategoryAPI;