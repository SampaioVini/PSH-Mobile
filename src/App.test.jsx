import { getByAltText, render } from '@testing-library/react-native'
import Home from './pages/Home'


test('sum', () => {
    const { getByText } = render(<Home />)

    expect(getByText('List')).toBeTruthy()
})