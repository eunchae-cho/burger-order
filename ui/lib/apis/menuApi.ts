import {axiosInstance} from "@/lib/utils/axiosUtils";

const HOST = process.env.NEXT_PUBLIC_API_HOST

export const menuApi = {
    getAll() {
        return axiosInstance.get(`${HOST}/v2/menus`)
    }
}