"use client";
import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

interface selectedDoor {
	selectedDoor: number;
	setSelectedDoor: Dispatch<SetStateAction<number>>;
}

const selectedDoorContext = createContext<selectedDoor>({
	selectedDoor: 0,
	setSelectedDoor: (): number => 0,
});

export function SelectedDoorProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selectedDoor, setSelectedDoor] = useState(0);

	return (
		<selectedDoorContext.Provider value={{ selectedDoor, setSelectedDoor }}>
			{children}
		</selectedDoorContext.Provider>
	);
}

export const useSelectedDoor = () => {
	return useContext(selectedDoorContext);
};
