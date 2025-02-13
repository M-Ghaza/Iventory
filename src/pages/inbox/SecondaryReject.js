import React from 'react';
import Breadcrumb from '../../shared/Breadcumb';


export default function SecondaryReject() {
    const dataBreadcrumb = [{label:"Inbox",linkTo:'/Inbox'}];
  return (
    <div>
        <Breadcrumb title={dataBreadcrumb} iconBreadcumb="ri-mail-line"/>
        <div className='p-3 mb-5 bg-body rounded' style={{backgroundColor: '#fff'}}>
                    <div className='d-flex justify-content-end pt-1 mb-3 pe-3'>
                        <div> 
                            <input className='form-control'type="text" placeholder='Search here'/>
                        </div>       
                        <div>
                            <button type="button" className="btn btn-primary ms-3" aria-label="Search"><i className="ri-search-line me-2"></i>
                            Search</button>
                        </div>
                    </div>
                    <div className='p-1 mb-5 bg-body rounded' style={{backgroundColor: '#fff'}}>
                        <div className="border">
                            <div class="mb-3 p-4">
                                <label class="text-body-emphasis">Alasan Reject :</label>
                                <text class="form-control border border-dark" style={{width: 900, height: 125}}>Mohon Dilengkapi Data Pengajuan nya</text>
                            </div> 
                            <form class="row g-3 p-4">
                                <div class="col-md-6">
                                    <label for="disabledTextInput" class="form-label">No Iventory Request</label>
                                    <input class="form-control" type="text" placeholder="IR250100001" aria-label="Disabled input example" disabled></input>
                                </div>
                                <div class="col-md-6">
                                    <label for="disabledTextInput" class="form-label">Tanggal Request</label>
                                    <input class="form-control" type="text" placeholder="15 Januari 2025" aria-label="Disabled input example" disabled></input>
                                </div>
                                <div class="col-md-6">
                                    <label for="disabledTextInput" class="form-label">Nama User</label>
                                    <input class="form-control" type="text" placeholder="Jhon Kenedy" aria-label="Disabled input example" disabled></input>
                                </div>                           
                                <div class="col-md-6">
                                    <label for="disabledTextInput" class="form-label">Unit Kerja</label>
                                    <input class="form-control" type="text" placeholder="Divisi Kanal In-Branch" aria-label="Disabled input example" disabled></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    </div>
  )
}
