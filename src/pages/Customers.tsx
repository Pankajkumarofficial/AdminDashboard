import { ReactElement, useCallback, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar'
import { Column } from 'react-table';
import TableHoc from '../components/TableHoc';
import { FaTrash } from 'react-icons/fa';


interface DataType {
    avatar: ReactElement;
    name: string;
    gender: string;
    email: string;
    role: string;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    {
        Header: "Avatar",
        accessor: 'avatar'
    },
    {
        Header: "Name",
        accessor: 'name'
    },
    {
        Header: "Gender",
        accessor: 'gender'
    },
    {
        Header: "Email",
        accessor: 'email'
    },
    {
        Header: "Role",
        accessor: 'role'
    },
    {
        Header: "Action",
        accessor: 'action'
    },
]

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: DataType[] = [
    {
        avatar: (<img style={{ borderRadius: "50%" }} src={img} alt='shoes' />),
        name: "Nikhil",
        email: "nikhil@gmail.com",
        gender: "male",
        role: "user",
        action: (
            <button><FaTrash /></button>
        )
    },
    {
        avatar: (<img style={{ borderRadius: "50%" }} src={img} alt='shoes' />),
        name: "Utsav",
        email: "Utsav@gmail.com",
        gender: "male",
        role: "user",
        action: (
            <button><FaTrash /></button>
        )
    },
    {
        avatar: (<img style={{ borderRadius: "50%" }} src={img2} alt='shoes' />),
        name: "Chirag",
        email: "chirag@gmail.com",
        gender: "male",
        role: "user",
        action: (
            <button><FaTrash /></button>
        )
    },
]

const Customers = () => {
    const [data] = useState<DataType[]>(arr)
    const Table = useCallback(TableHoc<DataType>(columns, data, "dashboard-product-box", "Customers", true), [])

    return (
        <>
            <div className="admin-container">
                <AdminSidebar />
                <main>
                    {Table()}
                </main>
            </div>
        </>
    )
}

export default Customers
