import { Checkbox, Typography } from 'antd';
const { Text } = Typography;

export default function Todo({ todo, onChange }) {
    return (
        <div className="todo">
            <Checkbox onChange={(e) => onChange(todo)}>
                <Text strong>{todo.task}</Text>
            </Checkbox>
        </div>
    );
}
