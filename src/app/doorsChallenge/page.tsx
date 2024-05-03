"use client";
import Link from "next/link";
import DoorLayout from "../components/DoorLayout";
import { useDoorsQuantityContext } from "../hooks/doorsQuantityContext";
import { useCorrectDoorContext } from "../hooks/correctDoorContext";

export default function DoorsChallenge() {
	const { doorsQuantity, setDoorsQuantity } = useDoorsQuantityContext();
	const { setCorrectDoor } = useCorrectDoorContext();

	return (
		<div className="min-h-screen bg-stone-800 p-5">
			<form
				onSubmit={(ev) => ev.preventDefault()}
				className={`flex flex-wrap gap-5 justify-center`}
			>
				{doorsQuantity &&
					Array.from({ length: doorsQuantity }).map((_, index) => (
						<DoorLayout doorNumber={index + 1} key={index} />
					))}
			</form>
			<Link href={"/"}>
				<button
					className="font-bold bg-orange-400 rounded-lg px-4 py-2 hover:bg-orange-500 mt-5 w-full"
					onClick={() => {
						setDoorsQuantity(1);
						setCorrectDoor(0);
					}}
				>
					Reiniciar
				</button>
			</Link>
		</div>
	);
}
