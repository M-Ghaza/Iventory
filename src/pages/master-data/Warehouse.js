import React from 'react';
import Breadcrumb from '../../shared/Breadcumb';
import Table from '../../shared/Table';
import PictDelete from '../../assets/images/eb46611709b0c28ca4a92a2ef8f7515e.png';
import PictSucces from '../../assets/images/baf7b94e199aa3147feeeb4f11d75c9a.png';


export default function Warehouse() {
  const dataBreadcrumb = [{label:"Warehouse",linkTo:'/Warehouse'}];
  const dataHeader =["isCheck","Id Warehouse","Nama Warehouse","Alamat Warehouse","No Telepon"]
    const dataTable = () => {
        return (
            <tbody className='text-center'>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>W001</td>
                    <td>Kantor Pusat</td>
                    <td>Graha Irama Jl.HR rasuna Said kav.1-2 Jakarta Selatan</td>
                    <td>021-5261478</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>W002</td>
                    <td>Kantor Pusat</td>
                    <td>Graha Irama Jl.HR rasuna Said kav.1-2 Jakarta Selatan</td>
                    <td>021-5261478</td>
                </tr>
            </tbody>
        )
    }
  return (
    <div>
        <Breadcrumb title={dataBreadcrumb} iconBreadcumb="ri-database-2-line" />
        <div className='d-flex justify-content-between p-2 pe-3'>
                <div className='d-flex'>
                    <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#AddWarehouse"><i class="ri-add-line"></i> Add</button>
                    <button type="button" class="btn btn-danger ms-3" data-bs-toggle="modal" data-bs-target="#DeleteWarehouse" ><i class="ri-delete-bin-line"></i> Delete</button>
                </div>
                <div className='d-flex justify-content-end'> 
                  <input className='form-control' type="text" placeholder='Search here'/>
                  <button type="button" className="btn btn-primary ms-4" aria-label="Search"><i className="ri-search-line me-2"></i>
                  Search</button>
              </div>       
          </div>
        <div className='content'>
          <Table dataHeader={dataHeader} dataTable={dataTable()}/>
        </div>
        <div class="btn-toolbar mb-2 d-flex justify-content-between" role="toolbar" aria-label="Small button group" style={{background: "#fff"}}>
            <div className='d-flex ms-4 opacity-50'>
                <p>Showing data 1 to 2 of 2 entries</p>
            </div>
            <div class="btn-group btn-group-sm d-flex justify-content-end" role="group" aria-label="Small button group" style={{height: 30}}>
                <button type="button" class="btn btn-outline-primary ms-2"><i class="ri-arrow-left-line"></i></button>
                <button type="button" class="btn btn-outline-primary ms-2">1</button>
                <button type="button" class="btn btn-outline-primary ms-2">2</button>
                <button type="button" class="btn btn-outline-primary ms-2">3</button>
                <p className='ms-2'>...</p>
                <button type="button" class="btn btn-outline-primary ms-2"><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
        <div class="modal fade" id="AddWarehouse" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{backgroundColor: 'rgba(255, 128, 102, 1)',color: '#fff'}}>
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add / Edit data Warehouse</h1>
                            <button class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3'>Nama Warehouse</label>
                                <div className='pt-1 pt-1 col-md-9'>
                                    <input class="form-control" type="search" placeholder="Enter Nama Warehouse" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Alamat Warehouse</label>
                                <div className='pt-1'>                                
                                    <input class="form-control" style={{height: 170, width: 575}}placeholder="Enter Alamat Warehouse"></input>
                                </div>  
                            </div>
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3'>No Telepon</label>
                                <div className='pt-1 pt-1 col-md-9'>
                                    <input class="form-control" type="search" placeholder="Enter No Telepon" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end mb-3'>
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-reset-left-line"></i> Cancel</button>
                                <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#SaveWarehouse"><i class="ri-save-2-line"></i> Save</button>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
          <div class="modal fade" id="SaveWarehouse" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className='text-center'>
                                <img src={PictSucces} style={{width: 200}}/>
                            </div>
                            <div className='text-center'>
                                <span>Succes Add / Edit Data Warehouse</span>
                            </div>
                            <div className='text-center p-3'>
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-corner-up-left-line"></i> Back to List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="DeleteWarehouse" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className='text-center'>
                                 <img src={PictDelete} style={{width: 200}}/>
                            </div>
                            <div className='text-center '>
                                <span>Apakah Anda Yakin akan menghapus data ini?</span>
                            </div>
                            <div className='text-center p-3'>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="ri-delete-bin-5-line"></i> Delete</button>
                                <button type="button" class="btn btn-outline-secondary ms-5" data-bs-dismiss="modal"><i class="ri-reset-left-line"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
