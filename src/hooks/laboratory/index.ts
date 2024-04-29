import { useQuery } from 'react-query';
import { laboratoryServices } from '../../services/api/laboratory/api';
import { LaboratoryProps } from '../../interfaces';

const useLaboratory = () => {

  const laboratoriesQuery = useQuery<LaboratoryProps[]>('properties', async (): Promise<LaboratoryProps[]> => {
    const data = await laboratoryServices.get();
    return data
  });

  return {
    laboratories: laboratoriesQuery.data,
    laboratoriesLoading: laboratoriesQuery.isLoading,
    laboratoriesError: laboratoriesQuery.error
  };
};

export default useLaboratory;
