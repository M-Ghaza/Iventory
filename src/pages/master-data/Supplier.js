import React from 'react';
import Breadcrumb from '../../shared/Breadcumb';
import Table from '../../shared/Table';
import PictDelete from '../../assets/images/eb46611709b0c28ca4a92a2ef8f7515e.png';
import PictSucces from '../../assets/images/baf7b94e199aa3147feeeb4f11d75c9a.png';


const Supplier = () => {
    const dataBreadcrumb = [{label:"Supplier",linkTo:'/Supplier'}];
    const dataHeader =["isCheck","Id Supplier","Nama Supplier","NPWP","No SIUP","No TDP"]
    const dataTable = () => {
        return (
            <tbody className='text-center'>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>S0001</td>
                    <td>CV Dotsprint</td>
                    <td>36524896245879</td>
                    <td>569835598</td>
                    <td>985175</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>S0002</td>
                    <td>CV Bima Printing Solution</td>
                    <td>36524896245879</td>
                    <td>569835598</td>
                    <td>985175</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>S0003</td>
                    <td>CV Dotsprint(percetakan di Cabang)</td>
                    <td>36524896245879</td>
                    <td>569835598</td>
                    <td>985175</td>
                </tr>
            </tbody>
        )
    }

    return(
        <div>
            <Breadcrumb title={dataBreadcrumb} iconBreadcumb="ri-database-2-line" />
            <div className='d-flex justify-content-between p-2 pe-3'>
                <div className='d-flex'>
                    <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#AddSupplier"><i class="ri-add-line"></i> Add</button>
                    <button type="button" class="btn btn-danger ms-3" data-bs-toggle="modal" data-bs-target="#DeleteSupplier" ><i class="ri-delete-bin-line"></i> Delete</button>
                </div>
                <div className='d-flex justify-content-end'> 
                    <input className='form-control' type="text" placeholder='Search here'/>
                    <button type="button" className="btn btn-primary ms-4" aria-label="Search"><i className="ri-search-line me-2"></i>
                    Search</button>
                </div>       
            </div>
            <div class="modal fade" id="AddSupplier" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{backgroundColor: 'rgba(255, 128, 102, 1)',color: '#fff'}}>
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add / Edit data Supplier</h1>
                            <button class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3 justify-content-end'>Nama Supplier</label>
                                <div className='pt-1 pt-1 col-md-9'>
                                    <input class="form-control" type="search" placeholder="Input Nama Supplier" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>NPWP</label>
                                <div className='pt-1 col-md-8'>                                
                                    <input class="form-control" placeholder="Input No NPWP"></input>
                                </div>  
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>No SIUP</label>
                                <div className='pt-1 col-md-9'>                                
                                    <input class="form-control" placeholder="Input No SIUP"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Masa Berlaku SIUP</label>
                                <div className='pt-1 col-md-4'>                                
                                    <input class="form-control" placeholder="Input Masa Berlaku SIUP"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>No TDP</label>
                                <div className='pt-1 col-md-5'>                                
                                    <input class="form-control" placeholder="Input No TDP"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Masa Berlaku TDP</label>
                                <div className='pt-1 col-md-4'>                                
                                    <input class="form-control" placeholder="Input Masa Berlaku TDP"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Alamat 1</label>
                                <div className='pt-1 col-md-9'>                                
                                    <input class="form-control" placeholder="Input Alamat1"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Alamat 2</label>
                                <div className='pt-1 col-md-9'>                                
                                    <input class="form-control" placeholder="Input Alamat2"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Alamat 3</label>
                                <div className='pt-1 col-md-9'>                                
                                    <input class="form-control" placeholder="Input Alamat3"></input>
                                </div> 
                            </div>
                            <div className='d-flex justify-content-end mb-3'>
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-reset-left-line"></i> Cancel</button>
                                <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#SaveSupplier"><i class="ri-save-2-line"></i> Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <Table dataHeader={dataHeader} dataTable={dataTable()}/>
            </div>
            <div class="modal fade" id="SaveSupplier" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className='text-center'>
                                <img src={PictSucces} style={{width: 200}}/>
                            </div>
                            <div className='text-center'>
                                <span>Succes Add / Edit Supplier</span>
                            </div>
                            <div className='text-center p-3'>
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-corner-up-left-line"></i> Back to List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="DeleteSupplier" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
export default Supplier;