import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Filter extends React.Component {
    render (){
        return (
            <Form onSubmit={this.props.filterBeasts}>
                <Form.Select onChange={this.props.filterState}>
                    <option value='Filter by horns'>Filter by horns</option>
                    <option value='one'>One</option>
                    <option value='two'>Two</option>
                    <option value='three'>Three</option>
                    <option value='more than three'>More than three</option>
                </Form.Select>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default Filter;