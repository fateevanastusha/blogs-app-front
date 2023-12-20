import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const AuthApi = createApi({
    reducerPath : "AuthApi",
    tagTypes : ["Auth"],
    baseQuery : fetchBaseQuery({
        baseUrl : "https://blogs-nest-sql-api.vercel.app/auth/"
    }),
    endpoints : (build) => ({
        registration : build.mutation({
            query : (data) => ({
                url : "registration",
                method : "POST",
                body : data
            })
        }),
        confirmation : build.mutation({
            query : (data) => ({
                url : "registration-confirmation",
                method : "POST",
                body : data
            })
        })
    })
})

export const {useRegistrationMutation, useConfirmationMutation} = AuthApi;