import { render, screen } from '@testing-library/react'
import App from './App';



test('Should render the header', async () => {
 render(<App />);
screen.getByAltText('Alchemy Logo');
screen.getByText(/loading.../i);
await screen.findByLabelText('Meet Vonta!')

screen.debug();
    

})
