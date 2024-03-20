import { useState } from "react"

function Form() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
    image: null
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
        setUserInfo({
          ...userInfo,
          name: e.target.value,
        })
        break

      case "email":
        setUserInfo({
          ...userInfo,
          email: e.target.value,
        })
        break

      case "password":
        setUserInfo({
          ...userInfo,
          password: e.target.value,
        })
        break

      case "confirm-password":
        setUserInfo({
          ...userInfo,
          confPassword: e.target.value,
        })
        break

      case "image":
        setUserInfo({
          ...userInfo,
          image: e.target.files[0],
        })
        break
    }
  }

  const validateForm = () => {
    setUserInfoErrors({
      nameErr: !userInfo.name
        ? "Name is required"
        : userInfo.name.includes(" ")
          ? "Name cannot contain spaces"
          : "",
      emailErr: !userInfo.email
        ? "Email is required"
        : !emailPattern.test(userInfo.email)
          ? "Please provide a valid email address"
          : "",
      passwordErr: !userInfo.password
        ? "Password is required"
        : userInfo.password.length < 8 || userInfo.password.length > 12
          ? "Password length must be between 8-12 characters"
          : "",
      confPasswordErr: userInfo.password !== userInfo.confPassword
        ? "Password does not match"
        : "",
      imageErr: !userInfo.image
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
