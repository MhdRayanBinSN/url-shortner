import * as React from 'react';
import axios from 'axios'
import { serverUrl } from '../../helpers/Constant';
interface IFormContainerProps {
  updateReloadState:()=>void
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const {updateReloadState } = props;
  const [fullUrl, setFullUrl] = React.useState<string>("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl
      })
      setFullUrl("")
      updateReloadState() 
    } catch (err) {
      console.log(err);

    }
  }
  return (
    <>
      <div className='container mx-auto p-2'>
        <div className="bg-banner my-8 rounded-xl bg-cover">
          <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
            <h2 className='text-white text-4xl text-center pb-4'>URL Shortner</h2>
            <p className='text-white text-center pb-2 text-xl font-extralight'>Paste your untidy link to shorten</p>
            <p className='text-white text-center pb-4 text-xl font-extralight'>
              free tool to shorten a URL or reduce link,Use URL shortner to create a shortened & next link making it easy to use
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">urlshortner.link/</div>
                  <input type="text" placeholder='add your link' required className='block w-full p-2 pl-36 border rounded hover:bg-gray-200 focus:bg-gray-300 transition duration-300'
                    value={fullUrl}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
                  />
                  <button type="submit" className='absolute inset-y-0 end-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue ms-2'>Short URL</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
