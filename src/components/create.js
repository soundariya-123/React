import React, { useState } from 'react'
import { Button, Checkbox } from 'semantic-ui-react'
import axios from 'axios';
import Form from 'react-bootstrap/Form';

export default function Create() {
    const [flightName, setFlightName] = useState('');
    const [numOfSeats, setNumOfSeats] = useState('');
    const [clasess, setClasess] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [dateOfFly, setDateOfFly] = useState('');
    const [timeOfArrival, setTimeOfArrival] = useState('');
    const [timeOfDeprature, setTimeOfDeprature] = useState('');
    const [flightsDuration, setFlightsDuration] = useState('');
    const [ticket_price, setTicket_price] = useState('');
    const [users, setUsers] = useState('');
    
    const postData = () => {
        axios.post(`http://localhost:3001/flights`, {
            flightName,
            numOfSeats,
            clasess,
            source,
            destination,
            dateOfFly,
            timeOfArrival,
            timeOfDeprature,
            flightsDuration,
            ticket_price,
            users
        })
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="form.Name">
                    <Form.Label>
                        Flight Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Flight Name" onChange={(e) => setFlightName(e.target.value)} />
                    <Form.Label>
                        Number of Seats
                    </Form.Label>
                    <Form.Control type="text" placeholder="Number of Seats" onChange={(e) => setNumOfSeats(e.target.value)} />
                    <Form.Label>
                        Class
                    </Form.Label>
                    <Form.Control type="text" placeholder="Class" onChange={(e) => setClasess(e.target.value)} />
                    <Form.Label>
                        Source
                    </Form.Label>
                    <Form.Control type="text" placeholder="Source" onChange={(e) => setSource(e.target.value)} />
                    <Form.Label>
                        Destination
                    </Form.Label>
                    <Form.Control type="text" placeholder="Destination" onChange={(e) => setDestination(e.target.value)} />
                    <Form.Label>
                        Date Of Fly
                    </Form.Label>
                    <Form.Control type="text" placeholder="Date Of Fly" onChange={(e) => setDateOfFly(e.target.value)} />
                    <Form.Label>
                        Time Of Arrival
                    </Form.Label>
                    <Form.Control type="text" placeholder="Time Of Arrival" onChange={(e) => setTimeOfArrival(e.target.value)} />
                    <Form.Label>
                        Time Of Deprature
                    </Form.Label>
                    <Form.Control type="text" placeholder="Time Of Deprature" onChange={(e) => setTimeOfDeprature(e.target.value)} />
                    <Form.Label>
                        Flights Duration
                    </Form.Label>
                    <Form.Control type="text" placeholder="Flights Duration" onChange={(e) => setFlightsDuration(e.target.value)} />
                    <Form.Label>
                        Ticket Price
                    </Form.Label>
                    <Form.Control type="text" placeholder="Ticket Price" onChange={(e) => setTicket_price(e.target.value)} />
                    <Form.Label>
                        Users
                    </Form.Label>
                    <Form.Control type="text" placeholder="Users" onChange={(e) => setUsers(e.target.value)} />

                    <Button onClick={postData} type='submit'>Submit</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

// const Create = () => (

//     <Form className="create-form">
//         <Form.Field>
//             <label>First Name</label>
//             <input placeholder='First Name' />
//         </Form.Field>
//         <Form.Field>
//             <label>Last Name</label>
//             <input placeholder='Last Name' />
//         </Form.Field>
//         <Form.Field>
//             <Checkbox label='I agree to the Terms and Conditions' />
//         </Form.Field>
//         <Button type='submit'>Submit</Button>
//     </Form>
// )

// export default Create;