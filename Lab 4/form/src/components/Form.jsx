import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeName } from "../store/slices/name"
import { changeEmail } from "../store/slices/email"
import { changePassword } from "../store/slices/password"
import { changeImage } from "../store/slices/image"

function Form() {
  const name = useSelector(state => state.name)
  const email = useSelector(state => state.email)
  const password = useSelector(state => state.password)
  const image = useSelector(state => state.image)

  const dispatch = useDispatch()

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const [userInfo, setUserInfo] = useState({
    // name: "",
    // email: "",
    // password: "",
    confPassword: "",
    // image: null
  })

  const [userInfoErrs, setUserInfoErrors] = useState({
    nameErr: "",
    emailErr: "",
    passwordErr: "",
    confPasswordErr: "",
    imageErr: null
  })

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        dispatch(changeName(e.target.value))
        break

      case "email":
        dispatch(changeEmail(e.target.value))
        break

      case "password":
        dispatch(changePassword(e.target.value))
        break

      case "confirm-password":
        setUserInfo({
          ...userInfo,
          confPassword: e.target.value,
        })
        break

      case "image":
        dispatch(changeImage(e.target.value))
        break
    }
  }

  const validateForm = () => {
    setUserInfoErrors({
      nameErr: !name
        ? "Name is required"
        : name.includes(" ")
          ? "Name cannot contain spaces"
          : "",
      emailErr: !email
        ? "Email is required"
        : !emailPattern.test(email)
          ? "Please provide a valid email address"
          : "",
      passwordErr: !password
        ? "Password is required"
        : password.length < 8 || password.length > 12
          ? "Password length must be between 8-12 characters"
          : "",
      confPasswordErr: password !== userInfo.confPassword
        ? "Password does not match"
        : "",
      imageErr: !image
      ? "Image is required"
      : "",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm()

    if (
      !userInfoErrs.nameErr &&
      !userInfoErrs.emailErr &&
      !userInfoErrs.password &&
      !userInfoErrs.confPasswordErr &&
      !userInfoErrs.imageErr
    ) {
      console.log(userInfo)
    }
  }

  return (
    <form className="d-flex flex-column justify-content-center align-items-start gap-3 vh-100 ms-5">
      <div>
        <label className="me-3">Name</label>
        <input type="text" onChange={handleChange} name="name" required />
        {userInfoErrs.nameErr && <p className="my-2 text-danger">{userInfoErrs.nameErr}</p>}
      </div>

      <div>
        <label className="me-3">Email</label>
        <input type="email" onChange={handleChange} name="email" required />
        {userInfoErrs.emailErr && <p className="my-2 text-danger">{userInfoErrs.emailErr}</p>}
      </div>

      <div>
        <label className="me-3">Password</label>
        <input type="password" onChange={handleChange} name="password" required />
        {userInfoErrs.passwordErr && <p className="my-2 text-danger">{userInfoErrs.passwordErr}</p>}
      </div>

      <div>
        <label className="me-3">Confirm Password</label>
        <input type="password" onChange={handleChange} name="confirm-password" required />
        {userInfoErrs.confPasswordErr && <p className="my-2 text-danger">{userInfoErrs.confPasswordErr}</p>}
      </div>

      <div>
        <label className="me-3">Upload Image</label>
        <input type="file" onChange={handleChange} name="image" accept="image/*" required />
        {userInfoErrs.imageErr && <p className="my-2 text-danger">{userInfoErrs.imageErr}</p>}
      </div>
      
      <button onClick={handleSubmit} className="btn btn-primary">submit</button>
    </form>
  )
}

export default Form
