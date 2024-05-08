import { useNavigate } from 'react-router-dom';
import { nomesAlimentos } from '../types';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './CalculadoraChurrasco.css';


const esquemaValidacao = Yup.object().shape({
  pessoas: Yup.number()
    .min(1, "Deve haver pelo menos 1 pessoa")
    .required("Número de pessoas é obrigatório"),
  selecaoAlimentos: Yup.array()
    .of(Yup.string())
    .test(
      "check-selecaoAlimentos",
      "Selecione pelo menos um tipo de alimento",
      (array) => array != null && array.length > 0
    ),
});

const CalculadoraChurrasco = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <Formik
        initialValues={{ pessoas: 0, selecaoAlimentos: [] }}
        validationSchema={esquemaValidacao}
        onSubmit={(values) => {
          navigate("/resultado", {
            state: {
              pessoas: values.pessoas,
              alimentosSelecionados: values.selecaoAlimentos,
            },
          });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='inputGroup'>
              <label className="inputLabel" htmlFor="pessoas">
                Número de Pessoas:
              </label>
              <Field
                name="pessoas"
                type="number"
              />
              {errors.pessoas && touched.pessoas ? (
                <p className='error'>{errors.pessoas}</p>
              ) : null}
            </div>

            <h2>Selecione os alimentos para o churrasco:</h2>
            {Object.keys(nomesAlimentos).map((alimento) => (
              <div key={alimento}>
                <label>
                  <Field
                    type="checkbox"
                    name="selecaoAlimentos"
                    value={alimento}
                  />
                  {nomesAlimentos[alimento]}
                </label>
              </div>
            ))}
            {errors.selecaoAlimentos ? (
              <p className='error'>{errors.selecaoAlimentos}</p>
            ) : null}

            <button className='calculateButton' type="submit">
              Calcular
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CalculadoraChurrasco;
