import '../../App.css';
import { Link } from 'react-router-dom';

export default function Aniflex() {
    return (
        <div>
            <div className='absolute p-4'>
                <Link to='/' >
                    <button className='text-3xl p-2 rounded-full border-2 border-black text-black'><i class="fa-solid fa-arrow-left"></i></button>
                </Link>
            </div>
            <div className='flex justify-center'>
                <h1 className='text-6xl font-bold text-center mt-4'>Aniflex</h1>
            </div>
        </div>
    )
}