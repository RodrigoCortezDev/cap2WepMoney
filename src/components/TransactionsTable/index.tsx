import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

export function TransactionsTable() {
	useEffect(() => {
		api.get('/transactions').then(resp => console.log(resp.data));
	}, []);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					<tr key="1">
						<td>Desenvolvimento de site</td>
						<td className="deposit">R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
					<tr key="2">
						<td>Desenvolvimento de site</td>
						<td className="withdraw"> -R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
					<tr key="3">
						<td>Desenvolvimento de site</td>
						<td className="deposit">R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
