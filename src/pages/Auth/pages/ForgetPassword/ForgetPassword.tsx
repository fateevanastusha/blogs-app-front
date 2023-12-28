import styles from './ForgetPassword.module.css'
import React from "react";
import {SubmitHandler, useForm, FormProvider} from "react-hook-form";
import {AuthWrapper} from "../../components/Wrapper/AuthWrapper";
import {Input} from "../../components/Input/Input";
import {Button} from "../../../../components/common/Button/Button";
import {useRecoveryMutation} from "../../../../api/AuthApi";
import {Loader} from "../../../../components/common/Loader/Loader";
import {useNavigate} from "react-router-dom";

type TInputs = {
    email : string;
}

export const ForgetPassword = () => {
    const navigate = useNavigate()
    const formMethods = useForm<TInputs>({
        mode: 'onSubmit',
        shouldUnregister: false
    })
    const { handleSubmit } = formMethods
    const [recovery, {isLoading}] = useRecoveryMutation(undefined);
    if (isLoading) {
        return <Loader/>
    }
    const onSubmit: SubmitHandler<TInputs> = (data) => {
        recovery(data)
            .unwrap()
            .then(() => {
                navigate('/my-blog')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <FormProvider {...formMethods}>
            <AuthWrapper
                title={"Forget password?"}
                text={"We've got you! please enter your email"}
            >
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <Button text={"Get code"} filled={true} type={"submit"}/>
                    </form>
            </AuthWrapper>
        </FormProvider>
    )
}