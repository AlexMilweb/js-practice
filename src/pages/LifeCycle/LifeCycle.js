import React, { PureComponent } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import MountComponent from './MountComponent/MountComponent';

export default class LifeCycle extends PureComponent {
    state = {
        mount: false,
        updateProps: 0
    }

    handleMountComponent = () => {
        this.setState(prevState => { 
            return {
                mount: !prevState.mount
            }
        });
    }

    handleUpdateProps = () => {
        this.setState(prevState => {
            return {
                updateProps: prevState.updateProps + 1
            }
        });
    }

    render() {
        const { mount, updateProps } = this.state;

        return (
            <Grid>
                <Row>
                    <Col className='col-md-4'>
                        <Button onClick={this.handleMountComponent}>
                            {mount ? 'Unmount component' : 'Mount Component'}
                        </Button>
                        <Button onClick={this.handleUpdateProps}>
                            Update props
                        </Button>
                        {mount && <MountComponent updateProps={updateProps} />}
                    </Col>
                    <Col className='col-md-8'>
                        <ul className='screen' id='screen' />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
