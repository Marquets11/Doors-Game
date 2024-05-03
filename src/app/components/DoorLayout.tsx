import { useState } from "react";
import { useCorrectDoorContext } from "../hooks/correctDoorContext";
import { useSelectedDoor } from "../hooks/selectedDoorContext";
import GiftLayout from "./GiftLayout";

export default function DoorLayout({ doorNumber }: { doorNumber: number }) {
	const { selectedDoor, setSelectedDoor } = useSelectedDoor();
	const { correctDoor } = useCorrectDoorContext();
	const [openDoor, setOpenDoor] = useState<boolean>(false);

	return (
		<div className="h-52 w-36 border-b-8 border-stone-400 px-4 relative">
			<label
				className="h-full w-full flex justify-center p-2 border-t-4 border-l-4 border-r-4 border-orange-700 has-[:checked]:border-yellow-300 bg-orange-500 relative cursor-pointer"
				htmlFor={`door-option-${doorNumber}`}
			>
				<input
					type="radio"
					name="door-option"
					id={`door-option-${doorNumber}`}
					className="hidden peer"
					onClick={() => setSelectedDoor(doorNumber)}
				/>

				<span className="text-white text-xl peer-[:checked]:text-yellow-300 peer-[:checked]:font-bold">
					{doorNumber}
				</span>
				<button
					className="top-1/2 left-4 bg-orange-700 rounded-full w-3 h-3 peer-[:checked]:bg-yellow-300 absolute"
					onClick={() => {
						setOpenDoor(true);
						if (selectedDoor === correctDoor) {
							alert("Você ganhou!!!");
						}
					}}
				></button>
			</label>
			{openDoor && (
				<div className="absolute top-1 left-5 bg-black h-[196px] w-[104px] z-10 flex flex-col justify-end items-center">
					{doorNumber === correctDoor && <GiftLayout />}
				</div>
			)}
		</div>
	);
}
