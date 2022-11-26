import { screen,fireEvent,render } from '@testing-library/react-native'
import App from '../App';

describe('Searching',() =>{
    it('When a user presses a searchbar a cancel button should be present', async () => {
        render(<App />);
    
        fireEvent.press(screen.getByRole('input'));
      
        expect(await screen.findByRole('button')).toBeTruthy();
        screen.debug();
      });
})