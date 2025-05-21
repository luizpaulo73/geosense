import Setor from '../../../components/Setor/Setor';
import { useLocalSearchParams } from 'expo-router';
import BaseTelas from '../../../components/BaseTelas/BaseTelas';

export default function SelecionarMapa() {

    const { setor } = useLocalSearchParams();
    const setorString = Array.isArray(setor) ? setor[0] : setor || '';

    return (
        <BaseTelas titulo=''>
            <Setor area={setorString}/>
        </BaseTelas>
    )
}