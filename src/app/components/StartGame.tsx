"use client";
import Link from "next/link";
import { useCorrectDoorContext } from "../hooks/correctDoorContext";

export default function StartGame() {
	const { correctDoor } = useCorrectDoorContext();

	return (
		<button className="bg-green-600 flex justify-center items-center text-2xl text-white font-bold hover:bg-green-800 group duration-300">
			<span className="group-hover:scale-125 duration-300">
				<Link href={`${correctDoor ? "/doorsChallenge" : "/"}`}>Iniciar</Link>
			</span>
		</button>
	);
}
