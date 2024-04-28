import * as Yup from "yup";

const userSchema = Yup.object().shape({
  nome: Yup.string().required('Name is required'),
  dataInicial: Yup.date().required('Start date is required'),
  dataFinal: Yup.date().required('End date is required'),
  cnpj: Yup.string().required('Name is required'),
  infosPropriedade: Yup.object().shape({
    id: Yup.number().required('Property info ID is required'),
    nome: Yup.string().required('Property info name is required'),
  }),
  laboratorio: Yup.object().shape({
    id: Yup.number().required('Laboratory ID is required'),
    nome: Yup.string().required('Laboratory name is required'),
  })
});

export default userSchema;