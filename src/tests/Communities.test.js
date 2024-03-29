import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Communities from '../pages/Communities';

describe('Testes da tela Communities', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Communities/>
      </BrowserRouter>
    );
  });

  it('Existe card em Communities?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Communities?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Communities?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe botão editar em Communities?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it('Existe botão excluir em Communities?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

});