import CottageIcon from '@mui/icons-material/Cottage';
import InfoIcon from '@mui/icons-material/Info';
const BranchSession = () => {
    return (
        <section className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <ul className='flex items-center'>
                        <li><a className='text-black' href='/'></a><CottageIcon />Home / </li>
                        <li><a className='text-black' href='/'></a><InfoIcon />Dashboard</li>
                    </ul>
                </div>
                {/* end left side */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <div className='bg-gray-200 px-3 py-2 rounded-lg'>
                            <span>Branch</span>
                        </div>
                        <select>
                            <option>Newron school & college</option>
                        </select>
                    </div>
                    {/* end branch */}
                    <div className='flex items-center space-x-2'>
                        <div className='bg-gray-200 px-3 py-2 rounded-lg'>
                            <span>Section</span>
                        </div>
                        <select>
                            <option>2022</option>
                            <option>2023</option>
                        </select>
                    </div>
                    {/* end section */}
                </div>
                {/* end right side */}
            </div>
        </section>
    );
};

export default BranchSession;