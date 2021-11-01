import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './style';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
	const { transactions } = useTransactions();

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === 'deposit') {
				acc.deposits += transaction.amount;
				acc.total += transaction.amount;
			} else {
				acc.withdraws += transaction.amount;
				acc.total -= transaction.amount;
			}

			return acc;
		},
		{
			deposits: 0,
			withdraws: 0,
			total: 0,
		},
	);

	return (
		<Container>
			{/* Forma antiga de usar ContextAPI */}
			{/* <TransactionsContext.Consumer>
				{data => {
					console.log(data);
					return <p>ok</p>;
				}}
			</TransactionsContext.Consumer> */}

			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
					<strong>
						{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						}).format(summary.deposits)}
					</strong>
				</header>
			</div>

			<div>
				<header>
					<p>Saidas</p>
					<img src={outcomeImg} alt="Saidas" />
					<strong>
						-
						{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						}).format(summary.withdraws)}
					</strong>
				</header>
			</div>

			<div className="hightLight-backgroud">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total" />
					<strong>
						{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						}).format(summary.total)}
					</strong>
				</header>
			</div>
		</Container>
	);
}
