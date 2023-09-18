/** @format */

export const HeaderComponent = () => {
	return (
		<div className="fixed h-12 xl:h-20 top-0 left-0 right-0 bg-white">
			<div className="grid gap-4 grid-cols-2 h-full content-center p-2 xl:px-64">
				<div className="self-center place-self-start pl-4">
					<img
						className="rounded-full h-10 w-10 xl:h-16 xl:w-16"
						src="https://res.cloudinary.com/ecommerce-qts/image/upload/v1690772125/cld-sample-5.jpg"
					/>
				</div>
				<div className="justify-self-end">
					<div className="grid grid-cols-2 gap-1">
						<div className="xl:self-center xl:place-self-center">
							<div className="text-sm xl:text-lg text-gray-400">Develop By</div>
							<div className="text-base xl:text-xl float-right">Tom</div>
						</div>
						{/* <div>

                        </div> */}
						<img
							className="rounded-full h-10 w-10 xl:h-16 xl:w-16 self-center place-self-center"
							src="https://res.cloudinary.com/ecommerce-qts/image/upload/v1690772125/cld-sample-3.jpg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
