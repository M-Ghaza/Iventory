import React,{useState} from 'react'
import Breadcrumb from '../../shared/Breadcumb';

function Approval() {
    const dataBreadcrumb = [{label:"Inbox",linkTo:'/Inbox'},{label:"Detail",linkTo:"/Inbox/Approval"}];
    const [viewReject,setViewReject] = useState(false);
    const handleview = () => {
        setViewReject(true)
    }
    const handlereject = () => {
        setViewReject(false)
    }
    return (
        <div>
            <Breadcrumb title={dataBreadcrumb} iconBreadcumb="ri-mail-line"/>
            <div className='shadow p-3 mb-5 bg-body rounded' style={{backgroundColor: '#fff'}}>
                <form class="row g-3">
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
                        <input class="form-control" type="text" placeholder="Alex Marteen" aria-label="Disabled input example" disabled></input>
                    </div>
                    <div class="col-md-6">
                        <label for="disabledTextInput" class="form-label">Unit Kerja</label>
                        <input class="form-control" type="text" placeholder="Divisi Kanal In-Branch" aria-label="Disabled input example" disabled></input>
                    </div>
                </form> 
                <div className='w-auto p-4 text-center'>
                    <table class="table table-striped pt-5">
                        <thead>
                            <tr>
                                <th>Kode Iventory</th>
                                <th>Nama Iventory</th>
                                <th>Nama WareHouse</th>
                                <th>Merk</th>
                                <th>Kategori</th>
                                <th>OUM</th>
                                <th>Jumlah Pengajuan</th>
                                <th>Approval Pengajuan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>INV0001</td>
                                <td>Tinta HP 64 Black</td>
                                <td>Kantor Pusat</td>
                                <td>HP</td>
                                <td>ATK</td>
                                <td>PCS</td>
                                <td>10</td>
                                <td><span class="badge border border-secondary text-secondary">10</span></td>
                            </tr>
                            <tr>
                                <td>INV0002</td>
                                <td>Tinta HP 680 Colour</td>
                                <td>Kantor Pusat</td>
                                <td>HP</td>
                                <td>ATK</td>
                                <td>PCS</td>
                                <td>46</td>
                                <td><span class="badge border border-secondary text-secondary">10</span></td>
                                
                            </tr>
                            <tr>
                                <td>INV0023</td>
                                <td>Amplop Coklat 1/2 Polio</td>
                                <td>Kantor Pusat</td>
                                <td>HP</td>
                                <td>Cetakan</td>
                                <td>PCS</td>
                                <td>100</td>
                                <td><span class="badge border border-secondary text-secondary">10</span></td>
                                
                            </tr>
                            <tr>
                                <td>INV0014</td>
                                <td>Tip Ex td</td>
                                <td>Kantor Pusat</td>
                                <td>Pentel</td>
                                <td>Cetakan</td>
                                <td>PCS</td>
                                <td>5</td>
                                <td><span class="badge border border-secondary text-secondary">10</span></td>
                                
                            </tr>
                        </tbody>    
                    </table> 
                </div>
                <div class="mb-2 d-flex justify-content-between">
                    <div className='d-flex ms-4 opacity-50'>
                        <p>Showing data 1 to 2 of 2 entries</p>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-success"><i class="ri-check-line"></i>Approve</button>
                    <button type="button" onClick={handleview} class="btn btn-outline-danger ms-3"><i class="ri-close-line"></i>Reject</button>
                {viewReject ? <div>
                <div class="mb-3 pt-3">
                    <label class="">Alasan Reject :</label>
                    <textarea type='text' class="form-control border border-dark" rows="3" placeholder='Input Alasan Reject Iventory Request'></textarea>
                </div>
                <div>
                    <button type="sumbit" onClick={handlereject} class="btn btn-danger"><i class="ri-close-line"></i>Reject</button>
                </div>
                </div> : null}    
                </div>
            </div>
        </div>
  )
}

export default Approval;