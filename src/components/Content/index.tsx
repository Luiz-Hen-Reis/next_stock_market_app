import Heading from 'components/Heading';
import PageContainer from 'components/PageContainer';
import * as Styled from './styles';


export default function Content() {
  return (
    <PageContainer>
        <Styled.Container>
            <Heading title='Trading Page' />
            <p>Search stock symbols to trade. For example, type GM for General Motors.</p>
            <form>
                <input type="text" placeholder='Enter stock symbol' />
                <button>Submit</button>
            </form>
        </Styled.Container>
    </PageContainer>
  )
}
