import { FormSchema } from "../schema/formSchema";
import { useForms } from "../hooks/UseForms";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-white p-4 rounded-md border border-slate-300">
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Nome:</label>
        <input className="h-10 pl-2 rounded-md border border-slate-300" type="text" id="name" placeholder="Insert your name" {...register("name")} />
        {errors.name && <small className="text-red-500 italic">{errors.name.message}</small>}
      </div>
      <button
        className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all"
        type="submit">Cadastrar</button>
    </form>
  )
}

export default Form;