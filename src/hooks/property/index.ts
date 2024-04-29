import { useQuery } from 'react-query';
import { propertyServices } from '../../services/api/property/api';
import { PropertyProps } from '../../interfaces';

const useProperty = () => {

  const propertiesQuery = useQuery<PropertyProps[]>('properties', async (): Promise<PropertyProps[]> => {
    const data = await propertyServices.get();
    return data;
  });

  return {
    properties: propertiesQuery.data,
    propertiesLoading: propertiesQuery.isLoading,
    propertiesError: propertiesQuery.error
  };
};

export default useProperty;
