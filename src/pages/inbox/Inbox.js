import React from 'react';
import Table from '../../shared/Table';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../shared/Breadcumb';


function Inbox(){
    const dataBreadcrumb = [{label:"Inbox",linkTo:'/Inbox'}];
    const dataHeader =["No Iventory Request","Tanggal Request","Nama User","Unit Kerja","Status"]
    const dataTable = () => { 
        return(
            <tbody className='text-center'>
            <tr>
                <td style={{color: 'rgba(44, 115, 210, 1)'}}>IR250100001</td>
                <td>15 Januari 2025</td>
                <td>Alex Marteen</td>
                <td>Divisi Kanal In-Branch</td>
                <td><Link class="btn btn-outline-primary" to="Detail" role="button">Verifikasi</Link></td>
            </tr>
            <tr>
                <td style={{color: 'rgba(44, 115, 210, 1)'}}>IR250100002</td>
                <td>15 Januari 2025</td>
                <td>Jhon Kenedy</td>
                <td>Divisi Kanal In-Branch</td>
                <td><Link class="btn btn-outline-primary" to="SecondaryDetail" role="button">Verifikasi</Link></td>
            </tr>
            </tbody>
        )
    }
    
    return( 
        <div>
            <Breadcrumb title={dataBreadcrumb} iconBreadcumb="ri-mail-line" />
            <div style={{backgroundColor: '#fff'}}>
                <div className='d-flex justify-content-end pt-4 mb-3 pe-3'>
                    <div> 
                        <input className='form-control'type="text" placeholder='Search here'/>
                    </div>       
                    <div>
                        <button type="button" class="btn btn-primary ms-3"><i className="ri-search-line me-2"></i>
                        Search</button>
                    </div>
                </div>
                <div className='content table'>
                    <Table dataHeader={dataHeader} dataTable={dataTable()}/>
                </div>
            </div>
                <div className='d-flex justify-content-end pt-4 mb-3 pe-3'>
                    <div>
                        <Link class="btn btn-outline-primary" to="Approval" role="button">Approval</Link>
                    </div>
                    <div className='ms-3'>
                        <Link class="btn btn-outline-primary" to="SecondaryApproval" role="button">Approval</Link>
                    </div>
                    <div>
                        <Link class="btn btn-danger ms-3" to='Reject' role='button'>Reject</Link>
                    </div>
                    <div>
                        <Link class="btn btn-danger ms-3" to='SecondaryReject' role='button'>Reject</Link>
                    </div>
                </div>
        </div>
    )
}
export default Inbox;