import '../styles/globals.css'

//internal imports
import { ChatAppProvider } from '../Context/ChatAppContext';
import { NavBar } from '../Components/index';

//MyApp
const MyApp = ({ Component, pageProps }) => (
    <div>
        <ChatAppProvider>
            <NavBar/>
            <Component {...pageProps} />
        </ChatAppProvider>
    </div>
);

export default MyApp;