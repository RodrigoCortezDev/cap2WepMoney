import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './style';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button type="button" onClick={onRequestClose} className="react-modal-close">
				<img src={closeImg} alt="Fechar Modal" />
			</button>
			<Container>
				<h2>Cadastrar Transação</h2>
				<input placeholder="Titulo" />
				<input placeholder="Valor" type="number" />
				<input placeholder="Categoria" />

				<TransactionTypeContainer>
					<button type="button">
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</button>
					<button type="button">
						<img src={outcomeImg} alt="Saida" />
						<span>Saida</span>
					</button>
				</TransactionTypeContainer>

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}