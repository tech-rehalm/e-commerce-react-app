import { apiSlice } from "./api/apiSlice";
import { ORDERS_URL, PAYPAL_URL } from "./features/constants";

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        createOder: builder.mutation({
            query: (order)=>({
                url: ORDERS_URL,
                method: "POST",
                body: order,
            })
        }),

        getOrderDetails: builder.query({
            query: (id)=>({
                url: `${ORDERS_URL}/${id}`
            })
        }),

        payOrder: builder.mutation({
            query: ({orderId, details})=>({
                url: `${ORDERS_URL}/${orderId}/pay`,
                method: "PUT",
                body: details,
            })
        }),
        getPayPalClientId: builder.query({
            query: ()=>({
                url: PAYPAL_URL
            })
        }),

        getMyOrders: builder.query({
            query: ()=> ({
                url: `${ORDERS_URL}/mine`
            }),
            keepUnusedDataFor: 5
        }),

        getOrders: builder.query({
            query: ()=> ({
                url: ORDERS_URL,
            })
        }),

        deliverOrder: builder.mutation({
            query: (orderId)=> ({
                url: `${ORDERS_URL}/deliver`,
                method: "PUT",
            })
        }),

        getTotalOrders: builder.query({
            query: ()=> `${ORDERS_URL}/total-orders`
        }),

        getTotalSales: builder.query({
            query: ()=> `${ORDERS_URL}/total-sales`
        }),
        getTotalSalesByDate: builder.query({
            query: ()=> `${ORDERS_URL}/total-sales-by-date`
        })
    })
})

export const {
    useGetTotalOrdersQuery,
    useGetTotalSalesQuery,
    useGetTotalSalesByDateQuery,
    //-------------------------------------------------
    useCreateOderMutation,
    useGetOrderDetailsQuery,
    usePayOrderMutation,
    useGetPayPalClientIdQuery,
    useGetMyOrdersQuery,
    useDeliverOrderMutation,
    useGetOrdersQuery
} = orderApiSlice