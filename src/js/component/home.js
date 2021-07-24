import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = React.useState("green");
	return (
		<container>
			<container className="container">
				<div className="pole"></div>
			</container>
			<container className="container">
				<div className="blackBox">
					<button
						onClick={() => {
							setColor("red");
						}}
						className={
							"redLight" + (color === "red" ? " selected" : "")
						}></button>
					<button
						onClick={() => {
							setColor("yellow");
						}}
						className={
							"yellowLight" +
							(color === "yellow" ? " selected" : "")
						}></button>
					<button
						onClick={() => {
							setColor("green");
						}}
						className={
							"greenLight" +
							(color === "green" ? " selected" : "")
						}></button>
				</div>
			</container>
		</container>
	);
}
