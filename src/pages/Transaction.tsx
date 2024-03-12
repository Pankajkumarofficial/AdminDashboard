import { Column } from 'react-table';
import AdminSidebar from '../components/AdminSidebar'
import { ReactElement, useCallback, useState } from 'react';
import TableHoc from '../components/TableHoc';
import { Link } from 'react-router-dom';

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: 'user'
  },
  {
    Header: "Amount",
    accessor: 'amount'
  },
  {
    Header: "Discount",
    accessor: 'discount'
  },
  {
    Header: "Quantity",
    accessor: 'quantity'
  },
  {
    Header: "Status",
    accessor: 'status'
  },
  {
    Header: "Action",
    accessor: 'action'
  },
]

const arr: DataType[] = [
  {
    user: "Chirag",
    amount: 4500,
    discount: 500,
    quantity: 3,
    status: <span className='red'>Processing</span>,
    action: <Link to={'/admin/transaction/sajknaskd'}>Manage</Link>,
  },
  {
    user: "Nikhil",
    amount: 6000,
    discount: 300,
    quantity: 6,
    status: <span className='green'>Delivered</span>,
    action: <Link to={'/admin/transaction/sajknaskd'}>Manage</Link>,
  },
  {
    user: "Utsav",
    amount: 8000,
    discount: 600,
    quantity: 7,
    status: <span className='purple'>Shipping</span>,
    action: <Link to={'/admin/transaction/sajknaskd'}>Manage</Link>,
  }
]

const Transaction = () => {
  const [data] = useState<DataType[]>(arr)
  const Table = useCallback(TableHoc<DataType>(columns, data, "dashboard-product-box", "Transactions", true), [])

  return (
    <>
      <div className="admin-container">
        <AdminSidebar />
        <main>{Table()}</main>
      </div>
    </>
  )
}

export default Transaction
