import React from 'react';
import Breadcrumb from '../../shared/Breadcumb';
import Table from '../../shared/Table';
import PictSucces from '../../assets/images/baf7b94e199aa3147feeeb4f11d75c9a.png';



export default function ReStockBarang() {
    const dataBreadcrumb = [{label:"ReStock Barang",linkTo:'/ReStockBarang'}];
    const dataHeader =["Id Iventory","Nama Iventory","Nama Warehouse","Merk","Kategori","UOM","Stock"]
    const dataTable = () => {
        return (
            <tbody className='text-center'>
                <tr>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0001</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0002</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td style={{color: 'rgba(44, 115, 210, 1)'}}>INV0003</td>
                    <td>Tinta HP 46 Colour</td>
                    <td>Kantor Pusat</td>
                    <td>HP</td>
                    <td>ATK</td>
                    <td>PCS</td>
                    <td>15</td>
                </tr>
            </tbody>
        )
    }
  return (
    <div>
        <Breadcrumb title={dataBreadcrumb} iconBreadcumb="ri-database-2-line" />
        <div className='d-flex justify-content-between p-2 pe-3'>
            <div className='d-flex'>
                <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#AddRe-Stock"><i class="ri-add-line"></i> Re-Stock</button>
            </div>
            <div className='d-flex justify-content-end'> 
                <input className='form-control' type="text" placeholder='Search here'/>
                <button type="button" className="btn btn-primary ms-4" aria-label="Search"><i className="ri-search-line me-2"></i>Search</button>
            </div>       
        </div>
        <div className='content'>
            <Table dataHeader={dataHeader} dataTable={dataTable()}/>
        </div>
        <hr></hr>
        <div>
            <div className='d-flex justify-content-end pt-4 mb-3 pe-3'>
                <div> 
                    <input className='form-control'type="text" placeholder='Search here'/>
                </div>       
                <div>
                    <button type="button" class="btn btn-primary ms-3"><i className="ri-search-line me-2"></i>
                    Search</button>
                </div>
            </div>
        </div>
        <div>
            <table class="table text-center">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">Id ReStock</th>
                        <th scope="col">Tanggal ReStockBarang</th>
                        <th scope="col">Nama Iventory</th>
                        <th scope="col">Stock</th>
                        <th scope='col'>ReStock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>RS001</td>
                        <td>15 Januari 2025</td>
                        <td>Tinta HP 46 Colour</td>
                        <td>10</td>
                        <td>250</td>
                    </tr>
                    <tr>
                        <td>RS002</td>
                        <td>15 Januari 2025</td>
                        <td>Amplop Coklat 1/2 Polio</td>
                        <td>20</td>
                        <td>650</td>
                    </tr>
                    <tr>
                        <td>RS003</td>
                        <td>16 Januari 2025</td>
                        <td>Tinta HP 704 Black</td>
                        <td>20</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal fade" id="AddRe-Stock" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header" style={{backgroundColor: 'rgba(255, 128, 102, 1)',color: '#fff'}}>
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Add data ReStockBarang</h1>
                        <button class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div className='d-flex align-items-center mb-3'> 
                            <label className='col-md-3'>Tanggal ReStock</label>
                            <div className='pt-1 pt-1 col-md-5'>
                                <input class="form-control" type="search" placeholder="15 Jan 2024" aria-label="Search"></input>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-3'> 
                            <label className='col-md-3'>Nama Iventory</label>
                            <div className='pt-1 pt-1 col-md-8'>
                                <input class="form-control" type="search" placeholder="Tinta HP 46 Colour" aria-label="Search"></input>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-3'> 
                            <label className='col-md-3'>Nama Warehouse</label>
                            <div className='pt-1 pt-1 col-md-6'>
                                <input class="form-control" type="search" placeholder="Kantor Pusat" aria-label="Search"></input>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-3'> 
                            <label className='col-md-3'>Merk</label>
                            <div className='pt-1 pt-1 col-md-5'>
                                <input class="form-control" type="search" placeholder="HP" aria-label="Search"></input>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-3'> 
                            <label className='col-md-3'>UOM</label>
                            <div className='pt-1 pt-1 col-md-3'>
                                <input class="form-control" type="search" placeholder="PCS" aria-label="Search"></input>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-3'> 
                            <label className='col-md-3'>Stock</label>
                            <div className='pt-1 pt-1 col-md-2'>
                                <input class="form-control" type="search" placeholder="10" aria-label="Search"></input>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-3'> 
                            <label className='col-md-3'>Re-Stock</label>
                            <div className='pt-1 pt-1 col-md-2'>
                                <input class="form-control" type="search" aria-label="Search"></input>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end mb-3'>
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal"><i class="ri-reset-left-line"></i> Cancel</button>
                            <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#SaveRe-Stock"><i class="ri-save-2-line"></i> Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="SaveRe-Stock" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                        <div className='text-center'>
                            <img src={PictSucces} style={{width: 200}}/>
                        </div>
                        <div className='text-center'>
                            <span>Succes Add Re-Stock Iventory</span>
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
