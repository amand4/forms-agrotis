import { useState } from 'react';
import { Box, Button, Card, CardHeader, Grid } from '@mui/material';
import { useFormik } from "formik";
import { useUserContext } from '../../contexts/useContext';
import userSchema from './schemas';
import useUserForm from '../../hooks/useUserForm';
import TextInput from '../TextInput';
import SelectInput from '../Select';
import DatePickerInput from '../DatePicker';
import MessageSnackbar from '../MessageSnackbar';

const FormRegister = () => {
  const { toSendData } = useUserContext();
  const { laboratories, properties } = useUserForm();
  const [message, setMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      nome: "",
      dataInicial: null,
      dataFinal: null,
      infosPropriedade: {
        id: "",
        nome: "",
      },
      laboratorio: {
        id: "",
        name: "",
      },
      observacoes: ""
    },
    validationSchema: userSchema,
    onSubmit: (values) => handleSubmit(values)
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue
  } = formik;

  const handleSend = () => {
    setMessage(null);
    setTimeout(() => {
      if (Object.keys(errors).length === 0) {
        setMessage({ type: "success", message: "Cadastro realizado com sucesso" });
        //toSendData(values);
      } else {
        setMessage({ type: "error", message: "Erro ao enviar o formulário. Por favor, verifique os campos e tente novamente." });
      }
    }, 1000);
  };

  const handleSelectChange = (event, options) => {
    const { name, value } = event.target;
    const selectedProperty = options.find(option => option.id === value);
    if (selectedProperty) {
      setFieldValue(name, selectedProperty);
      if (selectedProperty.cnpj) {
        setFieldValue("cnpj", selectedProperty.cnpj);
      }
    }
  };

  return (
    <>
      <Box sx={{ paddingTop: 3 }}>
        <Card>
          <Box sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#00796B", padding: "10px" }}>
            <CardHeader sx={{ color: "#FFF", fontWeight: "500", padding: 0 }} title="Teste front-end" />
            <Button color="secondary" type="button" variant="contained" onClick={handleSend}>Salvar</Button> {/* Altere o type para "button" */}
          </Box>
          <Grid container spacing={2} sx={{ padding: 2 }} >
            <Grid item xs={6}>
              <TextInput
                autoFocus
                label="Nome*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nome}
                fieldName="nome"
                error={touched.nome && Boolean(errors.nome)}
                variant="standard"
                maxCharacters={60}
                placeholder="Nome*" errors={undefined} touched={undefined} multiline={undefined} rows={undefined} />
              <SelectInput
                label="Propriedades*"
                onChange={(e) => handleSelectChange(e, properties)}
                onBlur={handleBlur}
                value={values.infosPropriedade.id}
                fieldName="infosPropriedade"
                options={laboratories}
                placeholder="Propriedades*" errors={undefined} touched={undefined} />
            </Grid>
            <Grid item xs={6}>
              <DatePickerInput
                onChange={(date) => handleChange({ target: { name: 'dataInicial', value: date.toISOString() } })}
                label="Data Inicial*"
                value={values.dataInicial}
                onBlur={handleBlur}
                fieldName="dataInicial"
              />
              <DatePickerInput
                onChange={(date) => handleChange({ target: { name: 'dataFinal', value: date.toISOString() } })}
                label="Data Final*"
                value={values.dataFinal}
                onBlur={handleBlur}
                fieldName="dataFinal"
              />
              <SelectInput
                label="Laboratório*"
                onChange={(e) => handleSelectChange(e, laboratories)}
                onBlur={handleBlur}
                value={values.laboratorio.id}
                fieldName="laboratorio"
                options={laboratories}
                placeholder="Laboratório*" errors={undefined} touched={undefined} />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.observacoes}
                fieldName="observacoes"
                error={touched.observacoes && Boolean(errors.observacoes)}
                variant="standard"
                maxCharacters={1000}
                multiline
                placeholder="Observações"
                rows={5}
                label="Observações" errors={undefined} touched={undefined} />
            </Grid>
          </Grid>
        </Card>
      </Box>
      {message && (
        <MessageSnackbar message={message?.message} severity={message?.type} />
      )}
    </>
  );
};

export default FormRegister;
