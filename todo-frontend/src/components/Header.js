import { getDay, getDate } from '../utils/getDate';

export default function Header() {
    return (
        <div className="greetings-container">
            <h1 className="header-lg">Hello, User</h1>
            <p className="header-sm">{`${getDay()},  ${getDate()}`}</p>
        </div>
    );
}
