import React, { lazy } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
// Auth
// const Login = lazy(() => import('./pages/auth/Login'));
// Dashboard
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

const Inbox = lazy(() => import("./pages/inbox/Inbox"));
const Detail = lazy(() => import("./pages/inbox/Detail"));
const Approval = lazy(() => import("./pages/inbox/Approval"));
const Reject = lazy( () => import("./pages/inbox/Reject"));
const SecondaryDetail = lazy(() => import("./pages/inbox/SecondaryDetail"));
const SecondaryApproval = lazy(() => import("./pages/inbox/SecondaryApproval"));
const SecondaryReject = lazy( () => import("./pages/inbox/SecondaryReject"));


const Request = lazy(() => import("./pages/inventory/Request"));
const Distribusi = lazy(() => import("./pages/inventory/Distribusi"));
const Monitoring = lazy(() => import("./pages/inventory/Monitoring"));

const StockBarang = lazy(() => import("./pages/master-data/StockBarang"));
const Supplier = lazy(() => import("./pages/master-data/Supplier"));
const SatuanBarang = lazy(() => import("./pages/master-data/SatuanBarang"));
const UnitKerja = lazy(() => import("./pages/master-data/UnitKerja"));
const Warehouse = lazy( () => import("./pages/master-data/Warehouse"));
const ReStockBarang = lazy( () => import("./pages/master-data/ReStockBarang"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/inbox" element={<Inbox />} />
      <Route exact path="/inbox/Detail" element={<Detail />} />
      <Route exact path="/inbox/SecondaryDetail" element={<SecondaryDetail />} />
      <Route exact path="/inbox/Approval" element={<Approval />} />
      <Route exact path="/inbox/SecondaryApproval" element={<SecondaryApproval />} />
      <Route exact path="/inbox/Reject" element={<Reject />} />
      <Route exact path="/inbox/SecondaryReject" element={<SecondaryReject />} />
      <Route exact path="/inventory/request" element={<Request />} />
      <Route exact path="/inventory/distribusi" element={<Distribusi />} />
      <Route exact path="/inventory/monitoring" element={<Monitoring />} />
      <Route exact path="/master-data/stock-barang" element={<StockBarang />} />
      <Route exact path="/master-data/supplier" element={<Supplier/>} />
      <Route exact path="/master-data/satuan-barang" element={<SatuanBarang/>} />
      <Route exact path="/master-data/unit-kerja" element={<UnitKerja/>} />
      <Route exact path="/master-data/Warehouse" element={<Warehouse/>} />
      <Route exact path="/master-data/ReStockBarang" element={<ReStockBarang/>} />
    </Routes>
  );
}
