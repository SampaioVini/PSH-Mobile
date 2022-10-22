import { getByText, render } from '@testing-library/react-native'
import Home from './pages/Home'


// test('sum', () => {
//     const { getByText } = render(<Home />)

//     expect(getByText('List')).toBeTruthy()
// })


describe('', () => {
    it('Should render home component', () => {
        const { getByText } = render(<Home />);

        expect(getByText('List')).toBeTruthy();
    });
    it();
    it();
    it();
})