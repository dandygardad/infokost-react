/** @jsxImportSource @emotion/react */
import * as style from './Footer.style'

const Footer = () => {
    return(
        <div css={[style.footer]}>
            <div css={style.footer_content}>
                <img src={require('../../assets/img/infokost_black_final_crop.png')} alt="" />
                <table css={style.footer_table}>
                    <tbody>
                        <tr>
                            <td>E-mail</td>
                            <td><a href="mailto:infokostrl@gmail.com">infokostrl@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td>No. Telp</td>
                            <td><a href="tel:081234567788">0812345678899</a></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <p>© Info Kost, Inc. 2021</p>
        </div>
    )
}

export default Footer