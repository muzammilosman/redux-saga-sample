import axios from "axios";

export function fetchUsers() {
    return axios.request({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"
    });
}