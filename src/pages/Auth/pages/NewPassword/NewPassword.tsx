import React from "react";
import styles from './NewPassword.module.css'
import {useForm, FormProvider, SubmitHandler} from "react-hook-form";
import {AuthWrapper} from "../../components/Wrapper/AuthWrapper";
import {Input} from "../../components/Input/Input";
import {Button} from "../../../../components/common/Button/Button";
import {useNewPasswordMutation} from "../../../../api/AuthApi";
import {Loader} from "../../../../components/common/Loader/Loader";

type TInputs = {
    newPassword : string,
    recoveryCode : string
}

export const NewPassword = () => {
    const formMethods = useForm<TInputs>({
        mode: 'onSubmit',
        shouldUnregister: false
    })
    const { handleSubmit } = formMethods
    const [newPassword, {isLoading}] = useNewPasswordMutation(undefined);

    const onSubmit: SubmitHandler<TInputs> = (data) => {
        newPassword(data)
            .unwrap()
            .then(() => {
                /*navigate('/my-blog')*/
            })
            .catch((error) => {
                console.log(error)
            })
    }
    if (isLoading) {
        return <Loader/>
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