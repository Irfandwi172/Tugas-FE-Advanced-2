import { useReducer, useRef, useState } from 'react'
import '../style/ProfilSaya.css'
import defaultAvatar from '../assets/orang1.png'

const initialState = {
  fotoProfil: defaultAvatar,
  namaLengkap: 'Irfan Dwi Arfianto',
  email: 'irfan@email.com',
  kodeNegara: '+62',
  noHp: '82131334965',
}

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'SET_FOTO':
      return { ...state, fotoProfil: action.value }
    case 'SET_ALL':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const ProfilSaya = ({ dataProfil, onSimpan }) => {
  const [form, dispatch] = useReducer(
    formReducer,
    dataProfil ? { ...initialState, ...dataProfil } : initialState
  )
  const fileInputRef = useRef(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showKonfirmasi, setShowKonfirmasi] = useState(false)
  const [savedMessage, setSavedMessage] = useState('')

  const handleChange = (field) => (e) => {
    dispatch({ type: 'SET_FIELD', field, value: e.target.value })
  }

  const handleGantiFoto = () => {
    fileInputRef.current?.click()
  }

  const handleFotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      dispatch({ type: 'SET_FOTO', value: previewUrl })
    }
  }

  const handleSimpan = () => {
    onSimpan?.(form)
    setSavedMessage('Perubahan berhasil disimpan!')
    setTimeout(() => setSavedMessage(''), 2500)
  }

  return (
    <div className="profil-saya">
      <div className="profil-header">
        <img src={form.fotoProfil} alt={form.namaLengkap} className="profil-avatar" />
        <div className="profil-header-info">
          <h6>{form.namaLengkap}</h6>
          <p>{form.email}</p>
          <button className="btn-ganti-foto" onClick={handleGantiFoto}>
            Ganti Foto Profil
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFotoChange}
            hidden
          />
        </div>
      </div>

      <div className="profil-divider"></div>

      <div className="profil-form">
        <div className="form-group nama-lengkap">
          <label>Nama</label>
          <input
            type="text"
            value={form.namaLengkap}
            onChange={handleChange('namaLengkap')}
          />
        </div>

        <div className="form-group email">
          <label>E-Mail</label>
          <input
            type="email"
            value={form.email}
            onChange={handleChange('email')}
          />
        </div>

        <div className="formNomor">
          <div className="form-group-kode-negara">
            <label>No. Hp</label>
            <select
              value={form.kodeNegara}
              onChange={handleChange('kodeNegara')}
            >
              <option value="+62">+62</option>
              <option value="+1">+1</option>
              <option value="+65">+65</option>
            </select>
          </div>

          <div className="form-group no-hp">
            <label>&nbsp;</label>
            <input
              type="tel"
              value={form.noHp}
              onChange={handleChange('noHp')}
            />
          </div>
        </div>
      </div>

      <div className="profil-footer">
        {savedMessage && <span className="save-success-msg">{savedMessage}</span>}
        <button className="btn-simpan" onClick={handleSimpan}>
          Simpan
        </button>
      </div>
    </div>
  )
}

export default ProfilSaya