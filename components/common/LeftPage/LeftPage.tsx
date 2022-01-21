import { redirect } from 'next/dist/server/api-utils';
import React,{FunctionComponent} from 'react'

interface Props {
    data: {
        title: string;
        title2: string;
        subtext1: string;
        subtext2: string;
        textAlign: string;
        img: string;
    }
}
const CbPage: FunctionComponent<Props> = (props) => {
    const {data} = props;
    return (
        <div className='laftpage-container'>
            <img className='laftpage-photo' src={data.img} alt='blog-img' />
        </div>
    )
}

export default CbPage
