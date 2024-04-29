import { LaboratoryProps } from '../../../interfaces';

const get = async (): Promise<LaboratoryProps[]> => {
  try {
    const response = await fetch('https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/laboratorios.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching data from the API:", error);
    throw error;
  }
};

export const laboratoryServices = {
  get
};
