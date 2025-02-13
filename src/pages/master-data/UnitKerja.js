import React from 'react';
import Table from '../../shared/Table';
import Breadcrumb from '../../shared/Breadcumb';
import PictDelete from '../../assets/images/eb46611709b0c28ca4a92a2ef8f7515e.png';
import PictSucces from '../../assets/images/baf7b94e199aa3147feeeb4f11d75c9a.png';


const UnitKerja = () => {
    const dataBreadcrumb = [{label:"UnitKerja",linkTo:'/UnitKerja'}];
    const dataHeader =["isCheck","Id Uker","Jenis Kantor","Nama Unit Kerja","Kota","Kode Uker"]
    const dataTable = () => {
        return (
            <tbody className='text-center'>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>DIV0001</td>
                    <td>Kantor Pusat</td>
                    <td>Divisi Manajemen Aset & Pengadaan</td>
                    <td>Jakarta Selatan</td>
                    <td>MAP</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>DIV0002</td>
                    <td>Kantor Pusat</td>
                    <td>Divisi Teknologi Informasi</td>
                    <td>Jakarta Selatan</td>
                    <td>TI</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>DIV0003</td>
                    <td>Kantor Pusat</td>
                    <td>Divisi Human Capital</td>
                    <td>Jakarta Selatan</td>
                    <td>HC</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>DIV0004</td>
                    <td>Kantor Layanan</td>
                    <td>Kantor Layanan Bandung</td>
                    <td>Bandung</td>
                    <td>Bdg</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>DIV0005</td>
                    <td>Kantor Regional</td>
                    <td>Kantor Regional Padang</td>
                    <td>Padang</td>
                    <td>ibspdg</td>
                </tr>
            </tbody>
        )
    }
    return(
        <div>
            <Breadcrumb title={dataBreadcrumb} iconBreadcumb="ri-database-2-line" />
            <div className='d-flex justify-content-between p-2 pe-3'>
                <div className='d-flex'>
                    <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#AddUnitKerja"><i class="ri-add-line"></i> Add</button>
                    <button type="button" class="btn btn-danger ms-3" data-bs-toggle="modal" data-bs-target="#DeleteUnitKerja" ><i class="ri-delete-bin-line"></i> Delete</button>
                </div>
                <div className='d-flex justify-content-end'> 
                    <input className='form-control' type="text" placeholder='Search here'/>
                    <button type="button" className="btn btn-primary ms-4" aria-label="Search"><i className="ri-search-line me-2"></i>
                    Search</button>
                </div>       
            </div>
            <div class="modal fade" id="AddUnitKerja" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{backgroundColor: 'rgba(255, 128, 102, 1)',color: '#fff'}}>
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add / Edit data Unit Kerja</h1>
                            <button class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3'>Jenis Kantor</label>
                                <div className='pt-1 pt-1 col-md-6'>
                                    <input class="form-control" type="search" placeholder="Input Nama Supplier" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3'>Nama Unit Kerja</label>
                                <div className='pt-1 pt-1 col-md-8'>
                                    <input class="form-control" type="search" placeholder="Input No NPWP" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3'>Kota</label>
                                <div className='pt-1 pt-1 col-md-9'>
                                    <input class="form-control" type="search" placeholder="Input Input SIUP" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3'>Alamat1</label>
                                <div className='pt-1 pt-1 col-md-9'>
                                    <input class="form-control" type="search" placeholder="Input Alamat1" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3'>Alamat2</label>
                                <div className='pt-1 pt-1 col-md-9'>
                                    <input class="form-control" type="search" placeholder="Input Alamat2" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3'>Alamat3</label>
                                <div className='pt-1 pt-1 col-md-9'>
                                    <input class="form-control" type="search" placeholder="Input Alamat3" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3'>Kode Uker</label>
                                <div className='pt-1 pt-1 col-md-9'>
                                    <input class="form-control" type="search" placeholder="Input Kode Uker" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end mb-3'>
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-reset-left-line"></i> Cancel</button>
                                <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#SaveUnitKerja"><i class="ri-save-2-line"></i> Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <Table dataHeader={dataHeader} dataTable={dataTable()}/>
            </div>
            <div class="modal fade" id="SaveUnitKerja" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className='text-center'>
                                <img src={PictSucces} style={{width: 200}}/>
                            </div>
                            <div className='text-center'>
                                <span>Succes Add / Edit Unit Kerja</span>
                            </div>
                            <div className='text-center p-3'>
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-corner-up-left-line"></i> Back to List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="DeleteUnitKerja" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
export default UnitKerja;