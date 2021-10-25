import { Container } from './style';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
					<strong>R$ 1000,00</strong>
				</header>
			</div>

			<div>
				<header>
					<p>Saidas</p>
					<img src={outcomeImg} alt="Saidas" />
					<strong> -R$ 500,00</strong>
				</header>
			</div>

			<div className="hightLight-backgroud">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total" />
					<strong>R$ 500,00</strong>
				</header>
			</div>
		</Container>
	);
}
