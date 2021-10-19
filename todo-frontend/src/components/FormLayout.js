import React from 'react';
import { Input, Button, Form } from 'antd';

export default function FormLayout({
    handleInput,
    handleClick,
    disabled,
    inputValue,
}) {
    return (
        <div className="form-layout">
            <Form layout="inline">
                <Form.Item>
                    <Input
                        placeholder="Add a task"
                        value={inputValue}
                        onChange={(e) => handleInput(e)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button onClick={handleClick} disabled={!disabled}>
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
