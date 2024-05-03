"use client";
import { useCorrectDoorContext } from "../hooks/correctDoorContext";
import { useDoorsQuantityContext } from "../hooks/doorsQuantityContext";

export default function DoorsQuantity() {
	const { doorsQuantity, setDoorsQuantity } = useDoorsQuantityContext();
	const { correctDoor, setCorrectDoor } = useCorrectDoorContext();

	return (
		<div className="card-quantity">
			<h3 className="font-mono">Qtde. Portas?</h3>
			<span className="text-6xl">{doorsQuantity}</span>
			<nav className="flex gap-2">
				<button
					className="btn-quantity"
					onClick={() => {
						setDoorsQuantity((prev: number) => (prev !== 1 ? prev - 1 : 1));
						if (doorsQuantity !== 1 && doorsQuantity - 1 < correctDoor)
							setCorrectDoor(0);
					}}
				>
					-
				</button>
				<button
					className="btn-quantity"
					onClick={() =>
						setDoorsQuantity((prev: number) => (prev !== 10 ? prev + 1 : 10))
					}
				>
					+
				</button>
			</nav>
		</div>
	);
}
