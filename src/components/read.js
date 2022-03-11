import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";
 
export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/flights`)
            .then((response) => {
                {
                    setAPIData(response.data.data);
                }
            })
    }, [])

    const setData = (data) => {
        let { id, flightName, source, destination, dateOfFly, clasess, flightsDuration, numOfSeats, ticket_price, timeOfArrival, timeOfDeprature } = data;
        localStorage.setItem('ID', id); 
        localStorage.setItem('Flight Name', flightName);
        localStorage.setItem('Source', source);
        localStorage.setItem('Destination', destination)
        localStorage.setItem('Date of Fly', dateOfFly)
        localStorage.setItem('Class', clasess)
        localStorage.setItem('Flight Duration', flightsDuration)
        localStorage.setItem('Num of Seats', numOfSeats)
        localStorage.setItem('Ticket Price', ticket_price)
        localStorage.setItem('Time of Arrival', timeOfArrival)
        localStorage.setItem('Time of Deprature', timeOfDeprature)
    }

    return (

        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Flight Name</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Date of Fly</th>
                        <th>Class</th>
                        <th>Flight Duration</th>
                        <th>Num of Seats</th>
                        <th>Ticket Price</th>
                        <th>Time of Arrival</th>
                        <th>Time of Deprature</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>

                    {APIData.map((data) => {

                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.flightName}</td>
                                <td>{data.source}</td>
                                <td>{data.destination}</td>
                                <td>{data.dateOfFly}</td>
                                <td>{data.clasess}</td>
                                <td>{data.flightsDuration}</td>
                                <td>{data.numOfSeats}</td>
                                <td>{data.ticket_price}</td>
                                <td>{data.timeOfArrival}</td>
                                <td>{data.timeOfDeprature}</td>
 
                                <a href='/update'>
                                    <td>
                                        <Button variant="primary" onClick={() => setData(data)}>Update</Button>
                                    </td>
                                </a>
                                {/* <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell> */}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
