import React from "react";
import {useRegistrationMutation} from "../../../../api/AuthApi";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import {AuthWrapper} from "../../components/Wrapper/AuthWrapper";
import {Input} from "../../components/Input/Input";
import {Button} from "../../../../components/common/Button/Button";
import {useNavigate} from "react-router-dom";
import {Loader} from "../../../../components/common/Loader/Loader";

type TInputs = {
    login : string,
    email : string,
    password : string
}

export const Registration = () => {
    const formMethods = useForm<TInputs>({
        mode: 'onSubmit',
        shouldUnregister: false
    })
    const { handleSubmit } = formMethods
    const navigate = useNavigate();
    const [registration, {isLoading}] = useRegistrationMutation(undefined);
    if (isLoading) {
        return <Loader/>
    }
    const onSubmit: SubmitHandler<TInputs> = (data) => {
        registration(data)
            .unwrap()
            .then(() => {
                navigate("/confirm_code")
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <FormProvider {...formMethods}>
            <AuthWrapper
                title={"Welcome aboard!"}
                text={"Let's get you going"}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        title={"Login"}
                        name={"login"}
                        rules={{required : true, maxLength: 10, minLength  : 3}}
                        type={"text"}/>
                    <Input
                        title={"Password"}
                        name={"password"}
                        rules={{required : true, maxLength: 20, minLength  : 6}}
                        type={"password"}/>
                    <Input
                        title={"Email address"}
                        name={"email"}
                        rules={{
                        required : true,
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format",
                        }
                        }}
                        type={"text"}/>
                    <Button text={"Sign Up"} filled={true} type={"submit"}/>
                </form>
            </AuthWrapper>
        </FormProvider>

    )
}