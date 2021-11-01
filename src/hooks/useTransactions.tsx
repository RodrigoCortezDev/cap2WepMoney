import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
	id: string;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; //Cria um tipo baseado em outro omitindo 2 campos.

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
	children: ReactNode;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get('/transactions').then(resp => setTransactions(resp.data.transactions));
	}, []);

	async function createTransaction(transactionInput: TransactionInput) {
		const reponse = await api.post('/transactions', { ...transactionInput, createdAt: new Date() });
		const { transaction } = reponse.data;
		setTransactions([...transactions, transaction]);
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}> {children} </TransactionsContext.Provider>
	);
}

export function useTransactions() {
	const context = useContext(TransactionsContext);
	return context;
}
