
import DaftarPesanan from '../components/DaftarPesanan'
import ListCardPesanan from '../components/ListCardPesanan'
import KelasSaya from '../components/KelasSaya'
import ProfilSaya from '../components/ProfilSaya'
import Footer from '../components/Footer'
import '../style/Pesanan.css'
import { dummyDataKelas } from '../components/data/dummyDataKelas.js'
import { useState } from 'react'

const Pesanan = () => {
  const [activeMenu, setActiveMenu] = useState('pesanan');

  return (
    <>
      <div className='pesanan-page'>
        <div className='daftar-pesanan-page'>
          <DaftarPesanan
            activeMenu={activeMenu}
            onMenuClick={setActiveMenu}
          />
        </div>

        {activeMenu === 'pesanan' && <ListCardPesanan />}
        {activeMenu === 'kelas' && <KelasSaya dataKelas={dummyDataKelas} />}
        {activeMenu === 'profil' && <ProfilSaya />}
      </div>
      <Footer />
    </>
  )
}

export default Pesanan