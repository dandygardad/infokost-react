/** @jsxImportSource @emotion/react */
import { HashLink as Link } from 'react-router-hash-link'
import * as style from './DataKost.style'
import * as global from './Global.style'
import DataTable from 'react-data-table-component'

const DataKost = () => {

    const columns = [
        {
            name: "Nama",
            selector: row => row.nama,
        },
        {
            name: "Harga",
            selector: row => row.harga,
        },
        {
            name: "Alamat",
            selector: row => row.alamat,
        },
        {
            name: "Aksi",
            selector: row => row.aksi,
        }
    ]

    const data = [
        {
            id: 1,
            nama: "Kost Ernias",
            harga: `Rp. ${10000000}`,
            alamat: "Jl. Kedondong No. 50, Romang Lompoa",
            aksi: <>
                <div css={style.table}>
                    <Link to={"/kost/kost-ernias#start"}>Lihat</Link>
                    <Link to={"/admin/edit/kost-ernias"}>Edit</Link>
                </div>
            </>
        },
        {
            id: 1,
            nama: "Kost Ernias",
            harga: `Rp. ${10000000}`,
            alamat: "Jl. Kedondong No. 50, Romang Lompoa",
            aksi: <>
                <div css={style.table}>
                    <Link to={"/kost/kost-ernias#start"}>Lihat</Link>
                    <Link to={"/admin/edit/kost-ernias"}>Edit</Link>
                </div>
            </>
        },
    ]
    
    return(
        <div css={global.container}>
            <h1>Data Kost</h1>
            <div>
                <DataTable columns={columns} data={data} pagination />
            </div>
        </div>
    )
}

export default DataKost