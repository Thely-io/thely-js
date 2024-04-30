import axios, {type AxiosInstance } from "axios";
import {z} from "zod";
import {createAddressSchema, loginUserSchema, registerUserSchema, updateItemSchema} from "./schemas";
import { type CreateConsolidationRequest, type CreateShipmentRequest } from "./types";

export const axiosApiInstance:AxiosInstance = axios.create({
    baseURL: "https://api.thely.io/api/v1/"
});

export const saveInternalSessionToken = async (data: string) => {
    axiosApiInstance.defaults.headers['x-token'] = data
}

export const saveUserSessionToken = async (data: string) => {
    axiosApiInstance.defaults.headers.Authorization = data
}

export const loginUser = async (data: z.infer<typeof loginUserSchema>) => await axiosApiInstance.post('customer/login', data)

export const registerUser = async (data: z.infer<typeof registerUserSchema>) => await axiosApiInstance.post('customer/signup', data)

export const createRepack = async (id: string)  => await axiosApiInstance.post('/v1/tasks/repack', {id})

export const createConsolidation = async (
    consolidationReq: CreateConsolidationRequest
) => await axiosApiInstance.post('customer/consolidation', consolidationReq)
export const updateItem = async (data: z.infer<typeof updateItemSchema>) => await axiosApiInstance.patch('customer/item', data)

export const forgotPassword = async (email: string) =>
    await axiosApiInstance.post('v1/users/forgot',{email})

export const createShipment = async (data: CreateShipmentRequest) =>
    await axiosApiInstance.post('customer/shipment', data)

export const preparePayment = async (data: {shipmentId: string}) =>
    await axiosApiInstance.post(`customer/shipment/${data.shipmentId}/payment`)

export const selectRate = ({id, rate_id}:{id: string, rate_id: string}) => axiosApiInstance.patch(`customer/shipment`, {
    selected_rate: { id: rate_id },
    id
})

export const createAddress = async (data: z.infer<typeof createAddressSchema>) => await axiosApiInstance.post('customer/address', data)
