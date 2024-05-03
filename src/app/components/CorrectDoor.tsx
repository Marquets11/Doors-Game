"use client";
import { useCorrectDoorContext } from "../hooks/correctDoorContext";
import { useDoorsQuantityContext } from "../hooks/doorsQuantityContext";

export default function CorrectDoor() {
	const { doorsQuantity } = useDoorsQuantityContext();
	const { setCorrectDoor } = useCorrectDoorContext();

	return (
		<div className="card-quantity">
			<h3 className="font-mono">Porta Misteriosa</h3>
			<div className="grid grid-cols-5 grid-rows-2 gap-1 w-full p-2">
				{doorsQuantity &&
					doorsQuantity > 0 &&
					Array.from({ length: doorsQuantity }).map((_, index) => (
						<div key={index}>
							<input
								type="radio"
								id={`door-${index}`}
								name="door"
								value={index}
								className="hidden peer"
								onClick={() => {
									setCorrectDoor(index + 1);
								}}
							/>

							<label
								htmlFor={`door-${index}`}
								className="bg-white rounded-sm border border-black w-full flex justify-center items-center hover:bg-stone-400 duration-300 cursor-pointer peer-[:checked]:bg-stone-800 peer-[:checked]:text-white"
							>
								{index + 1}
							</label>
						</div>
					))}
			</div>
		</div>
	);
}
