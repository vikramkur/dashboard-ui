import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidenav from "./Navbar/Sidenav";
import SearchForm from "./Content/Searchform";
import OfferCards from "./Content/Cards";
import TableUI from "./Content/TableUi";
import Quicklinks from "./Content/QuickLinks";

const Wraper = () => {
    return(
        <>
            <Row className="mx-aauto" style={{background: '#ccc', paddingTop: '60px'}}>
                <Col sm={2}>
                    <Sidenav/>
                </Col>
                <Col sm={8}>
                    <div style={{background: '#f9f9f9', width: '100%', height: '100vh'}} className="text-start p-4">
                    <h1>Hey, Good Morning Diksha!</h1>
                        <SearchForm/>
                        <OfferCards/>
                        <TableUI/>
                    </div>
                </Col>
                <Col sm={2} className="pt-5">
                    <Quicklinks/>
                </Col>
            </Row>
        </>
    )
}

export default Wraper;