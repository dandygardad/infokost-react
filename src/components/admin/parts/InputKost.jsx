// Used for input & edit
/** @jsxImportSource @emotion/react */
import * as global from './Global.style'
import * as style from './InputKost.style'
import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const InputKost = () => {
    const { id } = useParams()
    const [isFilledForm, setIsFilledForm] = useState(false)
    const [messageForm, setMessageForm] = useState(false)
    const navigate = useNavigate()

    // initial input for form
    const inputNamaKost = useRef()
    const inputSlug = useRef()
    const inputHarga = useRef()
    const inputAlamat = useRef()
    const inputNotel = useRef()
    const inputLong = useRef()
    const inputLat = useRef()
    const inputGMaps = useRef()
    const inputImage1 = useRef()
    const inputImage2 = useRef()
    const inputImage3 = useRef()
    const inputImage4 = useRef()
    const inputDesc = useRef()

    if(id) {
      fetch()  
    }

    const checkInput = () => {
        setIsFilledForm(false)
        
        // Check form first
        if(!(inputNamaKost.current.value && inputSlug.current.value && inputHarga.current.value && inputAlamat.current.value && inputNotel.current.value && inputLong.current.value && inputLat.current.value && inputGMaps.current.value && inputDesc.current.value)){
            return
        }

        // Check image exist / jpeg
        if(!(inputImage1.current.files[0].type && inputImage2.current.files[0] && inputImage3.current.files[0] && inputImage4.current.files[0])){
            return
        }
        if(!((inputImage1.current.files[0].type === 'image/jpeg' && inputImage2.current.files[0].type === 'image/jpeg' && inputImage3.current.files[0].type === 'image/jpeg' && inputImage4.current.files[0].type === 'image/jpeg'))){
            return
        }

        setIsFilledForm(true)
    }

    const uploadForm = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", inputNamaKost.current.value)
        formData.append("slug", inputSlug.current.value)
        formData.append("price", inputHarga.current.value)
        formData.append("image", inputImage1.current.files[0])
        formData.append("image2", inputImage2.current.files[0])
        formData.append("image3", inputImage3.current.files[0])
        formData.append("image4", inputImage4.current.files[0])
        formData.append("desc", inputDesc.current.value)
        formData.append("alamat", inputAlamat.current.value)
        formData.append("notel", inputNotel.current.value)
        formData.append("long", inputLong.current.value)
        formData.append("lat", inputLat.current.value)
        formData.append("link_gmaps", inputGMaps.current.value)
        
        fetch("http://localhost:8000/adminmode/createkost", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: formData
        }).then(response => response.json())
        .then(item => {
            if(item.message === 'success_stored'){
                navigate('/admin')
            } else {
                setMessageForm(item.message)
            }
        })
    }
    return(
        <div css={[style.form, global.container]}>
            <h1>{id ? "Edit Kost" : "Input Kost"}</h1>
            {messageForm && <p>{messageForm}</p>}
            <form method='post' onSubmit={uploadForm} onChange={checkInput}>
                <div css={style.inputForm}>
                    <input type="text" ref={inputNamaKost} placeholder='Nama Kost' required />
                    <input type="text" ref={inputSlug} placeholder='Custom Link' required />
                </div>
                <input type="number" ref={inputHarga} placeholder='Harga' required />
                <div css={style.inputForm}>
                    <input type="text" ref={inputAlamat} placeholder='Alamat' required />
                    <input type="number" ref={inputNotel} placeholder='No. Telepon' required />
                </div>
                <div css={style.inputForm}>
                    <input type="text" ref={inputLong} placeholder='Longitude' required />
                    <input type="text" ref={inputLat} placeholder='Latitude' required />
                </div>
                <input type="text" ref={inputGMaps} placeholder='Link Google Maps' required />
                <div css={style.inputForm}>
                    <input type="file" ref={inputImage1} required />
                    <input type="file" ref={inputImage2} required />
                </div>
                <div css={style.inputForm}>
                    <input type="file" ref={inputImage3} required />
                    <input type="file" ref={inputImage4} required />
                </div>
                <textarea rows="8" ref={inputDesc} placeholder="Masukkan deskripsi kost" required />
                {isFilledForm && <button>Submit Data Kost</button>}
            </form>
        </div>
    )
}

export default InputKost