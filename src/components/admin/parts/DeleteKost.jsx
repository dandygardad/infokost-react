import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteKost = () => {
    const navigate = useNavigate()
    const { slug } = useParams()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/adminmode/deletekost`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                slug: slug
            })
        }).then(response => response.json())
        .then(item => {
            if(item.message === 'success-deleted'){
                navigate("/admin")
            }
        })
    }, [])
    

    return(
        <p>Something wrong happened</p>
    )
}

export default DeleteKost