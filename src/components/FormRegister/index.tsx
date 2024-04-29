import { ChangeEvent, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { useFormik } from "formik";
import userSchema from './schemas';
import TextInput from '../TextInput';
import SelectInput from '../Select';
import DatePickerInput from '../DatePicker';
import MessageSnackbar from '../MessageSnackbar';
import useLaboratory from '../../hooks/laboratory';
import useProperty from '../../hooks/property';
import { UserProps } from '../../interfaces';

export interface SelectOptionsProps {
  id: string;
  nome: string;
  cnpj?: string;
}

const FormRegister = () => {
  const { laboratories } = useLaboratory();
  const { properties } = useProperty();

  const [message, setMessage] = useState({
    type: "",
    text: ""
  });

  const handleSend = (values: UserProps) => {
    setMessage({
      type: "",
      text: ""
    });
    setTimeout(() => {
      if (Object.keys(errors).length === 0) {
        setMessage({ type: "success", text: "Cadastro realizado com sucesso!" });
        console.log(values);
      } else {
        setMessage({ type: "error", text: "Preencha os campos obragatórios." });
      }
    }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      nome: "",
      dataInicial: null,
      dataFinal: null,
      cnpj: "",
      infosPropriedade: {
        id: "",
        nome: "",
      },
      laboratorio: {
        id: "",
        nome: "",
      },
      observacoes: ""
    },
    validationSchema: userSchema,
    onSubmit: (values) => handleSend(values)
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue
  } = formik;



  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>, options: SelectOptionsProps[]) => {
    const { name, value } = event.target;
    const selectedProperty = options.find((option: SelectOptionsProps) => option.id === value);
    if (selectedProperty) {
      setFieldValue(name, selectedProperty);
      if (selectedProperty.cnpj) {
        setFieldValue("cnpj", selectedProperty.cnpj);
      }

    }
  }

  return (
    <>
      <Box sx={{ padding: 4 }}>
        <Card>
          <Box sx={{ display: "flex", justifyContent: "space-between", backgroundColor: (theme) => theme.palette.primary.main, padding: "10px" }}>
            <CardHeader sx={{ padding: 0, color: (theme) => theme.palette.white }} title="Teste front-end" color="text.secondary" />
            <Button type="button" variant="text" onClick={handleSend}>Salvar</Button>
          </Box>
          <CardContent>
            <Grid container>
              <Grid item xs={12} justifyContent="center"
                alignItems="center">

                <Grid container gap={2} sx={{ flexWrap: 'nowrap' }}>
                  <Grid item xs={6} >
                    <TextInput
                      autoFocus
                      label="Nome*"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nome}
                      fieldName="nome"
                      errors={errors.nome}
                      maxCharacters={60}
                      placeholder="Nome*"
                      touched={touched.nome}
                      multiline={undefined} rows={undefined}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Box gap={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                      <DatePickerInput
                        onChange={(date) => handleChange({ target: { name: 'dataInicial', value: date.toISOString() } })}
                        label="Data Inicial*"
                        value={values.dataInicial}
                        fieldName="dataInicial"
                        errors={errors.dataInicial}
                      />
                      <DatePickerInput
                        onChange={(date) => handleChange({ target: { name: 'dataFinal', value: date.toISOString() } })}
                        label="Data Final*"
                        value={values.dataFinal}
                        fieldName="dataFinal"
                        errors={errors.dataFinal}
                      />
                    </Box>
                    <Typography variant="subtitle1" align="right">
                      Info
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Grid container gap={2} sx={{ flexWrap: 'nowrap' }}>
                  <Grid item xs={6}>
                    <Box>
                      <SelectInput
                        label="Propriedades*"
                        onChange={(e) => handleSelectChange(e, properties)}
                        onBlur={handleBlur}
                        value={values.infosPropriedade.id}
                        fieldName="infosPropriedade"
                        options={properties}
                        placeholder="Propriedades*"
                        errors={errors.infosPropriedade}
                      />
                      <Typography variant="subtitle1">
                        {values.cnpj}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <SelectInput
                      label="Laboratório*"
                      onChange={(e) => handleSelectChange(e, laboratories)}
                      onBlur={handleBlur}
                      value={values.laboratorio.id}
                      fieldName="laboratorio"
                      options={laboratories}
                      errors={errors.laboratorio}
                      placeholder="Laboratório*" />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <TextInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.observacoes}
                  fieldName="observacoes"
                  maxCharacters={1000}
                  multiline
                  placeholder="Observações"
                  rows={5}
                  label="Observações"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box >
      {message.text && (
        <MessageSnackbar message={message?.text} severity={message?.type} />
      )
      }
    </>
  );
};

export default FormRegister;

