import styles from './Login.module.css'
import React from "react";
import {Button} from "../../../../components/common/Button/Button";
import {AuthWrapper} from "../../components/Wrapper/AuthWrapper";
import {Input} from "../../components/Input/Input";
import {useLoginMutation} from "../../../../api/AuthApi";
import {SubmitHandler, useForm, FormProvider} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Loader} from "../../../../components/common/Loader/Loader";

type TInputs = {
    loginOrEmail : string,
    password : string
}

export const Login = () => {
    const formMethods = useForm<TInputs>({
        mode: 'onSubmit',
        shouldUnregister: false
    })
    const { handleSubmit } = formMethods
    const navigate = useNavigate();
    const [login, {isLoading}] = useLoginMutation(undefined);
    const onSubmit: SubmitHandler<TInputs> = (data) => {
        login(data)
            .unwrap()
            .then(() => {
                navigate('/my-blog')
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
                    title={"Welcome back!"}
                    text={"Let's get you going"}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            title={"Login Or Email"}
                            name={"loginOrEmail"}
                            rules={{required : true, maxLength: 10, minLength  : 3}}
                            type={"text"}/>
                        <Input
                            title={"Password"}
                            name={"password"}
                            rules={{required : true, maxLength: 20, minLength  : 6}}
                            type={"password"}/>
                        <div className={styles.checkBox}>
                            <label className={styles.containerCheck}> Keep me signed in
                                <input type="checkbox"/>
                                <span className={styles.checkmark}></span>
                            </label>
                        </div>
                        <Button text={"Sign In"} filled={true} type={"submit"}/>
                    </form>
                    <div className={styles.text} onClick={() => navigate('/registration')}>Don`t have an account?</div>
                    <div className={styles.text} onClick={() => navigate('/forget_password')}>Forgot password?</div>
                </AuthWrapper>
            </FormProvider>

    )
}