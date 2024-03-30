const Register = () => {

  const handleRegister = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
  }
  return (
    <div>
     <div className="mx-auto md:w-1/2">
     <h2 className='text-3xl mb-6'>Register</h2>
      <form onSubmit={handleRegister}>
       <input className='rounded-md py-2 px-4 mb-5 w-3/4' type="email" name="email" id="" placeholder='Email Address' />
       <br />
       <input className='rounded-md py-2 px-4 mb-5 w-3/4' type="password" name="password" id="" placeholder='Password'/>
       <br />
       {/* <input className=' btn btn-secondary mb-5 w-3/4' type="button" value="Register" /> */}
       <button className=' btn btn-secondary mb-5 w-3/4'  type="submit">Register</button>
      </form>
     </div>
    </div>
  );
};

export default Register;