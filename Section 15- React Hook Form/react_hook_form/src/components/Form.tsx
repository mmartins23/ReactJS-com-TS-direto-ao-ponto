import { FormSchema } from "../schema/formSchema";
import { useForms } from "../hooks/UseForms";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" placeholder="Insert your name" {...register("name")} />
      {errors.name && <small>{errors.name.message}</small>}
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Form;