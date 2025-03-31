import data from '../data/chores.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

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
const weekItems = week.map((day) => <th key={day}>{day}</th>);
const { householdChores } = data;
const emptyWeekRow = Array(7)
	.fill(<FontAwesomeIcon icon={faCat} />)
	.map((day) => <td>{day}</td>);
const chores = householdChores.map(({ chore }) => (
	<tr>
		<th>{chore}</th>
		{emptyWeekRow}
	</tr>
));

export default function Dashboard() {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th className="mr-8"> Chores</th>
						{weekItems}
					</tr>
				</thead>
				<tbody>{chores}</tbody>
			</table>
		</div>
	);
}
