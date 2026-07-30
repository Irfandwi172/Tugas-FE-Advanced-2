import { useState } from 'react'
import '../style/KelasSaya.css'
import iconSearch from '../assets/search.png'
import CardKelasSaya from './CardKelasSaya'

const tabs = [
  { key: 'semua', label: 'Semua Kelas' },
  { key: 'berjalan', label: 'Sedang Berjalan' },
  { key: 'selesai', label: 'Selesai' },
]

const KelasSaya = ({ dataKelas = [] }) => {
  const [activeTab, setActiveTab] = useState('semua')
  const [keyword, setKeyword] = useState('')

  const filteredKelas = dataKelas.filter((kelas) => {
    const matchTab = activeTab === 'semua' ? true : kelas.status === activeTab
    const matchSearch = kelas.judul.toLowerCase().includes(keyword.toLowerCase())
    return matchTab && matchSearch
  })

  return (
    <div className="kelas-saya">
      <div className="kelas-saya-topbar">
        <div className="kelas-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`kelas-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="kelas-search">
          <input
            type="text"
            placeholder="Cari Kelas"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <img src={iconSearch} alt="cari" />
        </div>
      </div>

      <div className="kelas-list">
        {filteredKelas.map((kelas) => (
          <CardKelasSaya key={kelas.id} {...kelas} />
        ))}
      </div>
    </div>
  )
}

export default KelasSaya