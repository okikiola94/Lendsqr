// REACT DEFAULTS
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// COMPONENTS & IMAGES
import Logo from '../../assets/images/lendsqr.png'
import Signin from '../../assets/images/Login/login_img.png'

// STYLES
import styles from './Login.module.scss'

const Login = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setUser(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const validate = () => {
      if (user) {
        setIsLoading(prev => !prev)
        if (
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email) &&
          user.password.length >= 8
        ) {
          navigate('/dashboard')

          setUser({
            email: '',
            password: '',
          })
          return true
        } else {
          setIsLoading(prev => !prev)
          navigate('/', { replace: true })
          setUser({
            email: '',
            password: '',
          })
          return
        }
      }
      return false
    }
    validate()
  }

  return (
    <div className={styles.Login_Container}>
      <div className={styles.img_wrapper}>
        <img src={Logo} alt='logo' className={styles.logo_img} />
        <div className={styles.img_container}>
          <img src={Signin} alt='signin' />
        </div>
      </div>

      <div className={styles.signin_flex}>
        <div className={styles.signin_wrap}>
          <h1 className={styles.title}>Welcome!</h1>
          <p className={styles.subTitle}>Enter details to login</p>
          <form onSubmit={handleLogin} className={styles.login_form}>
            <input
              type='text'
              name='email'
              id='email'
              className={styles.loginEmail}
              placeholder=' Email'
              onChange={handleChange}
              value={user.email}
              required
            />
            <br />
            <div className={styles.password_input_container}>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                className={styles.loginPassword}
                placeholder='Password'
                onChange={handleChange}
                value={user.password}
                required
              />
              <button onClick={togglePassword} type='button'>
                {showPassword ? <p>HIDE</p> : <p>SHOW</p>}
              </button>
            </div>
            <h6 className={styles.password_forget}>FORGOT PASSWORD?</h6>
            <button className={styles.btn}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
