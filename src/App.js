import { Routes, Route } from 'react-router-dom';
import { HomePage, Collections, Contact, Signup } from './containers';
import { Login } from './containers/Login';
import { VIPPressRelease } from './containers/VIP-Press-Release';
import { TermsConditions } from './containers/Terms-Conditions';
import { PrivacyPolicy } from './containers/Privacy-Policy';
// import { AppleMartini } from './containers/Apple-Martini';
// import { Cranberry } from './containers/Cranberry';
// import { GinTonic } from './containers/Gin-Tonic';
// import { VIPVodkaa } from './containers/VIP-Vodka';
// import { VIPVodkaIce } from './containers/VIP-Vodka-Ice';
// import { Margarita } from './containers/Margarita';
// import { Mimosa } from './containers/Mimosa';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { Loader } from './components/loader';
// import { Mojito } from './containers/Mojito';
// import { Pinacolada } from './containers/Pinacolada';
import { MyOrder } from './containers/My-Order';
import { OrderHistory } from './containers/Order-History';
// import { PressRelease } from './containers/Press-Release';
import { Philosophy } from './containers/Philosophy';
import { VIPCryptocurrency } from './containers/VIPCryptocurrency';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  window.addEventListener('load', AOS.refreshHard);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/philosophy' element={<Philosophy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/terms-and-conditions' element={<TermsConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/vip-press-release' element={<VIPPressRelease />} />
        <Route path='/vipcryptocurrency' element={<VIPCryptocurrency />} />
        <Route path='/my-order' element={<MyOrder />} />
        <Route path='/order-history' element={<OrderHistory />} />
        {/* <Route path='/press-release' element={<PressRelease />} /> */}
      </Routes>
    );
  }
}

export default App;
