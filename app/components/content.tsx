/** @format */
'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

type ChildProps = {
	content: [] | undefined;
};

export const ContentComponent: React.FC<ChildProps> = (props) => {
	const [funny, setFunny] = useState<number>(0);
	const [Id, setID] = useState<string>();

	const nextJoke = (id: string) => {
		setFunny(funny + 1);
		axios.put(`http://localhost:5001/joke/funny/${id}`);
	};

	const nextJokeNotFunny = (id: string) => {
		setFunny(funny + 1);
		axios.put(`http://localhost:5001/joke/notfunny/${id}`);
	};

	return (
		<div className="static p-12 bg-white xl:px-[340px]">
			{props.content !== undefined ? (
				props.content.map((prop: any, index) => {
					return index == funny ? (
						<div key={index}>
							<div className={`text-lg xl:text-2xl text-left text-gray-600`}>
								{' '}
								{prop?.content}
							</div>
							<div className="hidden xl:block px-16 py-12">
								<div className="border-solid border-[1px] border-zinc-200 w-[67rem] text-center"></div>
							</div>
							<div className="grid gap-4 grid-cols-2 justify-items-center">
								<div className="px-4 pt-28">
									<div
										className="w-32 xl:w-64 p-2 bg-blue-600 text-white text-sm xl:text-2xl text-center shadow-none xl:shadow-md shadow-blue-600"
										onClick={() => nextJoke(prop._id)}>
										This Funny!
									</div>
								</div>
								<div className="px-4 pt-28">
									<div
										className="w-36 xl:w-64 p-2 bg-green-600 text-white text-sm xl:text-2xl text-center shadow-none xl:shadow-md shadow-green-600"
										onClick={() => nextJokeNotFunny(prop._id)}>
										This is not funny.
									</div>
								</div>
							</div>
						</div>
					) : (
						<div
							key={index}
							className={`text-lg xl:text-2xl text-left text-gray-600 xl:text-center`}>
							{index == 0
								? "That's all the jokes for today! Come back another day!"
								: ''}
						</div>
					);
				})
			) : (
				<div className="text-lg xl:text-2xl  text-left text-gray-600">
					In dolore labore culpa aliqua tempor laborum incididunt.Excepteur elit
					culpa dolor aliquip quis excepteur anim.Anim pariatur culpa mollit
					proident sint duis tempor esse elit quis.
				</div>
			)}
		</div>
	);
};
