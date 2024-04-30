export interface ProcessPaymentInput {
    shipmentId: string
}

export interface PaymentInformationReturn {
    payment_client_infos: string
    destination_account_id: string
    payment_group_id: string
    invoiceId: string
}


export interface CreateCustomerInput {
    email: string
    password: string
    confirmPassword?: string
    firstname: string
    lastname: string
    phone: string
}


export interface CreateConsolidationRequest {
    from_parcels: PackageData[]
}

export interface PackageDimensions {
    length: number
    width: number
    height: number
    weight: number
}

export type CreateAddressInput = {
    name?: string;
    company?: string;
    street1: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
    phone?: string;
    country: string;
    merchantId?: string;
    customerId?: string;
    type: EAddressType;
    notes?: string;
};


export type AddressData = CreateAddressInput & {
    id: string;
    easypostId: string;
};

export enum EAddressType {
    shipping = 'shipping',
    billing = 'billing'
}
export interface WarehouseData {
    id: string
    name: string
    merchantId: string
    address: AddressData
}

export interface PackageData {
    media?: string[]
    tasks?: {id: string, status: 'pending' | 'completed'}[]
    id: string
    easypostId?: string
    merchantId?: string
    warehouse: WarehouseData
    warehouseId?: string
    customerId?: string
    dimensions: PackageDimensions
    recommendedRepacking?: boolean
    notes?: string
    receivedOn: string
    vendor?: string
    carrier?: string
    tracking?: string
    trackerId?: string
    parcelId?: string
    status?: string
    in_consolidation?: ConsolidationData,
    created_at: string
    updated_at?: string
    items: ItemData[]
    consolidation?: ConsolidationData
    creator?: UserInfoData
    lockedOn?: string
}

export interface UserInfoData {
    id: string
    email: string
    firstname: string
    lastname: string
    merchantId: string
    phone: string
}

export interface ItemData {
    id: string
    packageId: string
    description: string
    category: string
    hsCode: string
    qty: number
    weight: number
    value: string
    fromCurrency: string
    toCurrency: string
    fxrate: string
    fxvalue: string
    originCountry: string
}


export enum PackageStatusesEnums {
    Receiving = 'Receiving',
    Received = 'Received',
    Shipment = 'Shipment Created',
    Consolidated = 'Consolidation done',
    InConsolidation = 'Consolidation requested',
    OnHold = 'On Hold',
    Force = 'Force Unrestricted',
}

export interface ConsolidationData extends CreateConsolidationRequest {
    id: string
    submittedOn: string,
    status: ConsolidationStatuses
}

export enum ConsolidationStatuses {
    'pending' = 'Pending',
    'in_progress' = ' In Progress',
    'on_hold' = 'On Hold',
    'canceled' = 'Canceled',
    'completed' = 'Completed',
}

export interface CreateShipmentFullInput {
    merchantId: string
    customerId: string
    toAddress: AddressData
    fromAddress: AddressData
    package: PackageData
    customsInfo?: string
}

export interface CreateShipmentRequest {
    to_address: {
        id: string
    },
    parcel: {id: string}
}

export interface ShipmentData {
    id: string
    easypostId: string
    merchantId?: string
    customerId?: string
    to_address: AddressData
    from_address: AddressData
    return_address?: AddressData
    buyer_address?: AddressData

    parcel: PackageData

    customs_info?: any

    scan_form?: any
    insurance?: any

    rates?: ShipmentRate[]

    selected_rate: ShipmentRate

    postage_label?: any

    messages?: string[]

    is_return?: boolean

    tracking_code: string

    usps_zone?: number

    status?: string

    tracker?: any
    trackerId?: string

    fees?: any

    refund_status?: string

    batch_id?: string

    batch_status?: string

    batch_message?: string

    created_at: string

    updated_at: string
}

export interface ShipmentRate {
    carrier: string
    currency: string
    delivery_days?: number

    est_delivery_days?: number

    id: string

    list_currency: string

    list_rate: string

    mode: string

    rate: string

    retail_currency: string

    retail_rate: string

    service: string

    shipment_id: string
}


export enum EUnit {
    imperial = 'imperial',
    metric = 'metric',
}

export interface IShipmentTotal {
    daysInStorage: number,
    services: string[],
    total: number
}

export interface ITransaction {
    id: string
    amount: string
    currency: string
    status: string
    created_at: string
    updated_at: string
    type: string
    payment: string
    payment_group_id: string
    invoice_id: string
    customer_id: string
    merchant_id: string
}

export interface IAddress {
    city: string,
    company: string,
    country: string,
    created_at: string,
    customerId: string,
    easypostId: string,
    id: string,
    merchantId: string,
    name: string,
    notes: string,
    operation_mode: number,
    phone: string,
    state: string,
    street1: string,
    street2: string,
    type: string,
    updated_at: string,
    verifications: Object[],
    zip: string
}

export interface IRate {
    carrier: string,
    carrier_account_id: string,
    created_at: string,
    currency: string,
    delivery_date: string,
    delivery_date_guaranteed: boolean,
    delivery_days: number,
    id: string,
    list_currency: string,
    list_rate: string,
    operation_mode: number,
    rate: string,
    retail_currency: string,
    retail_rate: string,
    service: string,
    shipment_id: string,
    updated_at: string
}

export interface IShipment {
    buyer_address: IAddress,
    created_at: string,
    customs_infoId: string,
    easypostId: string,
    from_address: IAddress,
    fxrate: string,
    id: string,
    insuranceId: string,
    label: string,
    lockedOn: string,
    merchantId: string,
    notes: string,
    operation_mode: number,
    refund_status: string,
    return_address: IAddress,
    scan_formId: string,
    selected_rate: IRate,
    selected_rateId: string,
    status: string,
    to_address: IAddress,
    trackerId: string,
    tracking_code: string,
    updated_at: string
}

export interface ITransaction {
    amount: string,
    created_at: string,
    currency: string,
    destination_account_id: string,
    fee: number,
    id: string,
    operation_mode: number,
    payment_group_id: string,
    payment_id: string,
    settle_shipment: IShipment | null,
    shipment: IShipment,
    status: string,
    updated_at: string
}
