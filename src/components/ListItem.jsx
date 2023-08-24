import React from "react";
import { ButtonGroup, Button, Badge, Modal} from "react-bootstrap";
import { FaEye } from "react-icons/fa";

export default function ListItem(props) {
    const data = props.data;
    return (
        <> 
           {data &&  
            <div className="d-flex align-items-start justify-content-between border p-3">
                <div className="col-10">
                    <h3 style={{width: "80%", textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}} >{data?.title}</h3>
                    <p  style={{width: "80%", textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}} className="mb-0">{data?.details}</p>
                    <p className="mb-0">Priority : {data?.priority}</p>
                    <p className="mb-0">Start Date : {data?.startdate}</p>
                    <p className="mb-0">End Date : {data?.enddate}</p>
                </div>
                <div className="col-2">
                    <ButtonGroup aria-label="Basic example" className="mt-1">
                        <Button size="sm" className="rounded-0" variant="primary"><FaEye /></Button>
                    </ButtonGroup>
                </div>
            </div>}
        </>
    )
}
