import useHome from './useHome';
import ContentWrapper from '../../components/common/ContentWrapper';
import Table from './components/Table';


const Home = () => {
    const { bgColor } = useHome();

    return (
        <ContentWrapper>
            <h1 className='text-3xl font-bold mb-2 text-primary'>Universities</h1>

            <div className='mt-5 w-full p-3 rounded-2xl shadow-md shadow-blue-100' style={{backgroundColor: bgColor}}>
                <Table />
            </div>
        </ContentWrapper>
    )
}

export default Home