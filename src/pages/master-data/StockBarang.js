import React from 'react';
import Breadcrumb from '../../shared/Breadcumb';
import Table from '../../shared/Table';
import PictDelete from '../../assets/images/eb46611709b0c28ca4a92a2ef8f7515e.png';
import PictSucces from '../../assets/images/baf7b94e199aa3147feeeb4f11d75c9a.png';


const StockBarang = () => {
    const dataBreadcrumb = [{label:"StockBarang",linkTo:'/StockBarang'}];
    const dataHeader =["isCheck","Kode Iventory","Nama Iventory","Nama Warehouse","Merk","Kategori","UOM","Jumlah Pengajuan"]
    const dataTable = () => {
        return (
            <tbody className='text-center'>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0001</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>46</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0002</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>46</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0003</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>46</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0004</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>46</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0005</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>46</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0006</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>46</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0007</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>46</td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </td>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0008</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>46</td>
                </tr>
            </tbody>
        )
    } 
    
    return(
        <div>
            <Breadcrumb title={dataBreadcrumb} iconBreadcumb="ri-database-2-line" />
            <div className='d-flex justify-content-between p-2 pe-3'>
                <div className='d-flex'>
                    <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#AddStock"><i class="ri-add-line"></i> Add</button>
                    <button type="button" class="btn btn-danger ms-3" data-bs-toggle="modal" data-bs-target="#DeleteStock" ><i class="ri-delete-bin-line"></i> Delete</button>
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
            <div class="modal fade" id="AddStock" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{backgroundColor: 'rgba(255, 128, 102, 1)',color: '#fff'}}>
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add / Edit data Stock Iventory</h1>
                            <button class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex align-items-center mb-3'> 
                                <label className='col-md-3 justify-content-end'>Nama Iventory</label>
                                <div className='pt-1 pt-1 col-md-9'>
                                    <input class="form-control" type="search" placeholder="Cari Nama Barang" aria-label="Search"></input>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Nama Warehouse</label>
                                <div className='pt-1 col-md-8'>                                
                                    <input class="form-control" placeholder="Pilih Nama Warehouse"></input>
                                </div>  
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Merk</label>
                                <div className='pt-1 col-md-9'>                                
                                    <input class="form-control" placeholder="Input Merk"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Kategori</label>
                                <div className='pt-1 col-md-5'>                                
                                    <input class="form-control" placeholder="Pilih Kategori Iventory"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>UOM</label>
                                <div className='pt-1 col-md-5'>                                
                                    <input class="form-control" placeholder="Pilih UOM Iventory"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Harga</label>
                                <div className='pt-1 col-md-4'>                                
                                    <input class="form-control" placeholder="Input Harga Iventory"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Stock</label>
                                <div className='pt-1 col-md-3'>                                
                                    <input class="form-control" placeholder="Input Stock Iventory"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Minimal Stock</label>
                                <div className='pt-1 col-md-4'>                                
                                    <input class="form-control" placeholder="Input Minimal Stock"></input>
                                </div> 
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='col-md-3'>Barcode</label>
                                <div className='pt-1 col-md-5'>                                
                                    <input class="form-control" placeholder="Input Barcode Iventory"></input>
                                </div> 
                            </div>
                            <div className='d-flex justify-content-end mb-3'>
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-reset-left-line"></i> Cancel</button>
                                <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#SaveStock"><i class="ri-save-2-line"></i> Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="SaveStock" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className='text-center'>
                                <img src={PictSucces} style={{width: 200}}/>
                            </div>
                            <div className='text-center'>
                                <span>Succes Add / Edit Stock Iventory</span>
                            </div>
                            <div className='text-center p-3'>
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-corner-up-left-line"></i> Back to List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="DeleteStock" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
export default StockBarang;