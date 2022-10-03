/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import * as style from './DataKost.style'
import * as global from './Global.style'
import DataTable from 'react-data-table-component'

const DataKost = () => {
    const [dataKost, setDataKost] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('token')){
            fetch('http://localhost:8000/adminmode/places', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => response.json())
            .then(
                data => {
                    setDataKost(data.data.map(item => {
                        return {
                            id: item.id,
                            nama: item.name,
                            harga: `Rp. ${item.price}`,
                            aksi: <>
                                <div css={style.table}>
                                    <Link to={`/kost/${item.slug}#start`}>Lihat</Link>
                                    {/* <Link to={`/admin/edit/${item.slug}`}>Edit</Link> */}
                                    <Link to={`/admin/delete/${item.slug}`}>Hapus</Link>
                                </div>
                            </>
                        }
                    }))
                }
            )
        }
    }, [])

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
    
    return(
        <div css={global.container}>
            <h1>Data Kost</h1>
            <div>
                {dataKost ? <DataTable columns={columns} data={dataKost} pagination /> : <p css={style.loading}>Loading...</p>}
                
            </div>
        </div>
    )
}

export default DataKost