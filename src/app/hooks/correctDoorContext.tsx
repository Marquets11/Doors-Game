"use client";
import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

interface CorrectDoor {
	correctDoor: number;
	setCorrectDoor: Dispatch<SetStateAction<number>>;
}

const correctDoorContext = createContext<CorrectDoor>({
	correctDoor: 0,
	setCorrectDoor: (): number => 0,
});

export function CorrectDoorProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [correctDoor, setCorrectDoor] = useState(0);

	return (
		<correctDoorContext.Provider value={{ correctDoor, setCorrectDoor }}>
			{children}
		</correctDoorContext.Provider>
	);
}

export const useCorrectDoorContext = () => {
	return useContext(correctDoorContext);
};
