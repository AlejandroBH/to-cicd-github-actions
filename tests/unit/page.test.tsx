import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/page';

describe('Página Principal', () => {
    it('renderiza el título del contador', () => {
        render(<Home />);
        const title = screen.getByText(/Contador/i);
        expect(title).toBeInTheDocument();
    });

    it('inicia con el contador en 0', () => {
        render(<Home />);
        const count = screen.getByText('0');
        expect(count).toBeInTheDocument();
    });

    it('incrementa el contador cuando se hace clic en el botón', () => {
        render(<Home />);
        const button = screen.getByRole('button', { name: /Incrementar/i });
        const count = screen.getByText('0');

        fireEvent.click(button);
        expect(screen.getByText('1')).toBeInTheDocument();

        fireEvent.click(button);
        expect(screen.getByText('2')).toBeInTheDocument();
    });
});
