import {useRequest} from "@ajxb/userequest";
import {createShipment} from "../../index";
import {useEffect} from "react";
import {type ShipmentData} from "../../types.ts";

export const useShippingRates = (parcel:string, address:string) => {
    const {createShipmentRequest, createShipmentLoading, createShipmentError, createShipmentResponse} = useRequest(createShipment, 'createShipment')

    useEffect(() => {
        if (parcel && address) createShipmentRequest({parcel: {id: parcel}, to_address: {id: address}})
    }, [parcel, address]);

    return {
        shipment: createShipmentResponse as ShipmentData,
        error: createShipmentError,
        loading: createShipmentLoading
    }
}
