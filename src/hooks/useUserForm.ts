import { useQuery } from 'react-query';
import { laboratoryServices } from '../services/api/laboratory/api';
import { propertyServices } from '../services/api/property/api';
import { LaboratoryProps, PropertyProps } from '../interfaces';

const useUserForm = () => {

  const laboratoriesQuery = useQuery<LaboratoryProps[]>('laboratories', async () => {
    const data = await laboratoryServices.get();
    return data;
  });

  const propertiesQuery = useQuery<PropertyProps[]>('properties', async () => {
    const data = await propertyServices.get();
    return data;
  });


  return {
    laboratories: laboratoriesQuery.data,
    laboratoriesLoading: laboratoriesQuery.isLoading,
    laboratoriesError: laboratoriesQuery.error,
    properties: propertiesQuery.data,
    propertiesLoading: propertiesQuery.isLoading,
    propertiesError: propertiesQuery.error,
  };
};

export default useUserForm;
