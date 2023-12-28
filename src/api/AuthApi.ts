import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

type TRegistration = {
    login : string,
    password : string,
    email : string
}
type TLogin = {
    loginOrEmail : string,
    password : string
}
type TConfirmation = {
    code: string
}
type TRecovery = {
    email: string
}
type TNewPassword = {
    newPassword: string,
    recoveryCode: string
}


export const AuthApi = createApi({
    reducerPath : "AuthApi",
    tagTypes : ["Auth"],
    baseQuery : fetchBaseQuery({
        baseUrl : "https://blogs-nest-sql-api.vercel.app/auth/"
    }),
    endpoints : (build) => ({
        registration : build.mutation({
            query : (data : TRegistration) => ({
                url : "registration",
                method : "POST",
                body : data
            })
        }),
        confirmation : build.mutation({
            query : (data : TConfirmation) => ({
                url : "registration-confirmation",
                method : "POST",
                body : data
            })
        }),
        login : build.mutation({
            query : (data : TLogin) => ({
                url : "login",
                method : "POST",
                body : data
            })
        }),
        recovery : build.mutation({
            query : (data : TRecovery) => ({
                url : "password-recovery",
                method : "POST",
                body : data
            })
        }),
        newPassword : build.mutation({
            query : (data : TNewPassword) => ({
                url : "new-password",
                method : "POST",
                body : data
            })
        }),
    })
})

export const {useRegistrationMutation, useConfirmationMutation, useLoginMutation, useRecoveryMutation, useNewPasswordMutation} = AuthApi;