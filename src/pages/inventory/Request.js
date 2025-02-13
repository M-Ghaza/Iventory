import React from 'react';
import Table from '../../shared/Table';
import Breadcrumb from '../../shared/Breadcumb';
import PictDelete from '../../assets/images/eb46611709b0c28ca4a92a2ef8f7515e.png';
import PictSucces from '../../assets/images/baf7b94e199aa3147feeeb4f11d75c9a.png';


function Inbox(){
    const dataBreadcrumb = [{label:"Request",linkTo:'../inventory/Request'}];
    const dataHeader =["isCheck","Kode Iventory","Nama Iventory","Nama Warehouse","Merk","Kategori","UOM","Jumlah Pengajuan"]
    const isnull=true
    const dataTable = () => { 
        return(
            <tbody className='text-center opacity-25'>
                {!isnull ? 
                <>
            <tr>
                <td></td>
                <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0001</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0002</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0023</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0014</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr> 
                </>
            : <tr>
                <td colSpan={8}>
                    <div>
                        Belum Ada Barang Yang Ditambahkan
                    </div>
                </td>
            </tr> }
            </tbody>
        )
    }
    
    return( 
        <div>
            <Breadcrumb title={dataBreadcrumb} iconBreadcumb="ri-folder-check-line" />
            <div className='d-flex justify-content-between p-2 pe-3 bg-white'>
                <div className='d-flex'>
                    <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#AddBarang"><i class="ri-add-line"></i> Add Barang</button>
                    <button type="button" class="btn btn-outline-danger ms-3" data-bs-toggle="modal" data-bs-target="#DeleteBarang" ><i class="ri-delete-bin-line"></i> Delete</button>
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
            <div className='d-flex justify-content-end pt-2 mb-3 pe-3'>
                <div>
                    <button type="button" class="btn btn-outline-danger"><i class="ri-reset-left-line"></i> Reset</button>
                </div>
                <div className='ms-3'>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#SubmitBarang"><i class="ri-save-2-line"></i> Submit</button>
                </div>
            </div>
            <div class="modal fade" id="AddBarang" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{backgroundColor: 'rgba(255, 128, 102, 1)',color: '#fff'}}>
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add / Edit data Barang</h1>
                            <button class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3'>Nama Warehouse</label>
                                <div className='pt-1 pt-1 col-md-9' id='iconinput'>
                                    <input class="form-control" list="data"type="search" placeholder="Cari Nama Barang" aria-label="Search"></input>
                                    <datalist id="data">
                                        <option value="Tinta HP 640 Black"/>
                                        <option value="Tinta HP 640 Colour"/>
                                        <option value="Tinta HP 704 Black"/>
                                        <option value="Tinta HP 704 Colour"/>
                                    </datalist>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Foto Barang</label>
                                <div className='pt-1'>                                
                                    <input class="form-control" style={{height: 170}}placeholder="Tidak Ada Foto"></input>
                                </div>  
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Jumlah Pengajuan</label>
                                <div className='pt-1 col-md-9'>                                
                                    <input class="form-control" placeholder="Tidak Ada Foto"></input>
                                </div> 
                            </div>
                            <div className='d-flex justify-content-end mb-3'>
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-reset-left-line"></i> Cancel</button>
                                <button type="button" class="btn btn-primary ms-3" data-bs-dismiss="modal"><i class="ri-save-2-line"></i> Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="modal fade" id="DeleteBarang" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                <div class="modal fade" id="SubmitBarang" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div className='text-center'>
                                    <img src={PictSucces} style={{width: 200}}/>
                                </div>
                                <div className='text-center '>
                                    <span>Succes Pengajuan Iventory</span>
                                </div>
                                <div className='text-center p-3'>
                                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-corner-up-left-line"></i> Back to List</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Inbox;