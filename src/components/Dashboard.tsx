const nextWeek = () => {
	const weekLength = 7;
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const week = [];
	const today = new Date();
	for (let i = 0; i < weekLength; i++) {
		const tomorrow = new Date();
		tomorrow.setDate(today.getDate() + i);
		week.push(tomorrow.toLocaleDateString('en-GB', options));
	}
	return week;
};
const week = nextWeek();
const weekItems = week.map((day) => <th>{day}</th>);

export default function Dashboard() {
	console.log(nextWeek());
	return (
		<div>
			<table>
				<thead>
					<th> Chores</th>
					{weekItems}
				</thead>
			</table>
		</div>
	);
}
