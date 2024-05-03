"use client";
import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

interface DoorsQuantityState {
	doorsQuantity: number;
	setDoorsQuantity: Dispatch<SetStateAction<number>>;
}

const doorsQuantityContext = createContext<DoorsQuantityState>({
	doorsQuantity: 1,
	setDoorsQuantity: (): number => 1,
});

export const DoorsQuantityProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [doorsQuantity, setDoorsQuantity] = useState(1);
	return (
		<doorsQuantityContext.Provider value={{ doorsQuantity, setDoorsQuantity }}>
			{children}
		</doorsQuantityContext.Provider>
	);
};

export const useDoorsQuantityContext = () => {
	return useContext(doorsQuantityContext);
};
