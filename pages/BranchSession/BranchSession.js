import CottageIcon from '@mui/icons-material/Cottage';
import InfoIcon from '@mui/icons-material/Info';
const BranchSession = () => {
    return (
        <section className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <ul className='flex items-center space-x-3'>
                        <li className='text-blue-600'><a className='text-blue-600' href='/'></a><CottageIcon className="w-5" />Home / </li>
                        <li><a className='text-black' href='/'></a><InfoIcon className="w-5" />Dashboard</li>
                    </ul>
                </div>
                {/* end left side */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2 border'>
                        <div className='bg-gray-200 px-3 py-2'>
                            <span>Branch</span>
                        </div>
                        <select className='w-[150px]'>
                            <option>Newron school & college</option>
                        </select>
                    </div>
                    {/* end branch */}
                    <div className='flex items-center space-x-2 border'>
                        <div className='bg-gray-200 px-3 py-2'>
                            <span>Session</span>
                        </div>
                        <select className='w-[150px]'>
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