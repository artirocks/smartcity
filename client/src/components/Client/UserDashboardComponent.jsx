import React, { useState } from 'react'
import Swal from "sweetalert2";
import Table from 'react-bootstrap/Table';
import pastIncidentRecords from '../../database/incident-records.json';

const UserDashboardComponent = () => {


    const onTakeUp = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure to take up this task?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Assigned to you now! All The Best! Please update back in 3 hours', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('No problem Buddy! Looking forward to contribute and earn next time!', '', 'info')
            }
          })
    }

    const fullDivStyle = {
        backgroundImage: `url("https://wallpaperaccess.com/full/2119468.jpg")`,
        position:"absolute",
        right:"0px",
        left:"0px"
    }
    const imageStyle = {
        height: '50%',
        width: '50%',
        marginLeft: '0%',
        marginRight: '1%',
        marginTop:'2%',
        borderRadius: 200 / 2,
        overflow: "hidden",
        borderWidth: 10,
        borderColor: "red"
    }
    const emergencyTextRender = (
        <Table striped bordered hover variant="light"> 
            <thead>
                <tr>
                    <th>Incident Priority</th>
                    <th>Incident Description</th>
                    <th>Earning Potential</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>High</td>
                    <td>Dog died in empty plot</td>
                    <td>10 </td>
                    <td><button class="btn btn-success" onClick={onTakeUp} style={{marginRight:"5px"}}>Take Up</button><button class="btn btn-warning" style={{marginRight:"5px"}}>Discard</button><button class="btn btn-primary">See Details</button></td>
                </tr>
                <tr>
                    <td>Medium</td>
                    <td>Drainage pipe not working</td>
                    <td>3 </td>
                    <td><button class="btn btn-success" onClick={onTakeUp} style={{marginRight:"5px"}}>Take Up</button><button class="btn btn-warning" style={{marginRight:"5px"}}>Discard</button><button class="btn btn-primary">See Details</button></td>
                </tr>
                <tr>
                    <td>Medium</td>
                    <td>Road blocked due to road break</td>
                    <td>7 </td>
                    <td><button class="btn btn-success" onClick={onTakeUp} style={{marginRight:"5px"}}>Take Up</button><button class="btn btn-warning" style={{marginRight:"5px"}}>Discard</button><button class="btn btn-primary">See Details</button></td>
                </tr>  
            </tbody>
        </Table> 
    )
    const renderPastReportedIncidentRecords = (
        <tbody>
        {
            pastIncidentRecords.map(
            IncidentRecord => 
            <tr style={{"color":"white"}} key = {IncidentRecord.id}>
                    <td style={{"textAlign":"center", "color":"white"}}>{IncidentRecord.id}</td>
                    <td style={{"textAlign":"center", "color":"white"}}> {IncidentRecord.incidentDate} </td>   
                    <td style={{"textAlign":"center", "color":"white"}}> {IncidentRecord.incidentTime}</td>
                    <td style={{"textAlign":"center", "color":"white"}}> {IncidentRecord.genuineFalse}</td>
                    <td style={{"textAlign":"center", "color":"white"}}> {IncidentRecord.incidentDescription}</td>
                    <td style={{"textAlign":"center", "color":"white"}}> {IncidentRecord.timeToResolve}</td>
                    <td style={{"textAlign":"center", "color":"white"}}> {IncidentRecord.resolvedBy}</td>
                    <td style={{"textAlign":"center", "color":"white"}}> {IncidentRecord.coinsEarned}</td>
                    <td style={{"textAlign":"center", "color":"white"}}> {IncidentRecord.numEscalations}</td>
            </tr>
        )}
        </tbody>
    );

    return (
        <div style={fullDivStyle}>

            <div className="row">
                <div class="card text-light bg-warning sm-3" style={{"max-width":"10rem", "max-height":"8.5rem", "marginLeft":"10px", "marginBottom":"15px", "marginTop":"5px", "justifyContent":"center", "display":"inline-block", "backgroundColor":"orange"}}>
                    <div class="card-body" style={{"text-align":"center", "color":"white"}}>
                    <h6>Report an Incident</h6>
                    <a href="https://www.arcgis.com/apps/CrowdsourceReporter/index.html"><button style={{marginLeft: "1px"}} className="btn btn-danger"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NI14ZwVpavP7dLF9dKZ4PklT3TM_hLnE__hkXl9J&s" style={imageStyle} alt="Coin"></img> </button></a>

                    </div>
                </div>
                <div class="card text-light bg-success sm-3" style={{"max-width":"10rem", "max-height":"8.5rem", "marginLeft":"940px", "marginBottom":"15px", "marginTop":"5px", "justifyContent":"center", "display":"inline-block", "backgroundColor":"orange"}}>
                    <div class="card-body" style={{"text-align":"center", "color":"white"}}>
                    <h6>Urban Coins</h6>
                    <img src="https://www.pngitem.com/pimgs/m/5-58221_cartoon-transparent-background-gold-coin-hd-png-download.png" style={imageStyle} alt="Coin"></img>
                    <div className="message">{<p>456</p>}</div>
                    </div>
                </div>
            </div>
                <div><h2 className="text-center" style={{color:"white"}}>Welcome Buddy</h2></div>
                <br></br>
                <div class = "card bg-danger" style={{"max-width":"18rem", "marginLeft":"130px", minWidth:"1040px", minHeight:"300px", color:"white", opacity:"0.9", justifyContent:"center"}}>
                    <div class="card-header" style={{textAlign:"center"}}>----------- Active Notifications -------------</div>
                    <div class="card-body" style={{textAlign:"center"}}>
                    {emergencyTextRender}
                    </div>
                </div>
                <div class="card bg-success" style={{marginLeft:"20px", marginRight:"20px", marginTop:"20px"}}>
                <div><h4 className="text-center" style={{"color":"white"}} >Past Solved Issues</h4></div>
                <div className = "row" style={{"color":"white"}}>
                    <table className = "table table-striped table-bordered" style={{"width":"90%", "marginLeft":"50px", "borderWidth":"10px", "borderStyle":"solid"}}>

                        <thead style={{"color":"white"}}>
                            <tr style={{"textAlign":"center"}}>
                                <th style={{"width":"30%"}}> ID</th>
                                <th style={{"width":"30%"}}> Incident Date</th>
                                <th  style={{"width":"20%"}}> Incident Time</th>
                                <th  style={{"width":"20%"}}> Genuine/False</th>
                                <th  style={{"width":"20%"}}> Incident Description</th>
                                <th  style={{"width":"20%"}}> Time To Resolve</th>
                                <th  style={{"width":"20%"}}> Resolved By</th>
                                <th  style={{"width":"20%"}}> Coints Earned</th>
                                <th  style={{"width":"20%"}}> Escalations (If Any)</th>
                            </tr>
                        </thead>
                        {renderPastReportedIncidentRecords}
                    </table>

                </div>
                </div>
                <div class="card bg-dark" style={{marginLeft:"20px", marginRight:"20px", marginTop:"20px"}}>
                <div><h4 className="text-center" style={{"color":"white"}} >Past Reported Issues</h4></div>
                <div className = "row" style={{"color":"white"}}>
                    <table className = "table table-striped table-bordered" style={{"width":"90%", "marginLeft":"50px", "borderWidth":"10px", "borderStyle":"solid"}}>

                        <thead style={{"color":"white"}}>
                            <tr style={{"textAlign":"center"}}>
                                <th style={{"width":"30%"}}> ID</th>
                                <th style={{"width":"30%"}}> Incident Date</th>
                                <th  style={{"width":"20%"}}> Incident Time</th>
                                <th  style={{"width":"20%"}}> Genuine/False</th>
                                <th  style={{"width":"20%"}}> Incident Description</th>
                                <th  style={{"width":"20%"}}> Time To Resolve</th>
                                <th  style={{"width":"20%"}}> Resolved By</th>
                                <th  style={{"width":"20%"}}> Coints Earned</th>
                                <th  style={{"width":"20%"}}> Escalations (If Any)</th>
                            </tr>
                        </thead>
                        {renderPastReportedIncidentRecords}
                    </table>

                </div>
                </div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div class="card text-light bg-danger sm-3" style={{"max-width":"25rem", "max-height":"28rem", "marginLeft":"450px", "marginBottom":"15px", "marginTop":"5px", "justifyContent":"center"}}>
                <div class="card-body" style={{"text-align":"center"}}>
                <h4 style={{"color":"white"}}>Get Some more Urban Coins</h4>
                <img src="https://www.pngitem.com/pimgs/m/5-58221_cartoon-transparent-background-gold-coin-hd-png-download.png" style={imageStyle} alt="Deutsche Bank Icon"></img>


                </div>

                <img src="data:image/png;base64,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" alt="Deutsche Bank Icon"></img>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        </div>
    )
}


export default UserDashboardComponent