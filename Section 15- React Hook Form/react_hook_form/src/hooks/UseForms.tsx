import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema, formSchema } from "../schema/formSchema";

export const useForms = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    return { register, handleSubmit, errors};
};